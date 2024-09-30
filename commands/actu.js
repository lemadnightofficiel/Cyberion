import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import Parser from 'rss-parser';
import axios from 'axios';

const parser = new Parser();

const CYBERSECURITY_RSS_FEED = 'https://feeds.feedburner.com/TheHackersNews';
const DEV_RSS_FEED = 'https://www.infoq.com/feed/';
const FRENCH_TECH_RSS_FEED = 'https://www.lemondeinformatique.fr/flux-rss/thematique/toutes-les-actualites/rss.xml';
const EU_TECH_RSS_FEED = 'https://www.euractiv.com/feed/?post_type=news&sections=digital';

export default {
    data: new SlashCommandBuilder()
        .setName('actu')
        .setDescription('Obtenir un article récent sur l\'actualité en informatique.')
        .addStringOption(option =>
            option.setName('domaine')
                .setDescription('Le domaine de l\'informatique')
                .setRequired(true)
                .addChoices(
                    { name: 'Cybersécurité', value: 'cybersécurité' },
                    { name: 'Développement', value: 'développement' },
                    { name: 'Techno FR', value: 'techno_fr' },
                    { name: 'Techno EU', value: 'techno_eu' }
                )),
    async execute(interaction) {
        const domain = interaction.options.getString('domaine');

        await interaction.deferReply();

        try {
            let article;
            let feedUrl;
            switch(domain) {
                case 'cybersécurité':
                    feedUrl = CYBERSECURITY_RSS_FEED;
                    break;
                case 'développement':
                    feedUrl = DEV_RSS_FEED;
                    break;
                case 'techno_fr':
                    feedUrl = FRENCH_TECH_RSS_FEED;
                    break;
                case 'techno_eu':
                    feedUrl = EU_TECH_RSS_FEED;
                    break;
                default:
                    return interaction.editReply("Domaine non pris en charge pour le moment.");
            }

            article = await getRandomArticle(feedUrl);

            if (article) {
                const embed = new EmbedBuilder()
                    .setColor('#001F93')
                    .setTitle(article.title)
                    .setURL(article.link)
                    .setTimestamp();
                const description = article.contentSnippet || article.description || '';
                const truncatedDescription = description.length > 4000 
                    ? description.substring(0, 4000) + '...' 
                    : description;
                embed.setDescription(truncatedDescription);
                if (article.pubDate) {
                    embed.setFooter({ text: `Publié le ${new Date(article.pubDate).toLocaleDateString()}` });
                }
                if (article.enclosure && article.enclosure.url) {
                    embed.setImage(article.enclosure.url);
                } else if (article['media:content'] && article['media:content']['$'] && article['media:content']['$'].url) {
                    embed.setImage(article['media:content']['$'].url);
                }

                await interaction.editReply({
                    content: `Voici un article récent sur ${getDomainName(domain)} :`,
                    embeds: [embed]
                });
            } else {
                await interaction.editReply("Désolé, je n'ai pas pu trouver d'article récent.");
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'article :', error);
            await interaction.editReply("Une erreur s'est produite lors de la récupération de l'article.");
        }
    },
};

async function getRandomArticle(feedUrl) {
    try {
        const feed = await parser.parseURL(feedUrl);
        const articles = feed.items.slice(0, 10);
        return articles[Math.floor(Math.random() * articles.length)];
    } catch (error) {
        console.error(`Erreur lors de la récupération du flux RSS ${feedUrl}:`, error);
        const response = await axios.get(feedUrl, {
            headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'},
        });
        const feed = await parser.parseString(response.data);
        const articles = feed.items.slice(0, 10);
        return articles[Math.floor(Math.random() * articles.length)];
    }
}

function getDomainName(domain) {
    switch(domain) {
        case 'cybersécurité': return 'la cybersécurité';
        case 'développement': return 'le développement';
        case 'techno_fr': return 'la tech française';
        case 'techno_eu': return 'la tech européenne';
        default: return domain;
    }
}
