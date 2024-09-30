import { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond avec Pong et affiche le ping du bot.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages | PermissionFlagsBits.Administrator),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages) && 
            !interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true });
        }

        const loadingEmbed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Commande : Ping')
            .setDescription('En cours de chargement...')
            .setFooter({ text: 'Je bosse dur là !' })
            .setTimestamp();

        await interaction.reply({ embeds: [loadingEmbed], fetchReply: true });
        await new Promise(resolve => setTimeout(resolve, 100));

        const ping = interaction.client.ws.ping;
        const sentEmbed = await interaction.fetchReply();
        const timeDiff = sentEmbed.createdTimestamp - interaction.createdTimestamp;

        const resultEmbed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Pong ! 🏓')
            .setDescription(`Ping WebSocket : ${ping}ms\nLatence API : ${timeDiff}ms`)
            .setFooter({ text: 'Succès' })
            .setTimestamp();

        await interaction.editReply({ embeds: [resultEmbed] });
    },
};
