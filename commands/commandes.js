import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('commandes')
        .setDescription('Affiche la liste des commandes disponibles'),
    async execute(interaction) {
        const client = interaction.client;
        const commands = Array.from(client.commands.values());

        const publicCommands = [];
        const staffCommands = [];

        commands.forEach(cmd => {
            if (cmd.data.default_member_permissions === undefined) {
                publicCommands.push(cmd);
            } else {
                staffCommands.push(cmd);
            }
        });

        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Commandes disponibles')
            .setDescription('Voici la liste des commandes disponibles sur ce bot :')
            .addFields(
                {
                    name: 'Commandes publiques :',
                    value: publicCommands.map(cmd => `**/${cmd.data.name}** : ${cmd.data.description}`).join('\n') || 'Aucune commande publique disponible',
                },
                {
                    name: 'Commandes du staff :',
                    value: staffCommands.map(cmd => `**/${cmd.data.name}** : ${cmd.data.description}`).join('\n') || 'Aucune commande staff disponible',
                }
            )
            .setFooter({ text: 'Oui, il y en a beaucoup...' })
            .setTimestamp();

        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
