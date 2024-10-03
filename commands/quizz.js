import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

function generateAlgorithmieQuestion(difficulty) {
  const questions = {
    Débutant: [
      {
        question: "En Python, comment déclare-t-on une liste vide ?",
        options: ["list()", "[]", "new List()", "array()"],
        correct: 1
      },
      {
        question: "Quelle boucle en JavaScript permet de parcourir un tableau ?",
        options: ["for...in", "while", "for...of", "do...while"],
        correct: 2
      },
      {
        question: "En HTML, quelle balise est utilisée pour créer un lien hypertexte ?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0
      },
      {
        question: "Comment sélectionne-t-on tous les éléments de classe 'btn' en CSS ?",
        options: [".btn", "#btn", "btn", "*btn"],
        correct: 0
      },
      {
        question: "Quelle fonction Python permet d'afficher du texte à l'écran ?",
        options: ["print()", "console.log()", "echo()", "display()"],
        correct: 0
      },
      {
        question: "Comment déclare-t-on une variable en JavaScript ?",
        options: ["var", "let", "const", "Toutes ces réponses"],
        correct: 3
      },
      {
        question: "Quelle balise HTML est utilisée pour créer un paragraphe ?",
        options: ["<p>", "<paragraph>", "<text>", "<content>"],
        correct: 0
      },
      {
        question: "En CSS, comment centre-t-on horizontalement un élément bloc ?",
        options: ["text-align: center;", "align: center;", "margin: auto;", "center: true;"],
        correct: 2
      },
      {
        question: "Quelle méthode Python permet d'ajouter un élément à la fin d'une liste ?",
        options: ["list.add()", "list.append()", "list.insert()", "list.push()"],
        correct: 1
      },
      {
        question: "Comment commente-t-on une ligne en JavaScript ?",
        options: ["// Commentaire", "# Commentaire", "/* Commentaire */", "-- Commentaire"],
        correct: 0
      }
    ],
    Intermédiaire: [
      {
        question: "Qu'est-ce qu'un décorateur en Python?",
        options: ["Une fonction qui modifie une autre fonction", "Un type de boucle", "Une méthode de classe", "Un opérateur mathématique"],
        correct: 0
      },
      {
        question: "En JavaScript, que fait la méthode Array.prototype.reduce()?",
        options: ["Filtre un tableau", "Réduit un tableau à une seule valeur", "Trie un tableau", "Inverse l'ordre d'un tableau"],
        correct: 1
      },
      {
        question: "Quel est l'avantage principal de TypeScript par rapport à JavaScript ?",
        options: ["Il est plus rapide", "Il offre un typage statique", "Il a une meilleure compatibilité navigateur", "Il utilise moins de mémoire"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'un générateur en Python ?",
        options: ["Une fonction qui génère des nombres aléatoires", "Une fonction qui peut être pausée et reprise", "Un type de boucle", "Une classe abstraite"],
        correct: 1
      },
      {
        question: "Que signifie le terme 'hoisting' en JavaScript ?",
        options: ["Élever une exception", "Déplacer les déclarations en haut de leur portée", "Optimiser le code", "Créer une closure"],
        correct: 1
      },
      {
        question: "En TypeScript, qu'est-ce qu'une interface ?",
        options: ["Un type de classe", "Une structure de données", "Un contrat pour la structure d'un objet", "Un module"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'duck typing' en Python ?",
        options: ["Un style de nommage de variables", "Un type de boucle", "Une méthode de typage dynamique", "Un design pattern"],
        correct: 2
      },
      {
        question: "Que fait l'opérateur '===' en JavaScript ?",
        options: ["Compare les valeurs", "Compare les valeurs et les types", "Assigne une valeur", "Vérifie si une variable est définie"],
        correct: 1
      },
      {
        question: "En TypeScript, que signifie le mot-clé 'readonly' ?",
        options: ["La propriété ne peut être lue qu'une fois", "La propriété ne peut pas être modifiée après initialisation", "La propriété est privée", "La propriété est statique"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une compréhension de liste en Python ?",
        options: ["Une méthode pour trier une liste", "Une façon concise de créer des listes", "Un type de boucle", "Une fonction de haut niveau"],
        correct: 1
      }
    ],
    Avancé: [
      {
        question: "En C, quelle est la différence entre malloc() et calloc()?",
        options: ["malloc() alloue de la mémoire, calloc() la libère", "malloc() alloue de la mémoire non initialisée, calloc() initialise la mémoire à zéro", "malloc() est plus rapide, calloc() est plus sûr", "Il n'y a pas de différence"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le garbage collector en C# et Java?",
        options: ["Un outil pour nettoyer le code", "Un mécanisme de gestion automatique de la mémoire", "Un algorithme de tri", "Un type de boucle"],
        correct: 1
      },
      {
        question: "En C, quelle est la différence entre malloc() et calloc() ?",
        options: ["malloc() alloue de la mémoire, calloc() la libère", "malloc() alloue de la mémoire non initialisée, calloc() initialise la mémoire à zéro", "malloc() est plus rapide, calloc() est plus sûr", "Il n'y a pas de différence"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le garbage collector en C# et Java ?",
        options: ["Un outil pour nettoyer le code", "Un mécanisme de gestion automatique de la mémoire", "Un algorithme de tri", "Un type de boucle"],
        correct: 1
      },
      {
        question: "En C, que fait l'opérateur sizeof ?",
        options: ["Calcule la taille d'un fichier", "Retourne la taille en octets d'un type de données ou d'une variable", "Définit la taille d'un tableau", "Calcule la complexité d'un algorithme"],
        correct: 1
      },
      {
        question: "Quelle est la différence entre une classe abstraite et une interface en Java ?",
        options: ["Il n'y a pas de différence", "Une classe abstraite peut avoir des méthodes implémentées, une interface ne le peut pas", "Une interface peut être instanciée, une classe abstraite ne le peut pas", "Une classe abstraite peut avoir plusieurs héritages, une interface non"],
        correct: 1
      },
      {
        question: "En C#, que permet le mot-clé 'unsafe' ?",
        options: ["D'utiliser du code non sécurisé et des pointeurs", "De désactiver le garbage collector", "D'ignorer les exceptions", "De créer des threads non sécurisés"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'move constructor' en C++ ?",
        options: ["Un constructeur qui déplace les ressources d'un objet à un autre", "Un constructeur qui copie les ressources", "Un constructeur par défaut", "Un constructeur qui initialise les membres statiques"],
        correct: 0
      },
      {
        question: "En Java, que signifie le mot-clé 'volatile' ?",
        options: ["La variable peut être modifiée par plusieurs threads", "La variable est constante", "La variable est privée", "La variable est statique"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'stack unwinding' en C++ ?",
        options: ["Un processus de libération de mémoire", "Le processus de destruction des objets locaux lors d'une exception", "Une technique d'optimisation", "Un type de boucle"],
        correct: 1
      }
    ]
  };
  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
}

function generateLinuxQuestion(difficulty) {
  const questions = {
    Débutant: [
      {
        question: "Quelle commande est utilisée pour lister les fichiers dans un répertoire sous Linux?",
        options: ["dir", "ls", "list", "show"],
        correct: 1
      },
      {
        question: "Quel est le symbole pour le répertoire racine dans Linux?",
        options: ["/", "\\", "~", "$"],
        correct: 0
      },
      {
        question: "Quelle commande permet de créer un nouveau répertoire?",
        options: ["md", "create", "mkdir", "newdir"],
        correct: 2
      },
      {
        question: "Comment afficher le contenu d'un fichier texte dans le terminal?",
        options: ["read", "cat", "show", "display"],
        correct: 1
      },
      {
        question: "Quelle commande permet de copier un fichier?",
        options: ["copy", "cp", "mv", "duplicate"],
        correct: 1
      },
      {
        question: "Comment changer de répertoire dans le terminal?",
        options: ["change", "cd", "switch", "move"],
        correct: 1
      },
      {
        question: "Quelle commande affiche le répertoire de travail actuel?",
        options: ["pwd", "cwd", "dir", "present"],
        correct: 0
      },
      {
        question: "Comment supprimer un fichier en ligne de commande?",
        options: ["delete", "remove", "rm", "erase"],
        correct: 2
      },
      {
        question: "Quelle commande permet de renommer un fichier?",
        options: ["rename", "mv", "change", "rn"],
        correct: 1
      },
      {
        question: "Comment afficher le manuel d'une commande?",
        options: ["help", "manual", "man", "info"],
        correct: 2
      }
    ],
    Intermédiaire: [
      {
        question: "Quelle commande permet de rechercher un fichier dans le système de fichiers?",
        options: ["search", "locate", "find", "lookup"],
        correct: 2
      },
      {
        question: "Quel est le gestionnaire de paquets par défaut sur Ubuntu?",
        options: ["yum", "pacman", "apt", "rpm"],
        correct: 2
      },
      {
        question: "Quelle commande permet de modifier les permissions d'un fichier?",
        options: ["chown", "chmod", "chgrp", "chperm"],
        correct: 1
      },
      {
        question: "Quel symbole est utilisé pour exécuter une commande en arrière-plan?",
        options: ["&", "#", "@", "%"],
        correct: 0
      },
      {
        question: "Quelle commande est utilisée pour afficher les processus en cours d'exécution?",
        options: ["ps", "top", "proc", "run"],
        correct: 0
      },
      {
        question: "Comment rediriger la sortie d'une commande vers un fichier en écrasant son contenu?",
        options: [">", ">>", "|", "<"],
        correct: 0
      },
      {
        question: "Quelle commande affiche l'utilisation de la mémoire et du swap?",
        options: ["meminfo", "free", "memory", "ramstat"],
        correct: 1
      },
      {
        question: "Comment créer un alias pour une commande?",
        options: ["alias", "shortcut", "define", "make"],
        correct: 0
      },
      {
        question: "Quelle commande est utilisée pour planifier des tâches récurrentes?",
        options: ["schedule", "at", "cron", "plan"],
        correct: 2
      },
      {
        question: "Comment afficher les connexions réseau actives?",
        options: ["netstat", "ifconfig", "network", "connections"],
        correct: 0
      }
    ],
    Avancé: [
      {
        question: "Quelle commande permet de configurer les tables de routage IP?",
        options: ["route", "ip route", "netstat", "ifconfig"],
        correct: 1
      },
      {
        question: "Comment créer un lien symbolique nommé 'lien' vers le fichier 'cible'?",
        options: ["ln cible lien", "ln -s cible lien", "link cible lien", "symlink cible lien"],
        correct: 1
      },
      {
        question: "Quelle commande permet de surveiller en temps réel les changements dans un fichier ?",
        options: ["watch", "monitor", "tail -f", "follow"],
        correct: 2
      },
      {
        question: "Comment changer le propriétaire et le groupe d'un fichier en une seule commande ?",
        options: ["chown user:group file", "chgrp user:group file", "chmod user:group file", "usermod file user:group"],
        correct: 0
      },
      {
        question: "Quelle commande permet de créer une archive tar compressée en gzip ?",
        options: ["tar -cvf", "tar -xvf", "tar -czvf", "tar -xzvf"],
        correct: 2
      },
      {
        question: "Comment afficher les entrées/sorties disque en temps réel ?",
        options: ["diskstat", "iotop", "diskio", "iomonitor"],
        correct: 1
      },
      {
        question: "Quelle commande est utilisée pour gérer les partitions de disque ?",
        options: ["partition", "fdisk", "diskpart", "parted"],
        correct: 1
      },
      {
        question: "Comment créer un système de fichiers ext4 sur une partition ?",
        options: ["format ext4", "mkfs.ext4", "newfs ext4", "createfs ext4"],
        correct: 1
      },
      {
        question: "Quelle commande permet de gérer les volumes logiques (LVM) ?",
        options: ["lvmanage", "lvcreate", "volumectl", "lvmconfig"],
        correct: 1
      },
      {
        question: "Comment analyser les performances du système en temps réel ?",
        options: ["sysstat", "perfmon", "top", "htop"],
        correct: 3
      }
    ]
  };
  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
}

function generateCybersecuriteQuestion(difficulty) {
  const questions = {
    Débutant: [
      {
        question: "Quelle est la différence principale entre un virus et un ver informatique?",
        options: ["Le virus a besoin d'un hôte, le ver est autonome", "Le ver a besoin d'un hôte, le virus est autonome", "Le virus affecte les fichiers, le ver affecte le réseau", "Il n'y a pas de différence"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une attaque par déni de service (DoS)?",
        options: ["Une tentative de voler des données", "Une surcharge intentionnelle d'un système", "Un type de virus", "Une faille dans un pare-feu"],
        correct: 1
      },
      {
        question: "Quel est le principe de base du chiffrement symétrique ?",
        options: ["Utiliser la même clé pour chiffrer et déchiffrer", "Utiliser des clés différentes pour chiffrer et déchiffrer", "Ne pas utiliser de clé", "Chiffrer uniquement les données sensibles"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une politique de mot de passe forte ?",
        options: ["Utiliser le même mot de passe partout", "Changer de mot de passe tous les jours", "Exiger une longueur minimale et des caractères variés", "Utiliser uniquement des chiffres"],
        correct: 2
      },
      {
        question: "Quel est le rôle principal d'un pare-feu applicatif web (WAF) ?",
        options: ["Bloquer les virus", "Filtrer le trafic réseau", "Protéger contre les attaques web spécifiques", "Gérer les mots de passe"],
        correct: 2,
      },
      {
        question: "Qu'est-ce que le principe du 'moindre privilège' en sécurité informatique ?",
        options: ["Donner tous les accès à tous les utilisateurs", "Limiter les accès au minimum nécessaire", "N'accorder aucun privilège", "Changer les privilèges quotidiennement"],
        correct: 1
      },
      {
        question: "Quelle est la principale fonction d'un logiciel antivirus ?",
        options: ["Accélérer l'ordinateur", "Détecter et éliminer les logiciels malveillants", "Améliorer la connexion internet", "Chiffrer les fichiers"],
        correct: 1
      },
      {
        question: "Qu'est-ce que l'hameçonnage (phishing) ?",
        options: ["Une technique de pêche", "Une attaque visant à voler des informations en se faisant passer pour une entité de confiance", "Un type de virus", "Une méthode de cryptage"],
        correct: 1
      },
      {
        question: "Quel est l'objectif principal d'une mise à jour de sécurité ?",
        options: ["Ajouter de nouvelles fonctionnalités", "Corriger des vulnérabilités connues", "Améliorer les performances", "Changer l'interface utilisateur"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une authentification à deux facteurs (2FA) ?",
        options: ["Utiliser deux mots de passe différents", "Combiner deux éléments distincts pour vérifier l'identité", "Se connecter depuis deux appareils différents", "Changer de mot de passe deux fois par jour"],
        correct: 1
      }
    ],
    Intermédiaire: [
      {
        question: "Quel type d'attaque vise à surcharger un système avec un grand nombre de requêtes?",
        options: ["Phishing", "DDoS", "Man-in-the-middle", "SQL Injection"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'hachage' en cryptographie?",
        options: ["Un type de chiffrement", "Une fonction à sens unique", "Un protocole de communication", "Une méthode d'authentification"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une attaque par force brute ?",
        options: ["Une attaque physique sur un serveur", "Une tentative d'accès en essayant toutes les combinaisons possibles", "Un type de virus informatique", "Une faille dans un pare-feu"],
        correct: 1,
      },
      {
        question: "Que signifie 'XSS' dans le contexte de la sécurité web ?",
        options: ["Cross-Site Scripting", "Extended Security System", "X-ray Security Scan", "Xtra Safe Surfing"],
        correct: 0,
      },
      {
        question: "Qu'est-ce qu'un 'honeypot' en cybersécurité ?",
        options: ["Un type de malware", "Un système conçu pour attirer les attaquants", "Un outil de cryptage", "Un protocole de sécurité"],
        correct: 1
      },
      {
        question: "Que signifie 'MITM' dans le contexte des attaques réseau ?",
        options: ["Man In The Middle", "Multiple Internet Threat Monitor", "Malware Injection Through Modem", "Managed Information Technology Method"],
        correct: 0
      },
      {
        question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
        options: ["Un double mot de passe", "Une méthode utilisant deux éléments distincts pour vérifier l'identité", "Un système de cryptage à double clé", "Une technique de phishing avancée"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un IDS (Intrusion Detection System) ?",
        options: ["Bloquer les attaques", "Détecter les activités suspectes", "Crypter les données", "Gérer les mots de passe"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le principe du 'moindre privilège' en sécurité informatique ?",
        options: ["Donner le minimum d'accès nécessaire aux utilisateurs", "Utiliser des mots de passe simples", "Désactiver tous les pare-feu", "Partager tous les accès entre utilisateurs"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une politique de sécurité ?",
        options: ["Un logiciel antivirus", "Un ensemble de règles pour protéger les systèmes et les données", "Un type de firewall", "Un protocole de chiffrement"],
        correct: 1
      }
    ],
    Avancé: [
      {
        question: "Qu'est-ce que l'exploitation 'zero-day'?",
        options: ["Une attaque utilisant une vulnérabilité inconnue", "Un virus qui s'active après un certain temps", "Une technique de cryptage", "Un type de pare-feu"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'pentesting'?",
        options: ["Un type de cryptage", "Un test de pénétration pour évaluer la sécurité", "Une méthode de programmation sécurisée", "Un outil de surveillance réseau"],
        correct: 1
      },
      {
        question: "Que signifie 'CSRF' dans la sécurité web ?",
        options: ["Cross-Site Request Forgery", "Client-Side Resource Failure", "Cryptographic Secure Random Function", "Centralized Security Response Framework"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'sandboxing' en sécurité informatique ?",
        options: ["Une technique de nettoyage de code", "Un environnement isolé pour tester des programmes potentiellement dangereux", "Un type de chiffrement", "Une méthode de sauvegarde de données"],
        correct: 1
      },
      {
        question: "Qu'est-ce que l'attaque 'Heartbleed' ?",
        options: ["Un type de malware", "Une faille dans le protocole SSL/TLS", "Une attaque sur les systèmes de paiement", "Un virus ciblant les appareils IoT"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'threat hunting' en cybersécurité ?",
        options: ["Une technique de phishing", "La recherche proactive de menaces dans un réseau", "Un type de malware", "Une méthode de chiffrement"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'SIEM' en cybersécurité ?",
        options: ["Security Information and Event Management", "Secure Internet Email Management", "System Integration for Enterprise Monitoring", "Standardized Incident Escalation Method"],
        correct: 0
      },
      {
        question: "Que signifie 'SOAR' dans le contexte de la cybersécurité ?",
        options: ["Security Orchestration, Automation and Response", "Secure Online Access Restriction", "System Optimization and Recovery", "Standardized Operational Asset Review"],
        correct: 0
      },
      {
        question: "Qu'est-ce que l'attaque 'buffer overflow' ?",
        options: ["Une surcharge de la mémoire tampon", "Un débordement de données sur le disque dur", "Une attaque par déni de service", "Une fuite de mémoire"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'purple teaming' en cybersécurité ?",
        options: ["Une équipe de développement", "Une collaboration entre les équipes red et blue", "Un type de malware", "Une technique de cryptage"],
        correct: 1
      }
    ]
  };
  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
}

function generateReseauQuestion(difficulty) {
  const questions = {
    Débutant: [
      {
        question: "Que signifie 'IP' dans 'adresse IP'?",
        options: ["Internet Protocol", "Internal Port", "Information Processor", "Identity Provider"],
        correct: 0
      },
      {
        question: "Quel protocole est utilisé pour envoyer des e-mails?",
        options: ["HTTP", "FTP", "SMTP", "TCP"],
        correct: 2
      },
      {
        question: "Qu'est-ce qu'un routeur ?",
        options: ["Un appareil qui connecte des réseaux", "Un type de câble réseau", "Un logiciel antivirus", "Un serveur web"],
        correct: 0
      },
      {
        question: "Que signifie 'LAN' ?",
        options: ["Large Area Network", "Local Area Network", "Long Access Node", "Linked Application Network"],
        correct: 1
      },
      {
        question: "Quel est le rôle principal d'un switch réseau ?",
        options: ["Filtrer le trafic", "Connecter des appareils dans un réseau local", "Fournir un accès Internet", "Stocker des données"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une adresse IP ?",
        options: ["Un identifiant unique pour chaque appareil sur un réseau", "Un mot de passe pour accéder à Internet", "Un type de câble réseau", "Un logiciel de sécurité"],
        correct: 0
      },
      {
        question: "Quel est le protocole de base pour naviguer sur le Web ?",
        options: ["FTP", "SMTP", "HTTP", "SSH"],
        correct: 2
      },
      {
        question: "Que signifie 'Wi-Fi' ?",
        options: ["Wireless Fidelity", "Wide Frequency", "Web Function", "Wired Filter"],
        correct: 0
      },
      {
        question: "Quel appareil est généralement fourni par un FAI pour se connecter à Internet ?",
        options: ["Switch", "Hub", "Modem", "Répéteur"],
        correct: 2
      },
      {
        question: "Quelle est la différence principale entre un hub et un switch ?",
        options: ["Le hub est plus rapide", "Le switch est moins cher", "Le hub envoie les données à tous les ports, le switch seulement au port destinataire", "Il n'y a pas de différence"],
        correct: 2
      }
    ],
    Intermédiaire: [
      {
        question: "Quel protocole est utilisé pour la résolution des noms de domaine en adresses IP?",
        options: ["HTTP", "FTP", "DNS", "DHCP"],
        correct: 2
      },
      {
        question: "Qu'est-ce qu'un 'switch' dans un réseau?",
        options: ["Un routeur", "Un appareil qui relie des segments de réseau", "Un serveur", "Un type de câble"],
        correct: 1
      },
      {
        question: "Que signifie 'VLAN' ?",
        options: ["Very Large Area Network", "Virtual Local Area Network", "Variable Length Address Node", "Verified Link Access Network"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour le transfert sécurisé de fichiers ?",
        options: ["HTTP", "FTP", "SFTP", "SMTP"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'NAT' en réseautique ?",
        options: ["Network Address Translation", "Node Attribution Table", "Network Access Terminal", "New Age Technology"],
        correct: 0
      },
      {
        question: "Quel est le rôle d'un pare-feu (firewall) dans un réseau ?",
        options: ["Accélérer le trafic réseau", "Filtrer le trafic entrant et sortant", "Stocker des données", "Gérer les adresses IP"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'subnetting' ?",
        options: ["Une technique de cryptage", "La division d'un réseau en sous-réseaux", "Un type de câble réseau", "Un protocole de routage"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour la configuration automatique des adresses IP ?",
        options: ["DHCP", "DNS", "HTTP", "FTP"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une adresse MAC ?",
        options: ["Une adresse physique unique d'un appareil réseau", "Un type de virus", "Une adresse IP dynamique", "Un protocole de sécurité"],
        correct: 0
      },
      {
        question: "Quel est le rôle du protocole ARP dans un réseau ?",
        options: ["Gérer les adresses e-mail", "Traduire les adresses IP en adresses MAC", "Crypter les données", "Configurer les routeurs"],
        correct: 1
      }
    ],
    Avancé: [
      {
        question: "Quel est le rôle du protocole BGP dans le routage Internet?",
        options: ["Gérer les adresses IP", "Échanger des informations de routage entre systèmes autonomes", "Sécuriser les connexions", "Gérer les noms de domaine"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'SDN' en réseautique?",
        options: ["Secure Digital Network", "Software-Defined Networking", "Synchronized Data Node", "System Distribution Network"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour la gestion à distance des équipements réseau ?",
        options: ["HTTP", "FTP", "SNMP", "SMTP"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'MPLS' en réseautique ?",
        options: ["Multi-Protocol Label Switching", "Maximum Packet Length Service", "Managed Private Line Service", "Multiple Path Linking System"],
        correct: 0
      },
      {
        question: "Quel est le principe de fonctionnement du protocole OSPF ?",
        options: ["Routage par vecteur de distance", "Routage par état de lien", "Traduction d'adresses", "Filtrage de paquets"],
        correct: 1
      },
      {
        question: "Qu'est-ce que l'IPsec ?",
        options: ["Un protocole de sécurité pour les communications IP", "Un type d'adresse IP", "Un logiciel de gestion de réseau", "Un standard pour les câbles Ethernet"],
        correct: 0
      },
      {
        question: "Que signifie 'QoS' en réseautique ?",
        options: ["Query of Service", "Quality of Service", "Quantity of Servers", "Quick Online Setup"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'BGP hijacking' ?",
        options: ["Une technique de routage efficace", "Un type d'attaque où un attaquant détourne le trafic Internet", "Un protocole de sécurité", "Une méthode de configuration de routeur"],
        correct: 1
      },
      {
        question: "Quel est le rôle principal d'un load balancer dans un réseau ?",
        options: ["Équilibrer la charge entre plusieurs serveurs", "Augmenter la vitesse d'Internet", "Filtrer les virus", "Gérer les adresses IP"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'Network Slicing' dans le contexte de la 5G ?",
        options: ["Une technique de découpage de câbles réseau", "La division d'un réseau physique en plusieurs réseaux virtuels", "Un protocole de routage", "Une méthode de cryptage"],
        correct: 1
      }
    ]
  };
  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
}

function generateQuestions(domain, difficulty, count) {
  const generatorFunctions = {
      algorithmie: generateAlgorithmieQuestion,
      linux: generateLinuxQuestion,
      cybersecurite: generateCybersecuriteQuestion,
      reseau: generateReseauQuestion
  };
  const questions = [];
  for (let i = 0; i < count; i++) {
      questions.push(generatorFunctions[domain](difficulty));
  }
  return questions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
      const allQuestions = generateQuestions(domain, difficulty, 20);
      const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
      await handleQuizSession(interaction, domain, difficulty, selectedQuestions);
  },
};

async function handleQuizSession(interaction, domain, difficulty, questions) {
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
          const filter = i => i.user.id === interaction.user.id;
          const confirmation = await response.awaitMessageComponent({ filter, time: 30000 });
          
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
          if (e.name === 'Error [InteractionCollectorError]') {
              await interaction.editReply({ content: 'Pas de réponse après 30 secondes, passage à la question suivante.', components: [] });
              currentQuestionIndex++;
              await new Promise(resolve => setTimeout(resolve, 2000));
          } else {
              console.error(e);
              await interaction.editReply({ content: 'Une erreur est survenue, le quiz est terminé.', components: [] });
              return;
          }
      }
  }
  await interaction.editReply({ content: `Quiz terminé ! Votre score final est ${score}/${questions.length}`, components: [] });
}
