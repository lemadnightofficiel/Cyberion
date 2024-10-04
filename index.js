import { Client, GatewayIntentBits, Events, Collection, EmbedBuilder } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { handleReaction } from './commands/autorole.js';

// Chargement des variables d'environnement
dotenv.config();

// Récupération des informations d'identification
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const CAPTCHA_CHANNEL_ID = process.env.CAPTCHA_CHANNEL_ID;
const VERIFIED_ROLE_ID = process.env.VERIFIED_ROLE_ID;
const WELCOME_CHANNEL_ID = process.env.WELCOME_CHANNEL_ID;
const LOGS_CHANNEL_ID = process.env.LOGS_CHANNEL_ID;

// Vérification de la présence des variables d'environnement nécessaires
if (!token || !clientId || !guildId || !CAPTCHA_CHANNEL_ID || !VERIFIED_ROLE_ID || !WELCOME_CHANNEL_ID) {
    console.error('Erreur : Variables d\'environnement manquantes. Assurez-vous que TOKEN, CLIENT_ID, GUILD_ID, CAPTCHA_CHANNEL_ID, VERIFIED_ROLE_ID et WELCOME_CHANNEL_ID sont définis dans le fichier .env');
    process.exit(1);
}

// Fonction pour obtenir __dirname et __filename dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Création du client Discord avec les intents nécessaires
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

// Initialisation de la collection des commandes
client.commands = new Collection();

// Fonction pour envoyer des logs
async function sendLogEmbed(guild, title, description, color, fields = []) {
    const logsChannel = guild.channels.cache.get(LOGS_CHANNEL_ID);
    if (logsChannel) {
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(color)
            .addFields(fields)
            .setTimestamp();
        await logsChannel.send({ embeds: [embed] });
    }
}

// Gestion des bans
client.on(Events.GuildBanAdd, async (ban) => {
    const fetchedLogs = await ban.guild.fetchAuditLogs({
        limit: 1,
        type: AuditLogEvent.MemberBanAdd,
    });
    const banLog = fetchedLogs.entries.first();
    const { executor, reason } = banLog;

    await sendLogEmbed(
        ban.guild,
        "Membre banni",
        `${ban.user.tag} a été banni.`,
        "#FF0000",
        [
            { name: "Banni par", value: executor.tag },
            { name: "Raison", value: reason || "Aucune raison fournie" }
        ]
    );
});

// Gestion des débans
client.on(Events.GuildBanRemove, async (ban) => {
    const fetchedLogs = await ban.guild.fetchAuditLogs({
        limit: 1,
        type: AuditLogEvent.MemberBanRemove,
    });
    const unbanLog = fetchedLogs.entries.first();
    const { executor } = unbanLog;

    await sendLogEmbed(
        ban.guild,
        "Membre débanni",
        `${ban.user.tag} a été débanni.`,
        "#00FF00",
        [
            { name: "Débanni par", value: executor.tag }
        ]
    );
});

// Gestion des kicks
client.on(Events.GuildMemberRemove, async (member) => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: AuditLogEvent.MemberKick,
    });
    const kickLog = fetchedLogs.entries.first();

    if (kickLog) {
        const { executor, reason } = kickLog;
        await sendLogEmbed(
            member.guild,
            "Membre expulsé",
            `${member.user.tag} a été expulsé.`,
            "#FFA500",
            [
                { name: "Expulsé par", value: executor.tag },
                { name: "Raison", value: reason || "Aucune raison fournie" }
            ]
        );
    }
});

// Gestion des timeouts (mutes)
client.on(Events.GuildMemberUpdate, async (oldMember, newMember) => {
    if (!oldMember.isCommunicationDisabled() && newMember.isCommunicationDisabled()) {
        const fetchedLogs = await newMember.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberUpdate,
        });
        const timeoutLog = fetchedLogs.entries.first();
        const { executor, reason } = timeoutLog;

        await sendLogEmbed(
            newMember.guild,
            "Membre mute",
            `${newMember.user.tag} a été mute.`,
            "#FFA500",
            [
                { name: "Mute par", value: executor.tag },
                { name: "Durée", value: `${newMember.communicationDisabledUntil}` },
                { name: "Raison", value: reason || "Aucune raison fournie" }
            ]
        );
    }
});

// Fonction pour charger les commandes
const loadCommands = async () => {
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    const commands = [];

    for (const file of commandFiles) {
        try {
            const filePath = pathToFileURL(path.join(commandsPath, file)).toString();
            const { default: command } = await import(filePath);

            if (!command.data || !command.data.name || !command.data.description) {
                console.error(`La commande ${file} est invalide : elle doit avoir un nom et une description.`);
                continue;
            }

            client.commands.set(command.data.name, command);
            commands.push(command.data.toJSON());
        } catch (error) {
            console.error(`Erreur lors du chargement de la commande ${file}:`, error);
        }
    }

    console.log('Commandes chargées :', commands.map(cmd => cmd.name).join(', '));
    return commands;
};

// Création de l'instance REST
const rest = new REST({ version: '10' }).setToken(token);

// Enregistrement des commandes dans l'API Discord
const registerCommands = async (commands) => {
    try {
        console.log('Début du rafraîchissement des commandes (/) de l\'application.');
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
        console.log('Commandes (/) de l\'application rechargées avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des commandes:', error);
    }
};

// Fonction pour générer un captcha aléatoire
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Gestion de l'arrivée d'un nouveau membre
client.on(Events.GuildMemberAdd, async (member) => {
    const captchaChannel = member.guild.channels.cache.get(CAPTCHA_CHANNEL_ID);
    if (captchaChannel) {
        const captcha = generateCaptcha();
        const embed = new EmbedBuilder()
            .setTitle("C'est l'heure de franchir la douane !")
            .setDescription(`Bienvenue ${member}! Pour vérifier votre compte, veuillez recopier le code suivant : **${captcha}**\nVous avez 60 secondes pour répondre. \nPersonne n'échappe à ma vigilance !`)
            .setColor('#001F93')
            .setFooter({ text: 'Vérification en cours' })
            .setTimestamp();

        const message = await captchaChannel.send({ embeds: [embed] });

        try {
            const filter = m => m.author.id === member.id;
            const collected = await captchaChannel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const response = collected.first().content;

            if (response.toLowerCase() === captcha.toLowerCase()) {
                const role = member.guild.roles.cache.get(VERIFIED_ROLE_ID);
                if (role) {
                    await member.roles.add(role);
                    const successMessage = await captchaChannel.send(`${member} a été vérifié avec succès!`);
                    
                    // Envoyer le message de bienvenue
                    const welcomeChannel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
                    if (welcomeChannel) {
                        const welcomeEmbed = new EmbedBuilder()
                            .setTitle(`Bienvenue à Cyberia !`)
                            .setDescription(`${member}, n'oublie pas de lire les règles et de passer un bon moment ! Au moindre problème ou à la moindre question n'hésite pas à contacter l'équipe du Staff.`)
                            .setColor('#001F93')
                            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
                            .setFooter({ text: `Membre #${member.guild.memberCount}` })
                            .setTimestamp();

                        await welcomeChannel.send({ embeds: [welcomeEmbed] });
                    }

                    setTimeout(async () => {
                        await message.delete().catch(console.error);
                        await successMessage.delete().catch(console.error);
                        await collected.first().delete().catch(console.error);
                    }, 5000);
                } else {
                    console.error(`Le rôle avec l'ID ${VERIFIED_ROLE_ID} n'a pas été trouvé.`);
                    await captchaChannel.send(`Erreur lors de la vérification. Veuillez contacter un administrateur.`);
                }
            } else {
                const errorMessage = await captchaChannel.send(`${member}, le code entré est incorrect. Veuillez réessayer.`);
                setTimeout(async () => {
                    await message.delete().catch(console.error);
                    await errorMessage.delete().catch(console.error);
                    await collected.first().delete().catch(console.error);
                }, 5000);
            }
        } catch (error) {
            console.error('Erreur lors de la vérification:', error);
            const errorMessage = await captchaChannel.send(`${member}, vous n'avez pas répondu à temps ou une erreur s'est produite. Veuillez réessayer ou contacter un administrateur.`);
            
            setTimeout(async () => {
                await message.delete().catch(console.error);
                await errorMessage.delete().catch(console.error);
            }, 10000);
        }
    }
});

// Gestion des interactions
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) {
        await interaction.reply({ content: 'Commande non reconnue !', ephemeral: true });
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('Erreur lors de l\'exécution de la commande:', error);
        const errorMessage = 'Une erreur s\'est produite lors de l\'exécution de cette commande.';
        if (interaction.deferred || interaction.replied) {
            await interaction.followUp({ content: errorMessage, ephemeral: true });
        } else {
            await interaction.reply({ content: errorMessage, ephemeral: true });
        }
    }
});

// Autorole
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Erreur lors de la récupération de la réaction:', error);
            return;
        }
    }
    handleReaction(reaction, user, client);
});

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Erreur lors de la récupération de la réaction:', error);
            return;
        }
    }
    handleReaction(reaction, user, client);
});

// Connexion du bot
const startBot = async () => {
    try {
        const commands = await loadCommands();
        await registerCommands(commands);
        await client.login(token);
    } catch (error) {
        console.error('Erreur lors du démarrage du bot:', error);
    }
};

// Événement client prêt
client.once(Events.ClientReady, () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
});

// Gestion des erreurs non capturées
process.on('unhandledRejection', error => {
    console.error('Erreur non gérée:', error);
});

// Démarrer le bot
startBot();
