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
      },
      {
        question: "Quel est le type de données pour les nombres à virgule flottante en Python ?",
        options: ["int", "float", "decimal", "double"],
        correct: 1
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        options: ["pop()", "push()", "remove()", "delete()"],
        correct: 0
      },
      {
        question: "En HTML, quelle balise est utilisée pour créer une liste non ordonnée ?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 0
      },
      {
        question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
        options: ["text-color", "font-color", "color", "foreground-color"],
        correct: 2
      },
      {
        question: "Quelle fonction Python est utilisée pour obtenir la longueur d'une liste ?",
        options: ["len()", "size()", "length()", "count()"],
        correct: 0
      },
      {
        question: "Quel opérateur JavaScript est utilisé pour la comparaison stricte (valeur et type) ?",
        options: ["==", "===", "=", "!="],
        correct: 1
      },
      {
        question: "Quelle balise HTML est utilisée pour insérer une image ?",
        options: ["<img>", "<picture>", "<image>", "<src>"],
        correct: 0
      },
      {
        question: "En CSS, quelle propriété est utilisée pour changer la police d'écriture ?",
        options: ["font-family", "text-font", "font-style", "typeface"],
        correct: 0
      },
      {
        question: "Quelle méthode Python est utilisée pour convertir une chaîne en minuscules ?",
        options: ["lower()", "toLower()", "lowercase()", "casefold()"],
        correct: 0
      },
      {
        question: "Comment déclare-t-on une fonction en JavaScript ?",
        options: ["function: myFunction()", "def myFunction():", "function myFunction()", "var myFunction = function()"],
        correct: 2
      },
      {
        question: "Quel mot-clé est utilisé pour définir une classe en Python ?",
        options: ["class", "def", "function", "struct"],
        correct: 0
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        options: ["append()", "push()", "add()", "insert()"],
        correct: 1
      },
      {
        question: "En HTML, quelle balise est utilisée pour créer un titre de niveau 1 ?",
        options: ["<h1>", "<header>", "<title>", "<heading>"],
        correct: 0
      },
      {
        question: "Quelle propriété CSS est utilisée pour ajouter de l'espace autour du contenu d'un élément ?",
        options: ["margin", "padding", "spacing", "border"],
        correct: 1
      },
      {
        question: "Quel opérateur Python est utilisé pour la division entière ?",
        options: ["/", "//", "%", "div"],
        correct: 1
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour arrondir un nombre à l'entier le plus proche ?",
        options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
        correct: 0
      },
      {
        question: "En HTML, quelle balise est utilisée pour créer un saut de ligne ?",
        options: ["<br>", "<lb>", "<newline>", "<break>"],
        correct: 0
      },
      {
        question: "Quelle propriété CSS est utilisée pour rendre un élément flexible ?",
        options: ["flex", "flexible", "display: flex", "position: flex"],
        correct: 2
      },
      {
        question: "Quelle fonction Python est utilisée pour générer un nombre aléatoire ?",
        options: ["random()", "rand()", "randint()", "choice()"],
        correct: 2
      },
      {
        question: "Quel est l'opérateur d'affectation en JavaScript ?",
        options: ["=", "==", ":=", "=>"],
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
      },
      {
        question: "Qu'est-ce qu'une promesse (Promise) en JavaScript ?",
        options: ["Un type de boucle", "Un objet représentant une valeur future", "Une fonction de rappel", "Un opérateur logique"],
        correct: 1
      },
      {
        question: "En Python, que fait la fonction 'lambda' ?",
        options: ["Définit une classe", "Crée une fonction anonyme", "Gère les exceptions", "Importe des modules"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'destructuring' en JavaScript ?",
        options: ["Une façon de supprimer des variables", "Une technique pour extraire des valeurs d'objets ou de tableaux", "Un type de boucle", "Une méthode de tri"],
        correct: 1
      },
      {
        question: "En TypeScript, que signifie le type 'any' ?",
        options: ["Un type pour les nombres", "Un type pour les chaînes de caractères", "Un type qui peut être n'importe quoi", "Un type pour les booléens"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le GIL en Python ?",
        options: ["Un type de boucle", "Une bibliothèque graphique", "Un verrou global d'interpréteur", "Un gestionnaire de paquets"],
        correct: 2
      },
      {
        question: "Que fait la méthode 'map()' en JavaScript ?",
        options: ["Crée un nouvel objet", "Applique une fonction à chaque élément d'un tableau", "Trie un tableau", "Fusionne deux tableaux"],
        correct: 1
      },
      {
        question: "En Python, qu'est-ce qu'un 'context manager' ?",
        options: ["Un type de boucle", "Un objet qui gère l'allocation et la libération de ressources", "Une fonction de haut niveau", "Un module d'import"],
        correct: 1
      },
      {
        question: "Que signifie 'this' en JavaScript ?",
        options: ["Un mot-clé pour créer une classe", "Une référence à l'objet courant", "Un type de donnée", "Une fonction intégrée"],
        correct: 1
      },
      {
        question: "En TypeScript, que fait le mot-clé 'extends' ?",
        options: ["Étend la portée d'une variable", "Crée une classe dérivée", "Ajoute des propriétés à un objet", "Importe des modules"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'list slicing' en Python ?",
        options: ["Une méthode pour trier une liste", "Une technique pour extraire une partie d'une liste", "Un type de boucle", "Une fonction de haut niveau"],
        correct: 1
      },
      {
        question: "Que fait l'opérateur 'spread' (...) en JavaScript ?",
        options: ["Multiplie des nombres", "Étend un itérable en éléments individuels", "Crée une fonction", "Définit une classe"],
        correct: 1
      },
      {
        question: "En Python, qu'est-ce qu'un 'itérateur' ?",
        options: ["Un type de boucle", "Un objet qui peut être itéré", "Une fonction mathématique", "Un module d'import"],
        correct: 1
      },
      {
        question: "Que signifie 'DOM' en développement web ?",
        options: ["Document Object Model", "Data Object Management", "Dynamic Object Manipulation", "Document Orientation Model"],
        correct: 0
      },
      {
        question: "En TypeScript, que fait le mot-clé 'implements' ?",
        options: ["Crée une nouvelle classe", "Implémente une interface", "Importe un module", "Définit une fonction"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'monkey patching' en Python ?",
        options: ["Une technique de débogage", "La modification dynamique de classes ou modules", "Un style de nommage de variables", "Une méthode de tri"],
        correct: 1
      },
      {
        question: "Que fait la méthode 'bind()' en JavaScript ?",
        options: ["Lie une fonction à un objet", "Crée un nouveau tableau", "Trie un tableau", "Définit une classe"],
        correct: 0
      },
      {
        question: "En Python, que fait l'opérateur '*' dans une définition de fonction ?",
        options: ["Multiplie des arguments", "Indique un nombre variable d'arguments positionnels", "Crée un générateur", "Définit une fonction lambda"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une 'closure' en JavaScript ?",
        options: ["Un type de boucle", "Une fonction avec son environnement lexical", "Une méthode de classe", "Un opérateur logique"],
        correct: 1
      },
      {
        question: "En TypeScript, que signifie le mot-clé 'abstract' ?",
        options: ["Une classe qui ne peut pas être instanciée directement", "Une fonction pure", "Un type de donnée", "Un module d'import"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'pickling' en Python ?",
        options: ["Une technique de tri", "Un processus de sérialisation d'objets", "Une méthode de compression", "Un style de nommage de variables"],
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
      },
      {
        question: "Qu'est-ce que le 'memory leak' en programmation ?",
        options: ["Un virus informatique", "Une fuite de données sensibles", "Une allocation de mémoire non libérée", "Un bug dans le compilateur"],
        correct: 2
      },
      {
        question: "En C++, que signifie le mot-clé 'virtual' pour une fonction ?",
        options: ["La fonction n'existe pas réellement", "La fonction peut être redéfinie dans les classes dérivées", "La fonction est privée", "La fonction est statique"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'function overloading' en C++ ?",
        options: ["Surcharger le processeur avec trop de fonctions", "Définir plusieurs fonctions avec le même nom mais des paramètres différents", "Appeler une fonction récursivement", "Optimiser une fonction"],
        correct: 1
      },
      {
        question: "En Java, que fait le mot-clé 'final' pour une classe ?",
        options: ["La classe ne peut pas être instanciée", "La classe ne peut pas être héritée", "La classe est abstraite", "La classe est statique"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'smart pointer' en C++ ?",
        options: ["Un pointeur qui pointe toujours vers une adresse valide", "Une classe qui simule un pointeur avec gestion automatique de la mémoire", "Un pointeur optimisé pour la vitesse", "Un pointeur qui peut pointer vers plusieurs objets"],
        correct: 1
      },
      {
        question: "En C#, que permet le mot-clé 'yield' ?",
        options: ["De créer un générateur", "De forcer la libération de mémoire", "D'interrompre l'exécution du programme", "De définir une constante"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'diamond problem' en programmation orientée objet ?",
        options: ["Un problème de cryptographie", "Une ambiguïté dans l'héritage multiple", "Un bug dans les algorithmes de tri", "Un problème de conception de base de données"],
        correct: 1
      },
      {
        question: "En C, que fait la fonction 'memcpy()' ?",
        options: ["Copie un bloc de mémoire", "Alloue de la mémoire", "Libère de la mémoire", "Compare deux blocs de mémoire"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'RAII' en C++ ?",
        options: ["Un type de boucle", "Une technique de gestion des ressources", "Un algorithme de tri", "Un design pattern"],
        correct: 1
      },
      {
        question: "En Java, que signifie le mot-clé 'transient' ?",
        options: ["La variable est temporaire", "La variable ne sera pas sérialisée", "La variable est constante", "La variable est statique"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'type erasure' en Java ?",
        options: ["Une technique pour effacer des variables", "Le processus de suppression des informations de type générique à la compilation", "Une méthode de cryptage", "Un bug du compilateur"],
        correct: 1
      },
      {
        question: "En C++, que fait l'opérateur de résolution de portée (::) ?",
        options: ["Compare deux valeurs", "Accède aux membres d'une classe ou d'un namespace", "Crée un pointeur", "Définit une constante"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'buffer overflow' ?",
        options: ["Un dépassement de capacité d'un tampon mémoire", "Une optimisation de la mémoire", "Un type de garbage collection", "Une technique de compression de données"],
        correct: 0
      },
      {
        question: "En C#, que permet le mot-clé 'async' ?",
        options: ["De créer des méthodes asynchrones", "D'optimiser automatiquement le code", "De déclarer des variables globales", "De créer des threads"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'vtable' en C++ ?",
        options: ["Une table de variables", "Une table de fonctions virtuelles", "Un type de structure de données", "Un outil de débogage"],
        correct: 1
      },
      {
        question: "En Java, que fait le mot-clé 'synchronized' ?",
        options: ["Synchronise l'horloge système", "Protège une section de code pour l'accès par un seul thread à la fois", "Optimise les performances", "Gère les exceptions"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'undefined behavior' en C et C++ ?",
        options: ["Un comportement non spécifié par le standard du langage", "Un bug dans le compilateur", "Une erreur de syntaxe", "Un type d'exception"],
        correct: 0
      },
      {
        question: "En C#, que permet le mot-clé 'ref' pour un paramètre de méthode ?",
        options: ["De passer l'argument par référence", "De rendre le paramètre optionnel", "De rendre le paramètre constant", "De créer une référence nulle"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'copy-on-write' en programmation ?",
        options: ["Une technique d'optimisation de la mémoire", "Un type de boucle", "Une méthode de cryptage", "Un algorithme de tri"],
        correct: 0
      },
      {
        question: "En C++, que signifie le mot-clé 'explicit' pour un constructeur ?",
        options: ["Le constructeur est public", "Le constructeur ne peut pas être utilisé pour des conversions implicites", "Le constructeur est privé", "Le constructeur est statique"],
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
      },
      {
        question: "Quelle commande Linux tue un processus nommé xyz ?",
        options: ["pkill xyz", "delete xyz", "del xyz", "mv xyz"],
        correct: 0
      },
      {
        question: "Quelle commande Linux donne des informations détaillées sur les sockets ?",
        options: ["ss", "ssh", "w", "fg"],
        correct: 0
      },
      {
        question: "Quelle commande Linux supprime de force le fichier 'abc' sans confirmation ?",
        options: ["rm -l abc", "rm -a abc", "rm -x abc", "rm -f abc"],
        correct: 3
      },
      {
        question: "Quelle commande Linux change la priorité d'un processus en cours d'exécution ?",
        options: ["pstree", "renice", "renew", "pmap"],
        correct: 1
      },
      {
        question: "Quelle commande déplace un processus donné de l'arrière-plan vers l'avant-plan ?",
        options: ["ps", "fg", "df", "lf"],
        correct: 1
      },
      {
        question: "Quelle commande Linux permet un transfert de fichiers sécurisé ?",
        options: ["ftp", "scp", "tftp", "sctp"],
        correct: 1
      },
      {
        question: "Quelle commande Linux liste et reprend les tâches arrêtées en arrière-plan ?",
        options: ["ls", "bg", "fg", "ss"],
        correct: 1
      },
      {
        question: "Comment afficher les périphériques USB sous Linux ?",
        options: ["ethtools -m", "dig -tls", "display -ls", "lsusb -tv"],
        correct: 3
      },
      {
        question: "Quelle commande peut-on exécuter pour compter le nombre de lignes dans un fichier ?",
        options: ["lc", "count", "wc -l", "cl"],
        correct: 2
      },
      {
        question: "Comment afficher l'historique des redémarrages du système sous Linux ?",
        options: ["last reboot", "display reboot", "reboot", "lst"],
        correct: 0
      },
      {
        question: "Quelle commande Linux collecte et affiche les ressources système ?",
        options: ["ds", "df", "dig", "dstat"],
        correct: 3
      },
      {
        question: "Quelle commande Linux est utilisée pour les audits de sécurité ?",
        options: ["df", "nmap", "dig", "pwd"],
        correct: 1
      },
      {
        question: "Quelle commande est utilisée pour le filtrage des paquets IP sous Linux ?",
        options: ["ethtools", "filters", "dig", "iptables"],
        correct: 3
      },
      {
        question: "Pour donner les permissions 'rw- rw- r--' au fichier X, quelle commande utilise-t-on ?",
        options: ["chmod 664 filename", "chmod 775 filename", "chmod 774 filename", "chmod 665 filename"],
        correct: 0
      },
      {
        question: "Quelle commande Linux est utilisée pour vérifier les paramètres de votre carte réseau ?",
        options: ["ss", "ethtool", "dig", "route"],
        correct: 1
      },
      {
        question: "Quelle commande Linux est utilisée pour planifier l'exécution d'une commande à une heure ultérieure ?",
        options: ["ethtools", "crontab", "dashboard", "nslookup"],
        correct: 1
      },
      {
        question: "Quelle commande Linux est utilisée pour télécharger le contenu des serveurs web ?",
        options: ["tftp", "ftp", "get", "wget"],
        correct: 3
      },
      {
        question: "Quelle option de ls fournit un ordre inverse sous Linux ?",
        options: ["-r", "-b", "-t", "-l"],
        correct: 0
      },
      {
        question: "Quelle commande affiche les informations sur le processeur sous Linux ?",
        options: ["cpuinfo", "procinfo", "cat /proc/cpuinfo", "lscpu"],
        correct: 2
      },
      {
        question: "Quelle commande est utilisée pour afficher les processus en cours d'exécution ?",
        options: ["ls", "ps", "top", "proc"],
        correct: 1
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
      },
      {
        question: "Quelle commande permet de compresser un fichier en format .gz?",
        options: ["zip", "compress", "gzip", "tar"],
        correct: 2
      },
      {
        question: "Comment afficher les 10 dernières lignes d'un fichier?",
        options: ["head", "tail", "last", "end"],
        correct: 1
      },
      {
        question: "Quelle commande est utilisée pour changer le propriétaire d'un fichier?",
        options: ["chown", "chmod", "chuser", "chgrp"],
        correct: 0
      },
      {
        question: "Comment afficher l'espace disque disponible?",
        options: ["space", "df", "disk", "free"],
        correct: 1
      },
      {
        question: "Quelle commande permet de trier les lignes d'un fichier?",
        options: ["order", "sort", "arrange", "line"],
        correct: 1
      },
      {
        question: "Comment afficher le contenu d'un fichier page par page?",
        options: ["more", "less", "page", "view"],
        correct: 1
      },
      {
        question: "Quelle commande permet de comparer deux fichiers?",
        options: ["comp", "diff", "cmp", "compare"],
        correct: 1
      },
      {
        question: "Comment créer un lien symbolique?",
        options: ["ln -s", "link -s", "symlink", "mklink"],
        correct: 0
      },
      {
        question: "Quelle commande affiche les variables d'environnement?",
        options: ["env", "printenv", "variables", "echo $ENV"],
        correct: 1
      },
      {
        question: "Comment afficher le calendrier du mois en cours?",
        options: ["date", "cal", "calendar", "month"],
        correct: 1
      },
      {
        question: "Quelle commande permet de modifier un fichier texte en ligne de commande?",
        options: ["edit", "vim", "modify", "change"],
        correct: 1
      },
      {
        question: "Comment afficher l'utilisation du CPU par processus?",
        options: ["cpu", "top", "ps aux", "procstat"],
        correct: 1
      },
      {
        question: "Quelle commande permet de créer une archive tar?",
        options: ["zip", "compress", "archive", "tar"],
        correct: 3
      },
      {
        question: "Comment afficher les informations sur le système d'exploitation?",
        options: ["sysinfo", "uname", "osinfo", "version"],
        correct: 1
      },
      {
        question: "Quelle commande permet de se connecter à distance à un autre système Linux?",
        options: ["remote", "connect", "ssh", "telnet"],
        correct: 2
      },
      {
        question: "Comment afficher les utilisateurs actuellement connectés au système?",
        options: ["users", "who", "logged", "active"],
        correct: 1
      },
      {
        question: "Quelle commande permet de monter un système de fichiers?",
        options: ["mount", "attach", "connect", "link"],
        correct: 0
      },
      {
        question: "Comment vérifier l'intégrité d'un fichier téléchargé avec une somme de contrôle MD5?",
        options: ["check", "verify", "md5sum", "integrity"],
        correct: 2
      },
      {
        question: "Quelle commande permet de rechercher du texte dans des fichiers?",
        options: ["search", "find", "grep", "lookup"],
        correct: 2
      },
      {
        question: "Comment afficher les informations sur les partitions de disque?",
        options: ["partinfo", "fdisk -l", "diskpart", "partlist"],
        correct: 1
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
      },
      {
        question: "Quelle commande permet de configurer les règles du pare-feu iptables ?",
        options: ["firewall-cmd", "ufw", "iptables", "nftables"],
        correct: 2
      },
      {
        question: "Comment créer un RAID 5 logiciel sous Linux ?",
        options: ["mdadm --create", "lvcreate --type raid5", "mkraid --level=5", "raid5ctl --new"],
        correct: 0
      },
      {
        question: "Quelle commande permet de debugger un processus en cours d'exécution ?",
        options: ["debug", "gdb", "strace", "ltrace"],
        correct: 2
      },
      {
        question: "Comment configurer un serveur DHCP sous Linux ?",
        options: ["dhcpd.conf", "dhcp-server", "isc-dhcp-server", "dhcpctl"],
        correct: 2
      },
      {
        question: "Quelle commande permet de gérer les quotas disque des utilisateurs ?",
        options: ["quota", "edquota", "setquota", "userquota"],
        correct: 1
      },
      {
        question: "Comment configurer un serveur DNS BIND sous Linux ?",
        options: ["named.conf", "bind.conf", "dns.conf", "zone.conf"],
        correct: 0
      },
      {
        question: "Quelle commande permet de gérer les modules du noyau Linux ?",
        options: ["modprobe", "insmod", "lsmod", "rmmod"],
        correct: 0
      },
      {
        question: "Comment configurer un serveur web Apache sous Linux ?",
        options: ["apache2.conf", "httpd.conf", "web.conf", "apache.conf"],
        correct: 1
      },
      {
        question: "Quelle commande permet de gérer les services systemd ?",
        options: ["service", "systemctl", "init", "sysvinit"],
        correct: 1
      },
      {
        question: "Comment configurer un serveur NFS sous Linux ?",
        options: ["nfs.conf", "exports", "/etc/nfs", "nfsd.conf"],
        correct: 1
      },
      {
        question: "Quelle commande permet de gérer les partitions GPT ?",
        options: ["fdisk", "gdisk", "parted", "gparted"],
        correct: 1
      },
      {
        question: "Comment configurer un serveur Samba pour le partage de fichiers Windows ?",
        options: ["smb.conf", "samba.conf", "cifs.conf", "windows-share.conf"],
        correct: 0
      },
      {
        question: "Quelle commande permet de gérer les certificats SSL ?",
        options: ["sslctl", "openssl", "certutil", "keytool"],
        correct: 1
      },
      {
        question: "Comment configurer un serveur de messagerie Postfix ?",
        options: ["main.cf", "postfix.conf", "mail.conf", "smtp.conf"],
        correct: 0
      },
      {
        question: "Quelle commande permet de gérer les groupes de contrôle (cgroups) ?",
        options: ["cgcreate", "cgmanager", "cgtool", "cgroupctl"],
        correct: 0
      },
      {
        question: "Comment configurer un serveur VPN OpenVPN sous Linux ?",
        options: ["openvpn.conf", "vpn.conf", "server.ovpn", "tunnel.conf"],
        correct: 0
      },
      {
        question: "Quelle commande permet de gérer les conteneurs Linux ?",
        options: ["docker", "lxc", "podman", "containerd"],
        correct: 1
      },
      {
        question: "Comment configurer un serveur proxy Squid sous Linux ?",
        options: ["squid.conf", "proxy.conf", "cache.conf", "web-proxy.conf"],
        correct: 0
      },
      {
        question: "Quelle commande permet de gérer les snapshots LVM ?",
        options: ["lvcreate", "lvsnap", "snapshot", "lvm-snap"],
        correct: 0
      },
      {
        question: "Comment configurer un serveur de base de données PostgreSQL sous Linux ?",
        options: ["postgres.conf", "postgresql.conf", "pgsql.conf", "db.conf"],
        correct: 1
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
      },
      {
        question: "Qu'est-ce qu'un malware ?",
        options: ["Un logiciel malveillant", "Un antivirus", "Un pare-feu", "Un type de mot de passe"],
        correct: 0
      },
      {
        question: "Que signifie l'acronyme VPN ?",
        options: ["Very Private Network", "Virtual Private Network", "Virus Protection Network", "Verified Personal Network"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une attaque par force brute ?",
        options: ["Une attaque physique sur un serveur", "Une tentative de deviner un mot de passe en essayant toutes les combinaisons possibles", "Un type de virus", "Une faille dans le matériel"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un pare-feu ?",
        options: ["Accélérer la connexion internet", "Filtrer le trafic réseau", "Stocker des mots de passe", "Créer des sauvegardes"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'social engineering' en cybersécurité ?",
        options: ["Une technique de programmation", "Une méthode de cryptage", "Une manipulation psychologique pour obtenir des informations", "Un type de réseau social"],
        correct: 2
      },
      {
        question: "Que signifie l'acronyme HTTPS ?",
        options: ["Hyper Text Transfer Protocol Secure", "High Tech Transfer Protocol System", "Hyper Text Transmission Protocol Service", "Home Tech Transfer Protocol Secure"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'un 'cookie' dans le contexte web ?",
        options: ["Un virus", "Un petit fichier stocké sur l'ordinateur par un site web", "Un type de pare-feu", "Un mot de passe sécurisé"],
        correct: 1
      },
      {
        question: "Quel est le rôle d'un gestionnaire de mots de passe ?",
        options: ["Créer des mots de passe faibles", "Stocker et gérer de manière sécurisée les mots de passe", "Partager les mots de passe avec d'autres utilisateurs", "Supprimer tous les mots de passe"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une 'backdoor' en informatique ?",
        options: ["Une porte de secours", "Un accès secret à un système", "Un type de firewall", "Un antivirus"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme DDoS ?",
        options: ["Data Deletion on Server", "Distributed Denial of Service", "Digital Download Service", "Direct Data Storage"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'phishing' ?",
        options: ["Une technique de pêche", "Une attaque visant à voler des informations en se faisant passer pour une entité de confiance", "Un type de cryptage", "Un logiciel antivirus"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un logiciel antivirus ?",
        options: ["Améliorer les performances de l'ordinateur", "Détecter et supprimer les logiciels malveillants", "Créer des sauvegardes", "Gérer les mots de passe"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une mise à jour de sécurité ?",
        options: ["Un nouveau design pour le logiciel", "Un correctif pour des vulnérabilités connues", "Une augmentation de la vitesse du processeur", "Un changement de mot de passe"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme SQL dans le contexte d'une injection SQL ?",
        options: ["Secure Query Language", "Structured Query Language", "System Quality Language", "Server Query Lookup"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'un 'botnet' ?",
        options: ["Un réseau d'ordinateurs infectés contrôlés à distance", "Un type d'antivirus", "Un langage de programmation", "Un système d'exploitation sécurisé"],
        correct: 0
      },
      {
        question: "Quel est le principe de base du chiffrement asymétrique ?",
        options: ["Utiliser une seule clé pour chiffrer et déchiffrer", "Utiliser deux clés différentes : une publique et une privée", "Ne pas utiliser de clé", "Chiffrer uniquement les fichiers importants"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une politique de mot de passe ?",
        options: ["Un mot de passe utilisé par les politiciens", "Un ensemble de règles pour créer des mots de passe sécurisés", "Un type de virus", "Un logiciel de gestion de mots de passe"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme IoT ?",
        options: ["Internet of Things", "Internal of Technology", "Intranet of Tools", "Intelligence of Tech"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'un 'zero-day exploit' ?",
        options: ["Une attaque exploitant une vulnérabilité inconnue du fabricant", "Un virus qui se propage en 0 jour", "Un type de pare-feu", "Une technique de cryptage"],
        correct: 0
      },
      {
        question: "Quel est le but principal d'un test de pénétration ?",
        options: ["Améliorer les performances du réseau", "Identifier les vulnérabilités de sécurité", "Installer de nouveaux logiciels", "Former les employés"],
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
      },
      {
        question: "Qu'est-ce que le 'footprinting' en cybersécurité ?",
        options: ["Une technique de marche silencieuse", "La collecte d'informations sur une cible potentielle", "Un type de malware", "Une méthode de chiffrement"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme CSRF ?",
        options: ["Centralized Security Response Force", "Cross-Site Request Forgery", "Cryptographic Secure Random Function", "Client-Server Relationship Framework"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une attaque par 'buffer overflow' ?",
        options: ["Une surcharge de la mémoire tampon", "Un type de DDoS", "Une technique de phishing", "Un virus qui remplit le disque dur"],
        correct: 0
      },
      {
        question: "Quel est le principe de base du chiffrement asymétrique ?",
        options: ["Utiliser la même clé pour chiffrer et déchiffrer", "Utiliser des clés différentes pour chiffrer et déchiffrer", "Ne pas utiliser de clé", "Chiffrer uniquement les en-têtes des messages"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une attaque de type 'zero-day' ?",
        options: ["Une attaque qui dure moins d'une journée", "Une attaque exploitant une vulnérabilité inconnue", "Une attaque qui efface toutes les données", "Une attaque qui ne cause aucun dommage"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme SIEM ?",
        options: ["Security Information and Event Management", "System Integration for Enterprise Management", "Secure Internet Email Monitor", "Server Infrastructure Evaluation Method"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une 'backdoor' en informatique ?",
        options: ["Une porte de secours physique", "Un accès secret à un système", "Un type de firewall", "Une méthode de sauvegarde"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un WAF (Web Application Firewall) ?",
        options: ["Accélérer le chargement des pages web", "Protéger contre les attaques spécifiques aux applications web", "Gérer les bases de données web", "Créer des sites web sécurisés"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'sandboxing' en sécurité informatique ?",
        options: ["Une technique de cryptage", "Un environnement isolé pour tester des logiciels potentiellement dangereux", "Un type d'attaque DDoS", "Une méthode de sauvegarde"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme APT dans le contexte de la cybersécurité ?",
        options: ["Advanced Persistent Threat", "Automated Penetration Testing", "Application Programming Technique", "Anti-Phishing Technology"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'pentesting' ?",
        options: ["Un test d'écriture", "Un test de pénétration pour évaluer la sécurité d'un système", "Un test de performance", "Un test de compatibilité"],
        correct: 1
      },
      {
        question: "Quel est le principe de base de l'attaque 'pass-the-hash' ?",
        options: ["Deviner des mots de passe", "Utiliser un hash de mot de passe volé sans connaître le mot de passe en clair", "Casser des algorithmes de hachage", "Créer des mots de passe forts"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'pharming' ?",
        options: ["Une technique d'agriculture", "Une attaque redirigeant le trafic vers un site malveillant", "Un type de spam", "Une méthode de chiffrement"],
        correct: 1
      },
      {
        question: "Que signifie l'acronyme OWASP ?",
        options: ["Open Web Application Security Project", "Online Web Attack and Security Prevention", "Organized Wireless Access Security Protocol", "Optimized Web Application Scanning Process"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'une attaque de type 'watering hole' ?",
        options: ["Une attaque ciblant les systèmes d'irrigation", "Une attaque infectant des sites légitimes fréquentés par la cible", "Un type de DDoS utilisant des requêtes HTTP GET", "Une technique de phishing par email"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un HIDS (Host-based Intrusion Detection System) ?",
        options: ["Protéger contre les virus", "Détecter les intrusions sur un hôte spécifique", "Gérer les mots de passe", "Accélérer les performances du système"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'salting' dans le contexte du hachage de mots de passe ?",
        options: ["Ajouter du sel aux serveurs pour les protéger", "Ajouter des données aléatoires avant le hachage", "Une technique de cryptage symétrique", "Renforcer physiquement les serveurs"],
        correct: 1
      },
      {
        question: "Que signifie 'CIA triad' en sécurité de l'information ?",
        options: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Cyber Intelligence Alliance", "Critical Infrastructure Assessment"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une attaque de type 'race condition' ?",
        options: ["Une compétition de piratage", "Une vulnérabilité liée au timing dans un système", "Un type de malware qui se propage rapidement", "Une attaque ciblant les voitures connectées"],
        correct: 1
      },
      {
        question: "Quel est le principe de base de la stéganographie ?",
        options: ["Cacher des informations dans d'autres données apparemment inoffensives", "Un type de chiffrement fort", "Une technique de compression de données", "Une méthode d'authentification biométrique"],
        correct: 0
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
      },
      {
        question: "Qu'est-ce que l'attaque 'Rowhammer' ?",
        options: ["Une attaque sur les processeurs", "Un type de malware pour smartphones", "Une exploitation de la mémoire RAM", "Une attaque sur les routeurs Wi-Fi"],
        correct: 2
      },
      {
        question: "Que signifie 'OSINT' en cybersécurité ?",
        options: ["Operating System Integration", "Online Security Incident Notification", "Optimized System Intrusion Network", "Open Source Intelligence"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'firmware fuzzing' ?",
        options: ["Une technique de cryptage du firmware", "Une méthode de mise à jour du firmware", "Un type de malware ciblant le firmware", "Un test de sécurité du firmware par injection de données aléatoires"],
        correct: 3
      },
      {
        question: "Qu'est-ce que l'attaque 'Side-channel' ?",
        options: ["Une attaque sur les canaux de communication secondaires", "Une attaque sur les serveurs DNS", "Un type de phishing ciblé", "Une exploitation des fuites d'information physiques d'un système"],
        correct: 3
      },
      {
        question: "Que signifie 'YARA' dans le contexte de la détection de malware ?",
        options: ["Your Advanced Response Algorithm", "Yet Another Recursive Analyzer", "Your Automated Ransomware Analyzer", "Yet Another Ridiculous Acronym"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'Cyber Threat Intelligence' ?",
        options: ["Un type de malware avancé", "Un framework de sécurité", "L'analyse et la collecte d'informations sur les menaces cybernétiques", "Un outil de cryptage"],
        correct: 2
      },
      {
        question: "Qu'est-ce que l'attaque 'Golden Ticket' dans le contexte de Kerberos ?",
        options: ["Une attaque sur les systèmes de billetterie en ligne", "Un type de ransomware", "Une attaque sur les systèmes de paiement", "Une exploitation permettant de créer des tickets d'authentification valides"],
        correct: 3
      },
      {
        question: "Que signifie 'EDR' en cybersécurité ?",
        options: ["Enhanced Data Recovery", "Extended Disaster Recovery", "Endpoint Detection and Response", "Encrypted Data Routing"],
        correct: 2
      },
      {
        question: "Qu'est-ce que l'attaque 'Pass-the-Hash' ?",
        options: ["Une technique de craquage de mot de passe", "Un type de malware", "Une méthode de chiffrement", "Une attaque utilisant des hachages de mot de passe volés sans connaître le mot de passe en clair"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'Fileless Malware' ?",
        options: ["Un virus qui supprime tous les fichiers", "Un malware qui n'utilise pas de fichiers sur le disque", "Un type de ransomware", "Un malware qui ne laisse aucune trace"],
        correct: 1
      },
      {
        question: "Que signifie 'CASB' dans le contexte de la sécurité cloud ?",
        options: ["Centralized Application Security Baseline", "Cyber Attack Simulation and Behavior", "Critical Asset Security Backup", "Cloud Access Security Broker"],
        correct: 3
      },
      {
        question: "Qu'est-ce que l'attaque 'Spectre' ?",
        options: ["Une attaque sur les systèmes de spectrométrie", "Un type de malware furtif", "Une vulnérabilité exploitant la prédiction de branchement des processeurs", "Une attaque sur les réseaux 5G"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'Threat Modeling' en développement sécurisé ?",
        options: ["Une technique de modélisation 3D des menaces", "Un outil de simulation d'attaques", "Une méthode de classification des malwares", "Un processus d'identification et de priorisation des menaces potentielles"],
        correct: 3
      },
      {
        question: "Que signifie 'DMARC' dans le contexte de la sécurité des emails ?",
        options: ["Direct Mail Anti-Ransomware Control", "Digital Mail Archive and Recovery Center", "Domain-based Message Authentication, Reporting & Conformance", "Distributed Malware Analysis and Remediation Cloud"],
        correct: 2
      },
      {
        question: "Qu'est-ce que l'attaque 'Evil Twin' en sécurité Wi-Fi ?",
        options: ["Un type de malware affectant deux appareils simultanément", "La création d'un point d'accès malveillant imitant un réseau légitime", "Une technique de clonage de cartes SIM", "Une attaque ciblant les jumeaux"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'Cyber Kill Chain' ?",
        options: ["Un jeu vidéo de cybersécurité", "Une technique de destruction de malware", "Un outil de simulation d'attaques", "Un modèle décrivant les étapes d'une cyberattaque"],
        correct: 3
      },
      {
        question: "Que signifie 'OWASP' dans le contexte de la sécurité des applications web ?",
        options: ["Online Web Attack Simulation Platform", "Optimized Web Application Scanning Process", "Organized Wireless Access Security Protocol", "Open Web Application Security Project"],
        correct: 3
      },
      {
        question: "Qu'est-ce que l'attaque 'Man-in-the-Disk' ?",
        options: ["Une attaque sur les disques durs", "Un type de ransomware", "Une exploitation de la zone de stockage externe sur Android", "Une technique d'interception de données sur les CD-ROMs"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'Cyber Threat Hunting' proactif ?",
        options: ["Un jeu de rôle en cybersécurité", "Une technique de phishing avancée", "Une chasse aux hackers", "La recherche active de menaces non détectées dans un réseau"],
        correct: 3
      },
      {
        question: "Que signifie 'ZTA' en architecture de sécurité moderne ?",
        options: ["Zoned Threat Analysis", "Zenith Tactical Approach", "Zero Trust Architecture", "Zeta Transmission Algorithm"],
        correct: 2
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
      },
      {
        question: "Que signifie 'DNS' ?",
        options: ["Data Network System", "Domain Name System", "Digital Network Service", "Dynamic Node Selector"],
        correct: 1
      },
      {
        question: "Quel est le but principal d'un pare-feu ?",
        options: ["Accélérer la connexion Internet", "Filtrer le trafic réseau", "Stocker des données", "Envoyer des e-mails"],
        correct: 1
      },
      {
        question: "Quelle est la vitesse standard d'Ethernet ?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "Toutes ces réponses"],
        correct: 3
      },
      {
        question: "Que signifie 'URL' ?",
        options: ["Universal Resource Locator", "Uniform Reference Link", "User Request Line", "Unified Resource List"],
        correct: 0
      },
      {
        question: "Quel type de câble est le plus couramment utilisé pour les réseaux Ethernet ?",
        options: ["Coaxial", "Fibre optique", "Paire torsadée", "Sans fil"],
        correct: 2
      },
      {
        question: "Qu'est-ce qu'une adresse MAC ?",
        options: ["Un identifiant unique pour chaque interface réseau", "Un type de protocole réseau", "Une adresse e-mail", "Un mot de passe réseau"],
        correct: 0
      },
      {
        question: "Quel est le rôle principal d'un serveur DHCP ?",
        options: ["Bloquer les virus", "Attribuer automatiquement des adresses IP", "Stocker des fichiers", "Envoyer des e-mails"],
        correct: 1
      },
      {
        question: "Que signifie 'IoT' ?",
        options: ["Internet of Things", "Internal of Technology", "Intranet of Tools", "Interface of Terminals"],
        correct: 0
      },
      {
        question: "Quel protocole est utilisé pour sécuriser les connexions Web ?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2
      },
      {
        question: "Qu'est-ce qu'un serveur proxy ?",
        options: ["Un type de virus", "Un intermédiaire entre les clients et les serveurs", "Un logiciel de messagerie", "Un type de routeur"],
        correct: 1
      },
      {
        question: "Quel est le but principal du protocole FTP ?",
        options: ["Envoyer des e-mails", "Transférer des fichiers", "Naviguer sur le Web", "Sécuriser les connexions"],
        correct: 1
      },
      {
        question: "Que signifie 'ISP' ?",
        options: ["Internet Service Provider", "Internal Security Protocol", "Integrated System Process", "International Standard Procedure"],
        correct: 0
      },
      {
        question: "Qu'est-ce qu'un port réseau ?",
        options: ["Un type de câble", "Un point d'entrée ou de sortie pour les données", "Un appareil de stockage", "Un logiciel antivirus"],
        correct: 1
      },
      {
        question: "Quel est le rôle principal d'un répéteur réseau ?",
        options: ["Filtrer le trafic", "Amplifier le signal", "Stocker des données", "Envoyer des e-mails"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une adresse IP dynamique ?",
        options: ["Une adresse qui ne change jamais", "Une adresse attribuée automatiquement et qui peut changer", "Une adresse utilisée uniquement pour les jeux en ligne", "Une adresse pour les réseaux sans fil"],
        correct: 1
      },
      {
        question: "Quel est le protocole standard pour l'envoi de pages Web ?",
        options: ["FTP", "SMTP", "HTTP", "DHCP"],
        correct: 2
      },
      {
        question: "Qu'est-ce qu'un ping en réseau ?",
        options: ["Un type de virus", "Un outil pour tester la connectivité", "Un protocole de sécurité", "Un type de câble réseau"],
        correct: 1
      },
      {
        question: "Que signifie 'NIC' dans le contexte des réseaux ?",
        options: ["Network Interface Card", "New Internet Connection", "Node Identification Code", "National Information Center"],
        correct: 0
      },
      {
        question: "Quel est le but principal d'un serveur DNS ?",
        options: ["Stocker des fichiers", "Traduire les noms de domaine en adresses IP", "Envoyer des e-mails", "Filtrer le spam"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une topologie en étoile ?",
        options: ["Un type de virus", "Une configuration réseau où tous les nœuds sont connectés à un point central", "Un protocole de sécurité", "Un type de câble réseau"],
        correct: 1
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
      },
      {
        question: "Qu'est-ce que le protocole OSPF ?",
        options: ["Un protocole de messagerie", "Un protocole de routage dynamique", "Un protocole de transfert de fichiers", "Un protocole de sécurité"],
        correct: 1
      },
      {
        question: "Que signifie 'QoS' en réseautique ?",
        options: ["Query of Service", "Quality of Service", "Quantity of Servers", "Quick Online Setup"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'un 'trunk port' sur un switch ?",
        options: ["Un port réservé aux administrateurs", "Un port qui transporte le trafic de plusieurs VLANs", "Un port à haute vitesse", "Un port de sauvegarde"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour la gestion à distance des équipements réseau ?",
        options: ["HTTP", "FTP", "SNMP", "SMTP"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'BGP' en routage ?",
        options: ["Basic Gateway Protocol", "Border Gateway Protocol", "Bandwidth Guarantee Protocol", "Backup Gateway Process"],
        correct: 1
      },
      {
        question: "Que fait un serveur RADIUS ?",
        options: ["Gère les adresses IP", "Fournit l'authentification, l'autorisation et la comptabilité", "Contrôle le trafic réseau", "Stocke les fichiers de configuration"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'STP' dans les réseaux commutés ?",
        options: ["Standard Transfer Protocol", "Spanning Tree Protocol", "Secure Transmission Process", "Switch Timing Protocol"],
        correct: 1
      },
      {
        question: "Quel est le but principal du protocole ICMP ?",
        options: ["Transférer des fichiers", "Envoyer des messages d'erreur et de contrôle", "Gérer les adresses IP", "Sécuriser les connexions"],
        correct: 1
      },
      {
        question: "Qu'est-ce qu'une DMZ en architecture réseau ?",
        options: ["Dynamic Management Zone", "Demilitarized Zone", "Data Management Zone", "Direct Memory Zone"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour la voix sur IP (VoIP) ?",
        options: ["HTTP", "FTP", "SIP", "SMTP"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'MPLS' en réseautique ?",
        options: ["Multi-Protocol Label Switching", "Maximum Packet Length Service", "Managed Private Line Service", "Multiple Path Linking System"],
        correct: 0
      },
      {
        question: "Quel est le rôle d'un serveur NTP dans un réseau ?",
        options: ["Gérer les noms de domaine", "Synchroniser l'heure sur les appareils réseau", "Filtrer le spam", "Gérer les licences logicielles"],
        correct: 1
      },
      {
        question: "Qu'est-ce que l'agrégation de liens (Link Aggregation) ?",
        options: ["Une technique de cryptage", "La combinaison de plusieurs liens réseau en un seul", "Un type de routage", "Une méthode de compression de données"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour l'authentification basée sur le port ?",
        options: ["PAP", "CHAP", "802.1X", "Kerberos"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'CIDR' en adressage IP ?",
        options: ["Centralized IP Distribution Registry", "Classless Inter-Domain Routing", "Controlled Internet Data Routing", "Customized IP Delivery Route"],
        correct: 1
      },
      {
        question: "Quel est le rôle d'un load balancer dans un réseau ?",
        options: ["Équilibrer la charge entre plusieurs serveurs", "Gérer les adresses IP", "Filtrer le trafic malveillant", "Stocker les données de configuration"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'SDN' en réseautique moderne ?",
        options: ["Secure Data Network", "Software-Defined Networking", "System Distribution Node", "Synchronized Device Navigation"],
        correct: 1
      },
      {
        question: "Quel protocole est utilisé pour la découverte automatique des voisins sur un réseau IPv6 ?",
        options: ["ARP", "RARP", "NDP", "DHCP"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'VXLAN' ?",
        options: ["Virtual Extended LAN", "Very eXtensive Local Area Network", "Variable Cross-Link Area Network", "Verified eXternal LAN"],
        correct: 0
      },
      {
        question: "Quel est le but principal du protocole EIGRP ?",
        options: ["Crypter les données", "Routage dynamique", "Gestion des adresses IP", "Transfert de fichiers"],
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
      },
      {
        question: "Qu'est-ce que le 'VXLAN' et quel problème résout-il ?",
        options: ["Un protocole de routage", "Un type de firewall", "Une technique de virtualisation de réseau pour étendre les VLANs", "Un protocole de sécurité"],
        correct: 2
      },
      {
        question: "Expliquez le concept de 'Segment Routing' dans le contexte des réseaux SDN.",
        options: ["Une technique de routage source utilisant des instructions de chemin", "Une méthode de routage basée sur les segments de câbles", "Un protocole de sécurisation des segments réseau", "Une méthode de segmentation des paquets"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'P4' dans le contexte des réseaux programmables ?",
        options: ["Un protocole de routage", "Un type de switch", "Un standard de câblage", "Un langage de programmation pour le plan de données des réseaux"],
        correct: 3
      },
      {
        question: "Quel est le rôle du protocole 'LISP' dans les réseaux ?",
        options: ["Programmer des routeurs", "Optimiser les requêtes DNS", "Gérer les listes de contrôle d'accès", "Séparer la localisation et l'identité dans l'adressage IP"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'Network Function Virtualization' (NFV) ?",
        options: ["Un concept remplaçant les équipements réseau physiques par des fonctions virtuelles", "Une technique de virtualisation des serveurs", "Un protocole de sécurité", "Une méthode de routage virtuel"],
        correct: 0
      },
      {
        question: "Expliquez le concept de 'Intent-Based Networking'.",
        options: ["Un type de firewall", "Une méthode de routage intentionnel", "Un réseau basé sur l'intention des utilisateurs", "Une approche où le réseau s'auto-configure basé sur des objectifs de haut niveau"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'Network Service Mesh' ?",
        options: ["Un type de topologie réseau", "Une technique de câblage", "Un framework pour l'orchestration de services réseau dans Kubernetes", "Un protocole de maillage"],
        correct: 2
      },
      {
        question: "Quel est le rôle du protocole 'QUIC' dans les communications réseau ?",
        options: ["Gérer la qualité de service", "Améliorer la performance et la sécurité des communications web", "Accélérer les requêtes DNS", "Optimiser le routage"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'Network Telemetry' ?",
        options: ["Une méthode de cryptage", "Une technique de mesure de distance réseau", "Un processus de collecte et d'analyse de données réseau en temps réel", "Un protocole de gestion à distance"],
        correct: 2
      },
      {
        question: "Expliquez le concept de 'Zero Trust Network'.",
        options: ["Un réseau sans authentification", "Un type de VPN", "Un réseau sans fil", "Un modèle de sécurité qui ne fait confiance à rien par défaut"],
        correct: 3
      },
      {
        question: "Qu'est-ce que le 'Time-Sensitive Networking' (TSN) ?",
        options: ["Un ensemble de standards IEEE pour les réseaux temps réel", "Un protocole de synchronisation horaire", "Une technique de gestion du temps CPU", "Un type de QoS"],
        correct: 0
      },
      {
        question: "Quel est le rôle du 'eBPF' dans la gestion des réseaux modernes ?",
        options: ["Un type de firewall", "Un standard de virtualisation", "Une technologie permettant d'exécuter des programmes personnalisés dans le noyau Linux", "Un protocole de routage"],
        correct: 2
      },
      {
        question: "Qu'est-ce que le 'Network Chaos Engineering' ?",
        options: ["Un type de DDoS", "Une technique de hacking", "Une méthode de conception de réseau", "Une approche pour tester la résilience des réseaux en introduisant des perturbations contrôlées"],
        correct: 3
      },
      {
        question: "Expliquez le concept de 'Programmable Data Plane'.",
        options: ["Un type de SDN", "La capacité de programmer le comportement du plan de données des équipements réseau", "Un plan de données fixe", "Une technique de routage"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'Network Digital Twin' ?",
        options: ["Un type de backup", "Une copie physique d'un réseau", "Un protocole de synchronisation", "Une représentation virtuelle et dynamique d'un réseau physique"],
        correct: 3
      },
      {
        question: "Quel est le rôle du 'gRPC' dans les architectures réseau modernes ?",
        options: ["Un framework RPC haute performance pour la communication inter-services", "Un protocole de routage", "Un type de switch", "Un standard de câblage"],
        correct: 0
      },
      {
        question: "Qu'est-ce que le 'Network Service Header' (NSH) ?",
        options: ["Un type de QoS", "Un en-tête HTTP", "Un protocole pour le chaînage de services réseau", "Une technique de compression"],
        correct: 2
      },
      {
        question: "Expliquez le concept de 'Hybrid Cloud Networking'.",
        options: ["Un type de VPN", "Une approche intégrant les réseaux on-premise et cloud", "Un réseau uniquement dans le cloud", "Une technique de virtualisation"],
        correct: 1
      },
      {
        question: "Qu'est-ce que le 'Data Plane Development Kit' (DPDK) ?",
        options: ["Un outil de conception de réseau", "Un protocole de routage", "Un kit de développement pour applications mobiles", "Un ensemble de bibliothèques pour accélérer le traitement des paquets"],
        correct: 3
      },
      {
        question: "Quel est le rôle du 'OpenConfig' dans la gestion des réseaux ?",
        options: ["Un protocole de routage ouvert", "Un effort de standardisation pour la gestion et la configuration des réseaux", "Un outil de configuration open-source", "Un type de firewall open-source"],
        correct: 1
      }
    ]
  };
  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
}

function generateQuestions(domain, difficulty, count) {
  return Array.from({ length: count }, () => generatorFunctions[domain](difficulty));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = {
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
      shuffleArray(allQuestions);
      const selectedQuestions = allQuestions.slice(0, 10);
      await handleQuizSession(interaction, domain, difficulty, selectedQuestions);
  },
};

async function handleQuizSession(interaction, domain, difficulty, questions) {
  let score = 0;
  const embed = new EmbedBuilder().setColor('#001F93');
  const row = new ActionRowBuilder();

  for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      embed.setTitle(`Quizz ${domain.charAt(0).toUpperCase() + domain.slice(1)} - ${difficulty}`)
           .setDescription(`Question ${i + 1}/${questions.length}: ${question.question}`);

      row.components = question.options.map((option, index) =>
          new ButtonBuilder()
              .setCustomId(`answer_${index}`)
              .setLabel(option)
              .setStyle(ButtonStyle.Primary)
      );

      row.addComponents(
          new ButtonBuilder()
              .setCustomId('stop')
              .setLabel('Arrêter')
              .setStyle(ButtonStyle.Danger)
      );

      await interaction.editReply({ embeds: [embed], components: [row] });

      try {
          const filter = i => i.user.id === interaction.user.id;
          const confirmation = await interaction.channel.awaitMessageComponent({ filter, time: 30000 });

          if (confirmation.customId === 'stop') {
              await interaction.editReply({ content: `Quiz arrêté. Votre score final est ${score}/${i}`, components: [] });
              return;
          }

          const isCorrect = confirmation.customId === `answer_${question.correct}`;
          score += isCorrect ? 1 : 0;
          await confirmation.update({ 
              content: isCorrect ? 'Bonne réponse !' : `Mauvaise réponse. La bonne réponse était : ${question.options[question.correct]}`, 
              components: [] 
          });

          await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
          if (e.name === 'Error [InteractionCollectorError]') {
              await interaction.editReply({ content: 'Pas de réponse après 30 secondes, passage à la question suivante.', components: [] });
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
