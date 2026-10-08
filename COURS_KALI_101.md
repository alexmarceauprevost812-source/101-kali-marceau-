# KALI LINUX 101 — Débuter en cybersécurité 🐉

**Projet :** 101-kali-marceau-  
**Niveau :** grand débutant  
**Langue :** français  
**Environnement :** Kali Linux, terminal Bash/Zsh et Python 3  
**Objectif :** comprendre Linux, les réseaux et les bases des audits défensifs, grâce à un laboratoire local.

> **Règle d'or :** travaille sur tes propres appareils, sur \`127.0.0.1\` (ton ordinateur) ou sur un environnement de laboratoire dont tu as l'autorisation explicite. Ne tente pas d'accéder à des comptes ou réseaux d'autres personnes. Apprendre la cybersécurité commence par connaître les limites d'une autorisation.

## Programme des 10 chapitres

| Chapitre | Sujet | Compétence à obtenir |
| --- | --- | --- |
| 1 | Découvrir Kali Linux | Identifier son système et comprendre le terminal |
| 2 | Les commandes Linux | Se déplacer et gérer des fichiers sans risque |
| 3 | Fichiers, permissions, processus | Lire les permissions et surveiller son PC |
| 4 | Mettre Kali à jour | Comprendre APT et installer des outils officiels |
| 5 | Comprendre le réseau | Reconnaître IP, port, routeur, TCP, DNS |
| 6 | Observer son propre réseau local | Lire ses interfaces et ses services |
| 7 | Nmap en laboratoire | Examiner un service ouvert sur \`127.0.0.1\` |
| 8 | Python pour débuter | Écrire un script de vérification de l'intégrité |
| 9 | Journaux et bonnes pratiques | Interpréter des événements et se protéger |
| 10 | Projet final | Documenter l'audit défensif de son PC |

---

## Chapitre 1 — Découvrir Kali Linux

**Kali Linux** est une distribution basée sur Debian, pensée pour la sécurité informatique. Elle contient des outils pour examiner des systèmes et mener des audits autorisés. Pas besoin de les utiliser tous : apprendre Linux d'abord rendra la suite beaucoup plus simple.

### Exercice 1 : faire connaissance avec le terminal

Ouvre le terminal puis exécute ces commandes, **une à la fois** :

\`\`\`bash
whoami
pwd
cat /etc/os-release
uname -r
date
\`\`\`

| Commande | Ce qu'elle affiche |
| --- | --- |
| \`whoami\` | Ton utilisateur Linux |
| \`pwd\` | Ton dossier actuel |
| \`cat /etc/os-release\` | Le nom et la version du système |
| \`uname -r\` | La version du noyau |
| \`date\` | La date et l'heure du PC |

**À retenir :** \`sudo\` sert à lancer une commande avec des privilèges élevés. Ne l'utilise que lorsque tu comprends ce que fait la commande.

**Mini-défi :** peux-tu reconnaître ton utilisateur, ton système et ton dossier personnel ?

## Chapitre 2 — Naviguer dans Linux

\`\`\`bash
cd ~
mkdir -p kali101/chapitre2
cd kali101/chapitre2
pwd
printf 'Bonjour Kali 101\n' > note.txt
ls -la
cat note.txt
cp note.txt copie.txt
\`\`\`

**À retenir :** \`cd\` change de dossier, \`mkdir\` le crée, \`ls\` liste les fichiers, \`cat\` affiche du texte et \`cp\` copie un fichier.

**Mini-défi :** ajoute une deuxième ligne à \`note.txt\` avec \`printf 'Je découvre Linux\n' >> note.txt\`. Quel est le rôle de \`>>\` ?

## Chapitre 3 — Permissions et processus

\`\`\`bash
cd ~/kali101/chapitre2
ls -l note.txt
stat note.txt
ps -u "$USER"
df -h
free -h
\`\`\`

Les caractères \`r\`, \`w\` et \`x\` représentent la lecture, l'écriture et l'exécution. \`ps\` montre des processus, \`df\` donne l'utilisation du disque et \`free\` la mémoire.

**Mini-défi :** repère la taille de \`note.txt\` et son propriétaire. Ne modifie pas les permissions des fichiers système.

## Chapitre 4 — Mettre Kali à jour

Avant de modifier le système, sauvegarde ton travail et vérifie ta connexion.

\`\`\`bash
sudo apt update
apt list --upgradable
\`\`\`

Pour appliquer les mises à jour, après avoir pris connaissance des paquets susceptibles d'être modifiés ou supprimés :

\`\`\`bash
sudo apt full-upgrade
\`\`\`

N'installe pas automatiquement tous les outils de Kali : commence par ceux dont tu as réellement besoin.

**Mini-défi :** quelle différence entre \`apt update\` (rafraîchir les listes) et \`apt full-upgrade\` (mettre à niveau les logiciels) ?

**Référence officielle :** https://www.kali.org/docs/general-use/updating-kali/

## Chapitre 5 — Comprendre un réseau

Un **appareil** peut avoir une adresse IP. Un **port** permet d'identifier un service réseau. **DNS** traduit des noms de domaine en adresses. Un **routeur** relie plusieurs réseaux.

- \`127.0.0.1\` : boucle locale, c'est-à-dire ton ordinateur.
- TCP : protocole orienté connexion, utilisé par de nombreux services.
- HTTP : protocole utilisé pour les pages web.
- Port 8000 : souvent utilisé par des serveurs de développement locaux.

Teste uniquement ta boucle locale :

\`\`\`bash
ping -c 3 127.0.0.1
\`\`\`

**Mini-défi :** explique avec tes mots la différence entre une adresse IP et un port.

## Chapitre 6 — Observer son ordinateur

\`\`\`bash
ip -brief address
ip route
nmcli device status
ss -ltn
\`\`\`

- \`ip -brief address\` montre les interfaces et adresses de ton PC.
- \`ip route\` montre les routes configurées sur **ton** PC.
- \`nmcli device status\` montre l'état de ses interfaces réseau.
- \`ss -ltn\` affiche les sockets TCP en écoute sur ton PC.

**Mini-défi :** repère ton interface Wi-Fi ou Ethernet et distingue-la de \`lo\`, l'interface de boucle locale.

## Chapitre 7 — Premier laboratoire Nmap, uniquement en local

**Objectif :** comprendre pourquoi un port apparaît ouvert quand un service est lancé.

Dans le premier terminal :

\`\`\`bash
mkdir -p ~/kali101/site
printf '<h1>Mon laboratoire Kali 101</h1>\n' > ~/kali101/site/index.html
cd ~/kali101/site
python3 -m http.server 8000 --bind 127.0.0.1
\`\`\`

Laisse ce premier terminal ouvert. Dans un **deuxième terminal** :

\`\`\`bash
curl -I http://127.0.0.1:8000
command -v nmap
nmap -p 8000 127.0.0.1
\`\`\`

Si la commande \`nmap\` n'existe pas, installe-la depuis les dépôts Kali avec \`sudo apt update\` puis \`sudo apt install nmap\`.

Tu devrais observer que ton serveur répond et que le port **8000** est accessible. Reviens au premier terminal et appuie sur **Ctrl+C** pour arrêter le serveur. Tu peux refaire le test sur \`127.0.0.1\` pour comparer.

**Interprétation :** \`open\` indique qu'un service accepte des connexions sur ce port. Cela ne signifie **pas** qu'il existe une vulnérabilité.

**Règle :** ne remplace pas \`127.0.0.1\` par une adresse d'appareil ou de service sans autorisation explicite.

**Référence officielle :** https://nmap.org/book/

## Chapitre 8 — Python : vérifier l'intégrité d'un fichier

Crée un fichier \`~/kali101/sha256.py\` contenant :

\`\`\`python
from pathlib import Path
import hashlib

fichier = Path.home() / "kali101" / "chapitre2" / "note.txt"

if not fichier.is_file():
    print("Fichier introuvable :", fichier)
else:
    empreinte = hashlib.sha256(fichier.read_bytes()).hexdigest()
    print("Fichier :", fichier)
    print("SHA-256 :", empreinte)
\`\`\`

Exécute :

\`\`\`bash
python3 ~/kali101/sha256.py
\`\`\`

L'empreinte SHA-256 aide à détecter les changements d'un fichier. Modifie volontairement \`note.txt\` et relance le programme : tu verras une empreinte différente.

**Mini-défi :** note les deux empreintes dans ton carnet de laboratoire.

## Chapitre 9 — Journaux et bonnes pratiques de sécurité

Voici comment lire les informations de ton système :

\`\`\`bash
journalctl -b -n 20 --no-pager
systemctl --failed
\`\`\`

Certaines informations demandent des permissions supplémentaires. Ne copie pas publiquement les journaux complets : ils peuvent contenir des identifiants d'appareil, noms d'utilisateur ou autres données privées.

Bonnes pratiques : mises à jour régulières, mots de passe uniques, authentification multifacteur, sauvegardes, logiciels provenant de sources fiables et respect des autorisations.

**Mini-défi :** note un service qui fonctionne et explique ce que signifie une erreur dans un journal, sans tenter de contourner une protection.

## Chapitre 10 — Ton premier rapport technique

Crée \`~/kali101/RAPPORT.md\` et réponds aux questions ci-dessous :

\`\`\`markdown
# Rapport Kali Linux 101

Date :
Nom du labo : Mon ordinateur personnel
Périmètre autorisé : 127.0.0.1

## Système
- Distribution :
- Utilisateur :
- Version du noyau :

## Réseau
- Interface locale :
- Port de laboratoire testé :
- Service de laboratoire :

## Contrôles
- Mise à jour vérifiée : oui/non
- Journaux consultés : oui/non
- Empreinte SHA-256 calculée : oui/non

## Conclusion
- Ce que j'ai appris :
- Ce que je veux apprendre ensuite :
\`\`\`

**Projet réussi si tu sais :**
1. utiliser une dizaine de commandes Linux sans copier aveuglément;
2. expliquer IP, port, service et boucle locale;
3. démarrer/arrêter un serveur web local;
4. reconnaître ce que montre une observation Nmap sur \`127.0.0.1\`;
5. rédiger un petit compte rendu reproductible.

---

## Quiz de fin de cours

1. Que montre \`whoami\` ?
2. Pourquoi utilise-t-on \`127.0.0.1\` dans nos exercices ?
3. Quelle est la différence entre un port ouvert et une vulnérabilité ?
4. Pourquoi lire les modifications proposées par \`apt full-upgrade\` ?
5. Comment une empreinte SHA-256 aide-t-elle à vérifier un fichier ?

**Réponses :** 1. L'utilisateur actuel. 2. Pour travailler exclusivement sur son propre ordinateur. 3. Un port ouvert montre qu'un service écoute; il ne prouve pas de faille. 4. Pour comprendre les installations, mises à jour et suppressions possibles. 5. Une différence d'empreinte signale que les données ont changé (ou que les données comparées sont différentes).

## Pour continuer

- Documentation Kali : https://www.kali.org/docs/
- Présentation officielle : https://www.kali.org/docs/introduction/what-is-kali-linux/
- Mises à jour : https://www.kali.org/docs/general-use/updating-kali/
- Guide officiel Nmap : https://nmap.org/book/

**Étape suivante :** passer à un cours intermédiaire d'administration Linux, de diagnostic réseau et d'analyse défensive en environnement de laboratoire autorisé.
