# Trouve ton artisan

Ce projet est une application web développée avec React, TypeScript et Vite. Elle permet de rechercher et de contacter des artisans en Auvergne Rhône-Alpes.
C'est une application fictive réalisée pour un devoir.

## 🚀 Démo en ligne

Le site est accessible à l'adresse suivante :
[https://lab-lc.alwaysdata.net/trouve-ton-artisan/](https://lab-lc.alwaysdata.net/trouve-ton-artisan/)

---

## 📋 Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm (version 9 ou supérieure recommandée)

---

## 🛠️ Installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd trouve-ton-artisan
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```

---

## ⚙️ Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173) (ou le port indiqué par Vite).

---

## 🏗️ Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

Pour prévisualiser le build localement :

```bash
npm run preview
```

---

## 🧩 Stack technique

- React 19
- TypeScript
- Vite
- Bootstrap 5
- React Hook Form
- EmailJS (envoi de mails)
- FontAwesome (icônes)

---

## 🔒 Sécurité

- Validation des formulaires côté client avec React Hook Form
- Protection contre les failles XSS grâce à React
- Aucune donnée sensible stockée côté client

---

## 📁 Structure du projet

- `src/` : code source principal
- `public/` : fichiers statiques (robots.txt, sitemap.xml, images, etc.)
- `src/components/` : composants React
- `src/styles/` : fichiers SCSS
- `src/@types/` : définitions de types TypeScript

---

© 2025 Trouve ton artisan
