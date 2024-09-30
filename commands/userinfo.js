import { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Affiche des informations détaillées sur un utilisateur.')
        .addUserOption(option => 
            option.setName('utilisateur')
                .setDescription('L\'utilisateur dont vous voulez voir les informations')
                .setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('utilisateur') || interaction.user;
        const member = interaction.guild.members.cache.get(user.id);

        const embed = new EmbedBuilder()
            .setColor(member ? member.displayHexColor : '#001F93')
            .setTitle(`Informations sur ${user.username}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 256 }))
            .addFields(
                { name: 'Nom d\'utilisateur', value: user.username, inline: true },
                { name: 'ID', value: user.id, inline: true },
                { name: 'Tag Discord', value: user.tag, inline: true },
                { name: 'Compte créé le', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`, inline: false },
                { name: 'Bot', value: user.bot ? 'Oui' : 'Non', inline: true },
                { name: 'Système', value: user.system ? 'Oui' : 'Non', inline: true }
            )
            .setTimestamp();

        if (member) {
            embed.addFields(
                { name: 'A rejoint le serveur le', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`, inline: false },
                { name: 'Surnom sur le serveur', value: member.nickname || 'Aucun', inline: true },
                { name: 'Statut', value: member.presence ? member.presence.status : 'Inconnu', inline: true },
                { name: 'Rôle le plus élevé', value: member.roles.highest.name, inline: true },
                { name: 'Rôles', value: member.roles.cache.size > 1 ? member.roles.cache.filter(r => r.id !== interaction.guild.id).map(r => `<@&${r.id}>`).join(', ') : 'Aucun' },
                { name: 'Permissions clés', value: getKeyPermissions(member), inline: false }
            );

            if (member.premiumSince) {
                embed.addFields({ name: 'Booster depuis', value: `<t:${Math.floor(member.premiumSinceTimestamp / 1000)}:F>`, inline: false });
            }
        }

        await interaction.reply({ embeds: [embed] });
    },
};

function getKeyPermissions(member) {
    const keyPermissions = [
        { flag: PermissionsBitField.Flags.Administrator, name: 'Administrateur' },
        { flag: PermissionsBitField.Flags.ManageGuild, name: 'Gérer le serveur' },
        { flag: PermissionsBitField.Flags.ManageRoles, name: 'Gérer les rôles' },
        { flag: PermissionsBitField.Flags.ManageChannels, name: 'Gérer les salons' },
        { flag: PermissionsBitField.Flags.KickMembers, name: 'Expulser des membres' },
        { flag: PermissionsBitField.Flags.BanMembers, name: 'Bannir des membres' },
        { flag: PermissionsBitField.Flags.ManageMessages, name: 'Gérer les messages' },
        { flag: PermissionsBitField.Flags.MentionEveryone, name: 'Mentionner @everyone' },
    ];

    const memberPermissions = member.permissions.toArray();
    const relevantPermissions = keyPermissions.filter(p => memberPermissions.includes(p.flag));

    return relevantPermissions.length > 0 
        ? relevantPermissions.map(p => p.name).join(', ') 
        : 'Aucune permission clé';
}
