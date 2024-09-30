import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

let antiraidMode = false;

export default {
    data: new SlashCommandBuilder()
        .setName('antiraid')
        .setDescription('Active ou désactive le mode anti-raid empêchant toute personne de rejoindre le serveur.')
        .addBooleanOption(option => 
            option.setName('activer')
                .setDescription('Activer ou désactiver le mode anti-raid')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    async execute(interaction) {
        const activate = interaction.options.getBoolean('activer');
        
        if (activate) {
            antiraidMode = true;
            await interaction.reply('Mode anti-raid activé. Les nouveaux membres ne pourront pas rejoindre le serveur.');
        } else {
            antiraidMode = false;
            await interaction.reply('Mode anti-raid désactivé. Les nouveaux membres peuvent à nouveau rejoindre le serveur.');
        }
    },
};
