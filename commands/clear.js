import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Supprime un certain nombre de messages.')
        .addIntegerOption(option =>
            option.setName('nombre')
                .setDescription('Le nombre de messages à supprimer')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages | PermissionFlagsBits.Administrator),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages) && 
            !interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true });
        }

        const numberOfMessages = interaction.options.getInteger('nombre');

        try {
            const deletedMessages = await interaction.channel.bulkDelete(numberOfMessages, true);
            return interaction.reply({ content: `J'ai supprimé ${deletedMessages.size} message(s).`, ephemeral: true });
        } catch (error) {
            console.error('Erreur lors de la suppression des messages :', error);
            return interaction.reply({ content: 'Une erreur est survenue lors de la suppression des messages.', ephemeral: true });
        }
    },
};
