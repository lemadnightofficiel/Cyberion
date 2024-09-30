import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const sources = [
    { name: 'ANSSI', url: 'https://www.ssi.gouv.fr/', description: "Agence nationale de la sécurité des systèmes d'information"},
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/', description: 'Blog de Brian Krebs sur la sécurité informatique' },
    { name: 'The Hacker News', url: 'https://thehackernews.com/', description: 'Actualités sur la cybersécurité' },
    { name: 'Schneier on Security', url: 'https://www.schneier.com/', description: 'Blog de Bruce Schneier sur la sécurité et la cryptographie' },
    { name: 'Dark Reading', url: 'https://www.darkreading.com/', description: 'Actualités et analyses sur la cybersécurité' },
    { name: 'ZDNet', url: 'https://www.zdnet.com/topic/security/', description: 'Section sécurité de ZDNet' },
    { name: 'Ars Technica', url: 'https://arstechnica.com/gadgets/tech/', description: 'Actualités tech et analyses approfondies' },
    { name: 'The Register', url: 'https://www.theregister.com/', description: "Actualités tech avec un focus sur l'infrastructure IT"},
    { name: 'Naked Security', url: 'https://nakedsecurity.sophos.com/', description: 'Blog de sécurité de Sophos' },
    { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com/', description: 'Actualités sur la sécurité informatique et les malwares' },
    { name: 'Threatpost', url: 'https://threatpost.com/', description: 'Actualités sur les menaces et la sécurité informatique' },
    { name: 'Infosecurity Magazine', url: 'https://www.infosecurity-magazine.com/', description: "Magazine en ligne sur la sécurité de l'information"},
    { name: 'CSO Online', url: 'https://www.csoonline.com/', description: 'Ressources pour les professionnels de la sécurité' },
    { name: 'Packet Storm', url: 'https://packetstormsecurity.com/', description: 'Ressources et actualités sur la sécurité informatique' },
    { name: 'Security Week', url: 'https://www.securityweek.com/', description: 'Actualités et analyses sur la cybersécurité' },
    { name: 'CERT-FR', url: 'https://www.cert.ssi.gouv.fr/', description: "Centre gouvernemental de veille, d'alerte et de réponse aux attaques informatiques"},
    { name: 'CNIL', url: 'https://www.cnil.fr/', description: "Commission Nationale de l'Informatique et des Libertés"},
    { name: 'Clubic', url: 'https://www.clubic.com/cybersecurite/', description: 'Actualités sur la cybersécurité' },
    { name: 'Le Monde Informatique', url: 'https://www.lemondeinformatique.fr/securite/', description: 'Actualités sur la sécurité informatique' },
    { name: '01net', url: 'https://www.01net.com/actualites/securite/', description: 'Actualités sur la sécurité numérique' }
];

export default {
    data: new SlashCommandBuilder()
        .setName('veille')
        .setDescription('Fournit une liste de sources fiables pour la veille en cybersécurité et en informatique.')
        .addIntegerOption(option => 
            option.setName('nombre')
                .setDescription('Nombre de sources à afficher (max 10)')
                .setRequired(false)),
    async execute(interaction) {
        const numberOfSources = interaction.options.getInteger('nombre') || 5;
        const limitedNumber = Math.min(Math.max(numberOfSources, 1), 10);

        const shuffledSources = sources.sort(() => 0.5 - Math.random());
        const selectedSources = shuffledSources.slice(0, limitedNumber);

        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Sources fiables pour la veille technologique')
            .setDescription(`Voici ${limitedNumber} source(s) aléatoire(s) recommandée(s) pour rester informé sur la cybersécurité et l'informatique :`)
            .addFields(
                selectedSources.map(source => ({
                    name: source.name,
                    value: `[${source.description}](${source.url})`,
                    inline: false
                }))
            )
            .setFooter({ text: 'Utilisez /veille <nombre> pour obtenir un nombre spécifique de sources (max 10)' });

        await interaction.reply({ embeds: [embed] });
    },
};
