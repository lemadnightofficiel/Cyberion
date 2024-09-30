import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('rapport')
        .setDescription('Affiche les dernières actions des logs du serveur.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
            return interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true });
        }

        await interaction.deferReply({ ephemeral: true });

        try {
            const auditLogs = await interaction.guild.fetchAuditLogs({
                limit: 50,
            });

            const embeds = [];
            let currentEmbed = new EmbedBuilder()
                .setColor('#001F93')
                .setTitle('Rapport des dernières actions')
                .setDescription('Voici les dernières actions enregistrées dans les logs du serveur :')
                .setTimestamp();

            let fieldCount = 0;

            auditLogs.entries.forEach((entry, index) => {
                if (fieldCount === 25) {
                    embeds.push(currentEmbed);
                    currentEmbed = new EmbedBuilder()
                        .setColor('#0099ff')
                        .setTitle(`Rapport des dernières actions (suite)`)
                        .setTimestamp();
                    fieldCount = 0;
                }

                currentEmbed.addFields({
                    name: `Action ${index + 1}`,
                    value: `Type: ${entry.action}\nExécuteur: ${entry.executor.tag}\nCible: ${entry.target ? entry.target.tag || entry.target.name || 'Inconnu' : 'Aucune'}\nRaison: ${entry.reason || 'Aucune raison fournie'}`,
                    inline: false
                });

                fieldCount++;
            });

            if (fieldCount > 0) {
                embeds.push(currentEmbed);
            }

            await interaction.editReply({ embeds: embeds, ephemeral: true });
        } catch (error) {
            console.error('Erreur lors de la récupération des logs :', error);
            await interaction.editReply({ content: 'Une erreur est survenue lors de la récupération des logs.', ephemeral: true });
        }
    },
};
