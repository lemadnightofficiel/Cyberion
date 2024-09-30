import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

const quizzes = {
    algorithmie: [
        // 5 questions débutantes
        {
            question: "Qu'est-ce qu'un algorithme ?",
            options: ["Un langage de programmation", "Une suite d'instructions pour résoudre un problème", "Un type de données", "Un composant matériel"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Quelle est la complexité temporelle de la recherche linéaire ?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correct: 2,
            level: "Débutant"
        },
        {
            question: "Quel est le but principal d'un algorithme de tri ?",
            options: ["Supprimer des éléments", "Organiser des éléments dans un ordre spécifique", "Ajouter de nouveaux éléments", "Compresser des données"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Qu'est-ce qu'une boucle en programmation ?",
            options: ["Une erreur de code", "Une structure qui répète des instructions", "Un type de variable", "Une fonction mathématique"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Que signifie l'acronyme 'IDE' en programmation ?",
            options: ["Internet Development Environment", "Integrated Development Environment", "Internal Data Exchange", "Interactive Design Elements"],
            correct: 1,
            level: "Débutant"
        },
        // 10 questions intermédiaires
        {
            question: "Quelle est la complexité temporelle moyenne du tri rapide (Quicksort) ?",
            options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'une structure de données de type 'pile' (stack) ?",
            options: ["FIFO", "LIFO", "Arbre binaire", "Graphe"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel algorithme est utilisé pour trouver le plus court chemin dans un graphe pondéré ?",
            options: ["Tri à bulles", "Recherche binaire", "Algorithme de Dijkstra", "Tri fusion"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que la récursivité en programmation ?",
            options: ["Une boucle infinie", "Une fonction qui s'appelle elle-même", "Un type de variable", "Une méthode de débogage"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le principe de l'algorithme de recherche binaire ?",
            options: ["Parcourir séquentiellement tous les éléments", "Diviser répétitivement l'espace de recherche en deux", "Utiliser un générateur de nombres aléatoires", "Trier d'abord la liste puis chercher"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un algorithme glouton (greedy algorithm) ?",
            options: ["Un algorithme qui consomme beaucoup de mémoire", "Un algorithme qui fait le meilleur choix à chaque étape", "Un algorithme qui ne termine jamais", "Un algorithme qui trie les données"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quelle est la différence principale entre un algorithme de tri stable et instable ?",
            options: ["La vitesse d'exécution", "La préservation de l'ordre relatif des éléments égaux", "L'utilisation de la mémoire", "La complexité algorithmique"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que la programmation dynamique ?",
            options: ["Écrire du code qui change pendant l'exécution", "Une technique pour résoudre des problèmes en les décomposant en sous-problèmes", "Utiliser exclusivement des langages de programmation modernes", "Créer des interfaces utilisateur réactives"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le principe de l'algorithme de hachage ?",
            options: ["Trier des données", "Compresser des fichiers", "Mapper des données de taille variable à des données de taille fixe", "Crypter des messages"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un algorithme in-place ?",
            options: ["Un algorithme qui s'exécute sur place, sans bouger", "Un algorithme qui modifie les données d'entrée sans utiliser de mémoire supplémentaire significative", "Un algorithme qui fonctionne uniquement sur des appareils mobiles", "Un algorithme qui ne change jamais les données d'entrée"],
            correct: 1,
            level: "Intermédiaire"
        },
        // 5 questions avancées
        {
            question: "Quelle est la complexité temporelle de l'algorithme de Strassen pour la multiplication de matrices ?",
            options: ["O(n^2)", "O(n^2.8)", "O(n^3)", "O(n log n)"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que le problème du sac à dos (Knapsack problem) ?",
            options: ["Un problème de logistique", "Un problème d'optimisation combinatoire", "Un algorithme de compression", "Un protocole de sécurité"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Quel est le principe de l'algorithme de Bloom pour le filtrage ?",
            options: ["Trier rapidement de grandes quantités de données", "Vérifier si un élément est membre d'un ensemble avec une certaine probabilité d'erreur", "Compresser des données sans perte", "Générer des nombres premiers"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que la complexité amortie d'un algorithme ?",
            options: ["Le coût moyen d'une opération sur une longue séquence d'opérations", "Le pire cas de complexité", "Le meilleur cas de complexité", "La complexité spatiale de l'algorithme"],
            correct: 0,
            level: "Avancé"
        },
        {
            question: "Quel est le principe de l'algorithme de Fisher-Yates pour le mélange ?",
            options: ["Trier une liste de manière aléatoire", "Mélanger une liste de manière uniforme et non biaisée", "Trouver le plus court chemin dans un graphe", "Compresser des données"],
            correct: 1,
            level: "Avancé"
        }
    ],
    linux: [
        // 5 questions débutantes
        {
            question: "Quelle commande est utilisée pour lister les fichiers dans un répertoire sous Linux ?",
            options: ["dir", "ls", "list", "show"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Quel est le symbole pour le répertoire racine dans Linux ?",
            options: ["/", "\\", "~", "$"],
            correct: 0,
            level: "Débutant"
        },
        {
            question: "Quelle commande permet de créer un nouveau répertoire ?",
            options: ["md", "create", "mkdir", "newdir"],
            correct: 2,
            level: "Débutant"
        },
        {
            question: "Comment afficher le contenu d'un fichier texte dans le terminal ?",
            options: ["read", "cat", "show", "display"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Quelle commande permet de copier un fichier ?",
            options: ["copy", "cp", "mv", "duplicate"],
            correct: 1,
            level: "Débutant"
        },
        // 10 questions intermédiaires
        {
            question: "Quelle commande permet de modifier les permissions d'un fichier ?",
            options: ["chown", "chmod", "chgrp", "chperm"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le gestionnaire de paquets par défaut sur Ubuntu ?",
            options: ["yum", "pacman", "apt", "rpm"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Quelle commande est utilisée pour afficher les processus en cours d'exécution ?",
            options: ["ps", "top", "proc", "run"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Comment rediriger la sortie d'une commande vers un fichier en écrasant son contenu ?",
            options: [">", ">>", "|", "<"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Quelle commande permet de rechercher un fichier dans le système de fichiers ?",
            options: ["search", "locate", "find", "lookup"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Comment afficher les 10 dernières lignes d'un fichier ?",
            options: ["tail -n 10", "head -n 10", "last -n 10", "end -n 10"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Quelle commande permet de compresser un fichier en format .gz ?",
            options: ["zip", "compress", "gzip", "tar"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Comment afficher l'espace disque utilisé par un répertoire ?",
            options: ["df", "du", "disk", "space"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quelle commande permet de tuer un processus ?",
            options: ["end", "kill", "stop", "terminate"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Comment afficher les variables d'environnement ?",
            options: ["env", "printenv", "echo $ENV", "variables"],
            correct: 0,
            level: "Intermédiaire"
        },
        // 5 questions avancées
        {
            question: "Quelle commande permet de configurer les tables de routage IP ?",
            options: ["route", "ip route", "netstat", "ifconfig"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Comment créer un lien symbolique nommé 'lien' vers le fichier 'cible' ?",
            options: ["ln cible lien", "ln -s cible lien", "link cible lien", "symlink cible lien"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Quelle commande permet de surveiller en temps réel les changements dans un fichier ?",
            options: ["watch", "monitor", "tail -f", "follow"],
            correct: 2,
            level: "Avancé"
        },
        {
            question: "Comment changer le propriétaire et le groupe d'un fichier en une seule commande ?",
            options: ["chown user:group file", "chgrp user:group file", "chmod user:group file", "usermod file user:group"],
            correct: 0,
            level: "Avancé"
        },
        {
            question: "Quelle commande permet de créer une archive tar compressée en gzip ?",
            options: ["tar -cvf", "tar -xvf", "tar -czvf", "tar -xzvf"],
            correct: 2,
            level: "Avancé"
        }
    ],
    cybersecurite: [
        // 5 questions débutantes
        {
            question: "Qu'est-ce qu'un pare-feu (firewall) ?",
            options: ["Un antivirus", "Un système de filtrage du trafic réseau", "Un type de malware", "Un protocole de chiffrement"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Que signifie 'HTTPS' ?",
            options: ["Hyper Text Transfer Protocol Secure", "High Tech Transfer Protocol System", "Hyper Text Transmission Protocol Service", "Home Tool Transfer Protocol Secure"],
            correct: 0,
            level: "Débutant"
        },
        {
            question: "Qu'est-ce qu'un mot de passe fort ?",
            options: ["Un mot du dictionnaire", "Une combinaison de lettres, chiffres et symboles", "Le nom de votre animal de compagnie", "Votre date de naissance"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Qu'est-ce que le phishing ?",
            options: ["Une technique de pêche", "Une attaque visant à voler des informations personnelles", "Un type de virus informatique", "Une méthode de cryptage"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Que signifie VPN ?",
            options: ["Very Private Network", "Virtual Personal Network", "Virtual Private Network", "Verified Public Network"],
            correct: 2,
            level: "Débutant"
        },
        // 10 questions intermédiaires
        {
            question: "Quel type d'attaque vise à surcharger un système avec un grand nombre de requêtes ?",
            options: ["Phishing", "DDoS", "Man-in-the-middle", "SQL Injection"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que le 'hachage' en cryptographie ?",
            options: ["Un type de chiffrement", "Une fonction à sens unique", "Un protocole de communication", "Une méthode d'authentification"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'une attaque par force brute ?",
            options: ["Une attaque physique sur un serveur", "Une tentative d'accès en essayant toutes les combinaisons possibles", "Un type de virus informatique", "Une faille dans un pare-feu"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Que signifie 'XSS' dans le contexte de la sécurité web ?",
            options: ["Cross-Site Scripting", "Extended Security System", "X-ray Security Scan", "Xtra Safe Surfing"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un 'honeypot' en cybersécurité ?",
            options: ["Un type de malware", "Un système conçu pour attirer les attaquants", "Un outil de cryptage", "Un protocole de sécurité"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Que signifie 'MITM' dans le contexte des attaques réseau ?",
            options: ["Man In The Middle", "Multiple Internet Threat Monitor", "Malware Injection Through Modem", "Managed Information Technology Method"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
            options: ["Un double mot de passe", "Une méthode utilisant deux éléments distincts pour vérifier l'identité", "Un système de cryptage à double clé", "Une technique de phishing avancée"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le but principal d'un IDS (Intrusion Detection System) ?",
            options: ["Bloquer les attaques", "Détecter les activités suspectes", "Crypter les données", "Gérer les mots de passe"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que le principe du 'moindre privilège' en sécurité informatique ?",
            options: ["Donner le minimum d'accès nécessaire aux utilisateurs", "Utiliser des mots de passe simples", "Désactiver tous les pare-feu", "Partager tous les accès entre utilisateurs"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'une politique de sécurité ?",
            options: ["Un logiciel antivirus", "Un ensemble de règles pour protéger les systèmes et les données", "Un type de firewall", "Un protocole de chiffrement"],
            correct: 1,
            level: "Intermédiaire"
        },
        // 5 questions avancées
        {
            question: "Qu'est-ce que l'exploitation 'zero-day' ?",
            options: ["Une attaque utilisant une vulnérabilité inconnue", "Un virus qui s'active après un certain temps", "Une technique de cryptage", "Un type de pare-feu"],
            correct: 0,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que le 'pentesting' ?",
            options: ["Un type de cryptage", "Un test de pénétration pour évaluer la sécurité", "Une méthode de programmation sécurisée", "Un outil de surveillance réseau"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Que signifie 'CSRF' dans la sécurité web ?",
            options: ["Cross-Site Request Forgery", "Client-Side Resource Failure", "Cryptographic Secure Random Function", "Centralized Security Response Framework"],
            correct: 0,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que le 'sandboxing' en sécurité informatique ?",
            options: ["Une technique de nettoyage de code", "Un environnement isolé pour tester des programmes potentiellement dangereux", "Un type de chiffrement", "Une méthode de sauvegarde de données"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que l'attaque 'Heartbleed' ?",
            options: ["Un type de malware", "Une faille dans le protocole SSL/TLS", "Une attaque sur les systèmes de paiement", "Un virus ciblant les appareils IoT"],
            correct: 1,
            level: "Avancé"
        }
    ],
    reseau: [
        // 5 questions débutantes
        {
            question: "Que signifie 'IP' dans 'adresse IP' ?",
            options: ["Internet Protocol", "Internal Port", "Information Processor", "Identity Provider"],
            correct: 0,
            level: "Débutant"
        },
        {
            question: "Quel protocole est utilisé pour envoyer des e-mails ?",
            options: ["HTTP", "FTP", "SMTP", "TCP"],
            correct: 2,
            level: "Débutant"
        },
        {
            question: "Qu'est-ce qu'un routeur ?",
            options: ["Un appareil qui connecte des réseaux", "Un type de câble réseau", "Un logiciel antivirus", "Un serveur web"],
            correct: 0,
            level: "Débutant"
        },
        {
            question: "Que signifie 'LAN' ?",
            options: ["Large Area Network", "Local Area Network", "Long Access Node", "Linked Application Network"],
            correct: 1,
            level: "Débutant"
        },
        {
            question: "Quel est le rôle principal d'un switch réseau ?",
            options: ["Filtrer le trafic", "Connecter des appareils dans un réseau local", "Fournir un accès Internet", "Stocker des données"],
            correct: 1,
            level: "Débutant"
        },
        // 10 questions intermédiaires
        {
            question: "Quel protocole est utilisé pour la résolution des noms de domaine en adresses IP ?",
            options: ["HTTP", "FTP", "DNS", "DHCP"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'un 'switch' dans un réseau ?",
            options: ["Un routeur", "Un appareil qui relie des segments de réseau", "Un serveur", "Un type de câble"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Que signifie 'VLAN' ?",
            options: ["Very Large Area Network", "Virtual Local Area Network", "Variable Length Address Node", "Verified Link Access Network"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel protocole est utilisé pour le transfert sécurisé de fichiers ?",
            options: ["HTTP", "FTP", "SFTP", "SMTP"],
            correct: 2,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que le 'NAT' en réseautique ?",
            options: ["Network Address Translation", "Node Attribution Table", "Network Access Terminal", "New Age Technology"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le rôle d'un pare-feu (firewall) dans un réseau ?",
            options: ["Accélérer le trafic réseau", "Filtrer le trafic entrant et sortant", "Stocker des données", "Gérer les adresses IP"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce que le 'subnetting' ?",
            options: ["Une technique de cryptage", "La division d'un réseau en sous-réseaux", "Un type de câble réseau", "Un protocole de routage"],
            correct: 1,
            level: "Intermédiaire"
        },
        {
            question: "Quel protocole est utilisé pour la configuration automatique des adresses IP ?",
            options: ["DHCP", "DNS", "HTTP", "FTP"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Qu'est-ce qu'une adresse MAC ?",
            options: ["Une adresse physique unique d'un appareil réseau", "Un type de virus", "Une adresse IP dynamique", "Un protocole de sécurité"],
            correct: 0,
            level: "Intermédiaire"
        },
        {
            question: "Quel est le rôle du protocole ARP dans un réseau ?",
            options: ["Gérer les adresses e-mail", "Traduire les adresses IP en adresses MAC", "Crypter les données", "Configurer les routeurs"],
            correct: 1,
            level: "Intermédiaire"
        },
        // 5 questions avancées
        {
            question: "Quel est le rôle du protocole BGP dans le routage Internet ?",
            options: ["Gérer les adresses IP", "Échanger des informations de routage entre systèmes autonomes", "Sécuriser les connexions", "Gérer les noms de domaine"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que le 'SDN' en réseautique ?",
            options: ["Secure Digital Network", "Software-Defined Networking", "Synchronized Data Node", "System Distribution Network"],
            correct: 1,
            level: "Avancé"
        },
        {
            question: "Quel protocole est utilisé pour la gestion à distance des équipements réseau ?",
            options: ["HTTP", "FTP", "SNMP", "SMTP"],
            correct: 2,
            level: "Avancé"
        },
        {
            question: "Qu'est-ce que le 'MPLS' en réseautique ?",
            options: ["Multi-Protocol Label Switching", "Maximum Packet Length Service", "Managed Private Line Service", "Multiple Path Linking System"],
            correct: 0,
            level: "Avancé"
        },
        {
            question: "Quel est le principe de fonctionnement du protocole OSPF ?",
            options: ["Routage par vecteur de distance", "Routage par état de lien", "Traduction d'adresses", "Filtrage de paquets"],
            correct: 1,
            level: "Avancé"
        }
    ]
};

export default {
    data: new SlashCommandBuilder()
        .setName('quizz')
        .setDescription('Répondez à un quizz sur un domaine spécifique. Attention, le temps est limité !')
        .addStringOption(option =>
            option.setName('domaine')
                .setDescription('Choisissez le domaine du quizz')
                .setRequired(true)
                .addChoices(
                    { name: 'Algorithmie', value: 'algorithmie' },
                    { name: 'Linux', value: 'linux' },
                    { name: 'Cybersécurité', value: 'cybersecurite' },
                    { name: 'Réseau', value: 'reseau' }
                ))
        .addStringOption(option =>
            option.setName('difficulte')
                .setDescription('Choisissez la difficulté du quizz')
                .setRequired(true)
                .addChoices(
                    { name: 'Débutant', value: 'Débutant' },
                    { name: 'Intermédiaire', value: 'Intermédiaire' },
                    { name: 'Avancé', value: 'Avancé' }
                )),
    async execute(interaction) {
        const domain = interaction.options.getString('domaine');
        const difficulty = interaction.options.getString('difficulte');
        
        await interaction.deferReply();
        await handleQuizSession(interaction, domain, difficulty);
    },
};

async function handleQuizSession(interaction, domain, difficulty) {
    const questions = quizzes[domain].filter(q => q.level === difficulty);
    if (questions.length === 0) {
        return interaction.editReply('Aucune question disponible pour ce domaine et cette difficulté.');
    }

    let currentQuestionIndex = 0;
    let score = 0;

    while (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const embed = new EmbedBuilder()
            .setColor('#001F93')
            .setTitle(`Quizz ${domain.charAt(0).toUpperCase() + domain.slice(1)} - ${difficulty}`)
            .setDescription(`Question ${currentQuestionIndex + 1}/${questions.length}: ${question.question}`);

        const row = new ActionRowBuilder()
            .addComponents(
                question.options.map((option, index) => 
                    new ButtonBuilder()
                        .setCustomId(`answer_${index}`)
                        .setLabel(option)
                        .setStyle(ButtonStyle.Primary)
                )
            );
        row.addComponents(
            new ButtonBuilder()
                .setCustomId('stop')
                .setLabel('Arrêter')
                .setStyle(ButtonStyle.Danger)
        );

        const response = await interaction.editReply({ embeds: [embed], components: [row] });

        try {
            const confirmation = await response.awaitMessageComponent({ time: 30000 });

            if (confirmation.customId === 'stop') {
                await interaction.editReply({ content: `Quiz arrêté. Votre score final est ${score}/${currentQuestionIndex}`, components: [] });
                return;
            }

            if (confirmation.customId === `answer_${question.correct}`) {
                score++;
                await confirmation.update({ content: 'Bonne réponse !', components: [] });
            } else {
                await confirmation.update({ content: `Mauvaise réponse. La bonne réponse était : ${question.options[question.correct]}`, components: [] });
            }

            currentQuestionIndex++;
            
            await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (e) {
            await interaction.editReply({ content: 'Pas de réponse après 30 secondes, quiz terminé.', components: [] });
            return;
        }
    }

    await interaction.editReply({ content: `Quiz terminé ! Votre score final est ${score}/${questions.length}`, components: [] });
}