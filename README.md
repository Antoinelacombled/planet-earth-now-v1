# ef1.org

Le projet ef1.org est une application web reactjs/ développée pour présenter l'activité de ef1.org le projet de l'association Planet Earth Now. Il s'agit d'un site vitrine multi-page avec quelques fonctionnalités intéractives.

# Fonctionalités principales 

- Présentation de l'identité de EF1
- Formulaire de contact avec EmailJs
- Présentation des partenaires via des carousels
- Téléchargement du drapeau EF1

  # Technologies utilisées
 - React.js
 - Next.js (wip)
 - Strapi (Headless CMS)
 - Email.js
 - Swiper (pour les carousels)
 - i18n (pour les traductions)
 - CSS et SASS pour le style


Clonez le dépot : 
  Git clone [URL du dépot]

Installez les dépendances : 
  Yarn install

Lancer le projet : 
  Yarn dev


 # Structure du projet
src/components : Contient tous les composants React.
src/assets : Ressources statiques (images, SVG, etc.).
src/pages : Pages de l'application.
src/utils : Fonctions utilitaires.
public : Fichiers publics comme l'index.html.
i18n.js : Configuration pour la traduction.
strapi : Dossier contenant les configurations du CMS Strapi.

  # Contribution
Pour contribuer au projet, veuillez suivre les étapes suivantes :

Fork le projet.
Créez une nouvelle branche pour votre feature (git checkout -b feature/NouvelleFeature).
Faites vos changements et committez-les (git commit -am 'Ajout de NouvelleFeature').
Push vers la branche (git push origin feature/NouvelleFeature).
Ouvrez une Pull Request.

Développé avec vitejs : 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
