# CNPA Enquête — PWA Pack

Ce dossier contient tout le nécessaire pour installer la page sur Android avec l’icône CNPA via **Ajouter à l’écran d’accueil**.

## Contenu
- `Enquete_CNPA_v1.5.6_PWA.html` — votre page
- `manifest.webmanifest` — manifeste PWA (icônes, nom, couleurs)
- `service-worker.js` — service worker minimal (requis pour l’installabilité)
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — icônes

## Déploiement rapide (HTTPS requis)
### Option A — GitHub Pages
1. Créez un dépôt (public) sur GitHub, par ex. `cnpa-enquete`.
2. Glissez-y **tous** les fichiers de ce pack à la racine.
3. Dans *Settings → Pages*, sélectionnez la branche `main` (root), sauvegardez.
4. Ouvrez l’URL fournie par GitHub Pages.
5. Sur Android/Chrome : menu ⋮ → **Installer l’application** (ou **Ajouter à l’écran d’accueil**).

### Option B — Netlify (drag & drop)
1. Allez sur https://app.netlify.com/ et créez un site via **Drag & Drop**.
2. Déposez **tous** les fichiers de ce pack.
3. Ouvrez l’URL du site. Android/Chrome proposera **Installer**.

### Option C — Vercel
1. Créez un projet, importez le dossier tel quel.
2. Déployez. Ouvrez l’URL. Installez l’appli depuis Chrome.

## Notes
- L’URL doit être en **HTTPS** pour que Chrome propose l’installation.
- Le **service worker** doit être servi à la **racine** de l’app (même dossier que la page).
- Le `manifest.webmanifest` est déjà référencé dans la page.
- Le `short_name` dans le manifest est `CNPA`. Modifiez si besoin.

Bon déploiement !
