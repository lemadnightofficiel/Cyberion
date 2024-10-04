import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

const challenges = [
    {
        type: 'binary',
        answer: 'CYBER',
        hint: 'Convertissez le binaire en texte ASCII.'
    },
    {
        type: 'caesar',
        answer: 'SECURITE',
        hint: "Déplacez chaque lettre de 3 positions en arrière dans l'alphabet."
    },
    {
        type: 'base64',
        answer: 'RESEAU',
        hint: 'Décodez le message Base64.'
    },
    {
        type: 'morse',
        answer: 'CRYPTE',
        hint: "Utilisez l'alphabet morse international."
    },
    {
        type: 'atbash',
        answer: 'HACKER',
        hint: "Remplacez chaque lettre par son opposé dans l'alphabet (A devient Z, B devient Y, etc.)."
    },
    {
        type: 'hex',
        answer: 'DECODE',
        hint: 'Convertissez chaque paire de caractères hexadécimaux en caractère ASCII.'
    },
    {
        type: 'vigenere',
        answer: 'ENIGME',
        hint: 'Utilisez la clé "CLE" pour décoder le message.'
    },
    {
        type: 'rot13',
        answer: 'CHALLENGE',
        hint: 'Déplacez chaque lettre de 13 positions dans l\'alphabet.'
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
        case 'morse':
            const morseAlphabet = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'R': '.-.', 'P': '.--.', 'T': '-', 'Y': '-.--'
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
        case 'vigenere':
            const key = 'CLE';
            challenge.question = challenge.answer.split('').map((char, i) => {
                const shift = key[i % key.length].charCodeAt(0) - 65;
                return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
            }).join('');
            break;
        case 'rot13':
            challenge.question = challenge.answer.split('').map(char => 
                String.fromCharCode((char.charCodeAt(0) - 65 + 13) % 26 + 65)
            ).join('');
            break;
    }
    return challenge;
}

export default {
    data: new SlashCommandBuilder()
        .setName('decodeur')
        .setDescription('Décodez les messages secrets en résolvant des énigmes cryptographiques.'),
    async execute(interaction) {
        await interaction.deferReply();

        let score = 0;
        let finalMessage = '';

        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle('Le Décodeur Cryptographique')
            .setDescription('Résolvez les énigmes pour découvrir le message secret. Vous avez 1m30 par défi !');

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
                const collected = await interaction.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] });
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
            .setTitle('Décodeur Cryptographique - Résultats')
            .setDescription(`Vous avez résolu ${score}/${challenges.length} défis.`)
            .addFields(
                { name: 'Message final', value: finalMessage.trim() || 'Vous n\'avez pas réussi à décoder le message complet.' }
            );

        await interaction.followUp({ embeds: [finalEmbed] });
    },
};
