import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('serverstats')
        .setDescription('Affiche les statistiques du serveur.'),
    async execute(interaction) {
        const guild = interaction.guild;
        const totalMembers = guild.memberCount;
        const onlineMembers = guild.members.cache.filter(member => member.presence?.status === 'online').size;
        const textChannels = guild.channels.cache.filter(channel => channel.type === 0).size;
        const voiceChannels = guild.channels.cache.filter(channel => channel.type === 2).size;
        const roles = guild.roles.cache.size;

        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle(`Statistiques de ${guild.name}`)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .addFields(
                { name: 'Membres totaux', value: totalMembers.toString(), inline: true },
                { name: 'Membres en ligne', value: onlineMembers.toString(), inline: true },
                { name: 'Salons textuels', value: textChannels.toString(), inline: true },
                { name: 'Salons vocaux', value: voiceChannels.toString(), inline: true },
                { name: 'Rôles', value: roles.toString(), inline: true },
                { name: 'Date de création', value: guild.createdAt.toLocaleDateString(), inline: true }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};