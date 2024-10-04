import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } from 'discord.js';

// Stockage temporaire des configurations d'autorole (à remplacer par une base de données dans une vraie application)
const autoRoleConfigs = new Map();

export default {
    data: new SlashCommandBuilder()
        .setName('autorole')
        .setDescription('Configure les rôles automatiques avec des emojis')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Le salon où envoyer le message d\'autorole')
                .setRequired(true)),

    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const guildId = interaction.guild.id;

        if (!channel.isTextBased()) {
            return interaction.reply({ content: "Le salon sélectionné doit être un salon textuel.", ephemeral: true });
        }

        await interaction.reply({ content: "Configuration des autoroles commencée. Envoyez 'fin' quand vous avez terminé.", ephemeral: true });

        const roleConfigs = [];
        const filter = m => m.author.id === interaction.user.id;

        while (true) {
            await interaction.followUp({ content: "Mentionnez un rôle, suivi d'un espace et de l'emoji correspondant (ex: @Role 👍), ou tapez 'fin' pour terminer.", ephemeral: true });

            const collected = await interaction.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const message = collected.first();

            if (message.content.toLowerCase() === 'fin') break;

            const [roleMention, emoji] = message.content.split(' ');
            const roleId = roleMention.match(/\d+/)?.[0];

            if (!roleId || !emoji) {
                await interaction.followUp({ content: "Format invalide. Réessayez.", ephemeral: true });
                continue;
            }

            const role = interaction.guild.roles.cache.get(roleId);
            if (!role) {
                await interaction.followUp({ content: "Rôle non trouvé. Réessayez.", ephemeral: true });
                continue;
            }

            roleConfigs.push({ roleId, emoji });
            await interaction.followUp({ content: `Rôle ${role.name} associé à l'emoji ${emoji}`, ephemeral: true });
        }

        if (roleConfigs.length === 0) {
            return interaction.followUp({ content: "Aucun rôle configuré. Opération annulée.", ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Rôles automatiques')
            .setDescription('Réagissez avec l\'emoji correspondant pour obtenir un rôle !')
            .addFields(roleConfigs.map(config => ({
                name: interaction.guild.roles.cache.get(config.roleId).name,
                value: config.emoji,
                inline: true
            })));

        const message = await channel.send({ embeds: [embed] });

        for (const config of roleConfigs) {
            await message.react(config.emoji);
        }

        autoRoleConfigs.set(guildId, { messageId: message.id, roles: roleConfigs });

        await interaction.followUp({ content: "Configuration des autoroles terminée et message envoyé !", ephemeral: true });
    },
};

// Fonction pour gérer les réactions
export function handleReaction(reaction, user, client) {
    if (user.bot) return;

    const { message, emoji } = reaction;
    const guildId = message.guild.id;
    const config = autoRoleConfigs.get(guildId);

    if (!config || message.id !== config.messageId) return;

    const roleConfig = config.roles.find(r => r.emoji === emoji.name);
    if (!roleConfig) return;

    const member = message.guild.members.cache.get(user.id);
    const role = message.guild.roles.cache.get(roleConfig.roleId);

    if (!role) return;

    try {
        if (member.roles.cache.has(role.id)) {
            member.roles.remove(role);
            user.send(`Le rôle ${role.name} vous a été retiré.`);
        } else {
            member.roles.add(role);
            user.send(`Le rôle ${role.name} vous a été attribué.`);
        }
    } catch (error) {
        console.error('Erreur lors de l\'attribution/retrait du rôle:', error);
    }
}
