# 101-kali-marceau-

Aide-mémoire web des principales commandes et outils de **Kali Linux**, pour le
pentest **éthique et autorisé**.

## Utilisation

Ouvrez simplement `index.html` dans un navigateur — c'est un site statique
(aucune dépendance, aucun serveur requis).

```bash
xdg-open index.html   # Linux
```

## Contenu

Deux vues :

- **⭐ Aide-mémoire** — commandes essentielles triées à la main par catégorie.
- **📚 Tous les outils (820)** — catalogue complet des outils Kali, importé du
  dépôt officiel `kali-tools` et classé par catégorie officielle
  (métapaquets `kali-tools-*`). Chaque outil affiche sa description, sa
  commande d'installation et ses commandes (binaires).

Fonctionnalités :

- Recherche instantanée par outil, tâche ou commande (dans les deux vues)
- Filtres par catégorie
- Bouton « Copier » sur chaque commande + « Tout copier »
- Fichiers `.txt` téléchargeables (aide-mémoire et catalogue complet)
- Thème nuit (noir) / jour (gris mat), commandes en orange

## Structure

```
index.html         Page principale
assets/style.css   Styles
assets/data.js     Aide-mémoire (commandes triées à la main)
assets/catalog.js  Catalogue complet (820 outils, source kali-tools)
assets/app.js      Recherche, filtres, copie, bascule de vue, thème
commandes.txt      Aide-mémoire au format texte
outils-kali.txt    Catalogue complet au format texte
```

## ⚠️ Avertissement légal

Ces outils ne doivent être utilisés que sur des systèmes que vous possédez ou
pour lesquels vous disposez d'une **autorisation écrite explicite**. Le test
d'intrusion non autorisé est illégal dans la plupart des juridictions. Ce
projet est fourni à des fins **éducatives**.
