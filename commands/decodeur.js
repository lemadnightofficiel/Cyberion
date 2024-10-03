import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import crypto from 'crypto';

const challenges = [
    {
        type: 'binary',
        answer: 'LE',
        hint: 'Utilisez la table ASCII pour convertir chaque octet en caractère.'
    },
    {
        type: 'caesar',
        answer: 'CODE',
        hint: "Déplacez chaque lettre de 3 positions en arrière dans l'alphabet."
    },
    {
        type: 'base64',
        answer: 'SECRET',
        hint: 'Utilisez un décodeur Base64 standard.'
    },
    {
        type: 'morse',
        answer: 'EST',
        hint: "Utilisez l'alphabet morse international."
    },
    {
        type: 'atbash',
        answer: 'CACHE',
        hint: "Remplacez chaque lettre par son opposé dans l'alphabet (A devient Z, B devient Y, etc.)."
    },
    {
        type: 'hex',
        answer: 'DANS',
        hint: 'Convertissez chaque paire de caractères hexadécimaux en caractère ASCII.'
    },
    {
        type: 'md5',
        answer: 'MA',
        hint: 'C\'est un mot de 2 lettres.'
    },
    {
        type: 'sha256',
        answer: 'DIGNITE',
        hint: 'C\'est un mot de 7 lettres souvent utilisé dans le contexte de la dignité.'
    }
];

function encryptChallenge(challenge) {
    switch (challenge.type) {
        case 'binary':
            challenge.question = challenge.answer.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
            break;
        case 'caesar':
            challenge.question = challenge.answer.split('').map(char => 
                String.fromCharCode((char.charCodeAt(0) - 65 + 3) % 26 + 65)
            ).join('');
            break;
        case 'base64':
            challenge.question = Buffer.from(challenge.answer).toString('base64');
            break;
        case 'md5':
            challenge.question = crypto.createHash('md5').update(challenge.answer).digest('hex');
            break;
        case 'morse':
            const morseAlphabet = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'S': '...', 'T': '-'
            };
            challenge.question = challenge.answer.split('').map(char => morseAlphabet[char]).join(' ');
            break;
        case 'atbash':
            challenge.question = challenge.answer.split('').map(char => 
                String.fromCharCode(90 - (char.charCodeAt(0) - 65))
            ).join('');
            break;
        case 'hex':
            challenge.question = Buffer.from(challenge.answer).toString('hex');
            break;
        case 'sha256':
            challenge.question = crypto.createHash('sha256').update(challenge.answer).digest('hex');
            break;
    }
    return challenge;
}

export default {
    data: new SlashCommandBuilder()
        .setName('decodeur')
        .setDescription('Décodez le message secret en résolvant des énigmes cryptographiques !'),
    async execute(interaction) {
        await interaction.deferReply();

        let score = 0;
        let finalMessage = '';

        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Le Décodeur Binaire Crypté')
            .setDescription('Résolvez les énigmes pour découvrir le message secret. Vous avez 50 secondes par défi !');

        await interaction.editReply({ embeds: [embed] });

        for (const challenge of challenges) {
            const encryptedChallenge = encryptChallenge(challenge);
            const challengeEmbed = new EmbedBuilder()
                .setColor('#001F93')
                .setTitle(`Défi ${encryptedChallenge.type}`)
                .setDescription(encryptedChallenge.question);

            await interaction.followUp({ embeds: [challengeEmbed] });

            try {
                const filter = m => m.author.id === interaction.user.id;
                const collected = await interaction.channel.awaitMessages({ filter, max: 1, time: 50000, errors: ['time'] });
                const response = collected.first().content.toUpperCase();

                if (response === encryptedChallenge.answer) {
                    score++;
                    finalMessage += encryptedChallenge.answer + ' ';
                    await interaction.followUp('Correct ! Passons au défi suivant.');
                } else {
                    await interaction.followUp(`Incorrect. La bonne réponse était : ${encryptedChallenge.answer}`);
                }
            } catch (error) {
                await interaction.followUp(`Temps écoulé ! La bonne réponse était : ${encryptedChallenge.answer}`);
            }

            await interaction.followUp(`Indice pour le prochain défi : ${encryptedChallenge.hint}`);
        }

        const finalEmbed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Décodeur Binaire Crypté - Résultats')
            .setDescription(`Vous avez résolu ${score}/${challenges.length} défis.`)
            .addFields(
                { name: 'Message final', value: finalMessage.trim() || 'Vous n\'avez pas réussi à décoder le message complet.' }
            );

        await interaction.followUp({ embeds: [finalEmbed] });
    },
};
