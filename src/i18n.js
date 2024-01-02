import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // OurHouseBurns Section
        OurHouseBurnsTitle: "OUR HOUSE IS ON FIRE",

        // BannerUrgency Section
        BannerUrgencyTitle: "CLIMATE EMERGENCY",

        // Header Section
        GetTheFlagHeader: "GETTING THE FLAG",
        PrinciplesHeader: "THE PRINCIPLES",
        EventsHeader: "EVENTS",
        ContactHeader: "CONTACT",
        FaqHeader: "FAQ",

        // BannerUnity Section
        BannerUnityTitleOne: "WE NEED A STRONG",
        BannerUnityTitleTwo: "SYMBOL OF UNITY",

        // Flag Section
        FlagSectionTitle:
          "The aim of this banner is to remind people of the dangers of climate change and to boost the projects and actions of environmental campaigners.",

        // Banner Mobilize
        BannerMobilizeTitle: "LET'S GET INVOLVED",

        // Manifesto Section
        ManifestoSectionTitleOne: "« CIVIL ACTION IS",
        ManifestoSectionTitleTwo: "THE ONLY REAL ",
        ManifestoSectionTitleThree: "ALTERNATIVE TO",
        ManifestoSectionTitleFour: "RESOLVE THE CLIMATE »",
        ManifestoBook: "Climate Change... and you?",

        // Action Quote Section
        ActionQuoteSectionTitle:
          "« IT'S ALL ABOUT PUTTING THE PEOPLE WHO HAVE THE POWER TO CHANGE THINGS AGAINST THE WALL »",

        // GetTheFlag Section
        GetTheFlagTitle: "HOW TO GET THE FLAG?",

        GetTheFlagTitleCardOne: "AT CLIMATE MARCHES",
        GetTheFlagTextCardOne:
          "The flag is distributed to participants at citizens' marches in defence of the environment.",
        GetTheFlagEventCardOne: "See you at forthcoming events.",

        GetTheFlagTitleCardTwo: "FOR",
        GetTheFlagTitleCardTwoBis: "INSTITUTIONS",
        GetTheFlagTextCardTwo:
          "Thanks to donations received by the association PLANET EARTH NOW, flags can be offered to town halls and schools.",
        GetTheFlagContactCardTwo: "Please do not hesitate to contact us.",

        GetTheFlagTitleCardThree: "AS PART OF YOUR PROJECTS",
        GetTheFlagTextCardThree:
          "Flags can be offered to you as part of your association's projects, events or conferences. ",
        GetTheFlagContactCardThree: "Please do not hesitate to contact us.",

        GetTheFlagTitleCardFour: "BY CONTACTING A MANUFACTURER",
        GetTheFlagTextCardFour:
          "Contact the supplier of your choice to manufacture the flag after downloading the file here below.",
        GetTheFlagContactCardFour:
          "We have selected a few suppliers in France.",

        GetTheFlagTitleCardFive: "BY MAKING IT YOURSELF",
        GetTheFlagTextCardFive:
          "You can download the file with the climate emergency flag here below to print out and create it yourself or share with others.",

        GetTheFlagDownload: "DOWNLOAD THE FLAG",

        //FlagPrinciples Section
        FlagPrinciplesTitle: "THE PRINCIPLES OF THE FLAG",
        FlagPrinciplesTextOne: "It belongs to all citizens of the world.",
        FlagPrinciplesTextTwo:
          "It is neutral with respect to all political and denominational formations as well as all interest or influence groups.",
        FlagPrinciplesTextThree:
          "It is eco-designed and if possible produced  locally.",
        FlagPrinciplesTextFour:
          "It can be customised to suit your needs and projects.",

        // WhyFlag Section
        WhyFlagTitle: "WHY THIS FLAG?",
        WhyFlagText:
          "THE FLAG OF THE CLIMATE EMERGENCY IS THE EMBLEM OF THE CONSERVATION OF OUR EARTH, ITS BIODIVERSITY AND ITS OCEANS.",
        WhyFlagTextTwo:
          "IT IS THE SYMBOL OF THE RISING AWARENESS IN FAVOUR OF THE ENVIRONMENT.",
        WhyFlagTextThree:
          "COUNTRIES HAVE THEIR FLAG, NOW THE INHABITANTS OF THE EARTH HAVE THEIRS.",
        WhyFlagTextFour: "IT IS THE AMPLIFIER OF WHAT WE WANT TO PROCLAIM.",

        // CustomTheFlag Section
        CustomTheFlagTitle: "CUSTOM THE FLAG",

        // Quotation Section
        QuotationSectionOne:
          "« THE WORLD WILL NOT BE DESTROYED BY THOSE WHO DO EVIL, BUT BY THOSE WHO WATCH THEM WITHOUT DOING ANYTHING »",
        QuotationSectionTwo: "« NOW TAKE TO THE STREETS AND MAKE ME DO IT! »",
        QuotationSectionThree:
          "« TODAY MORE THAN EVER, THE FUTURE OF THE EARTH, OUR FUTURE, IS IN OUR HANDS »",
        QuotationSectionAuthor: "on the affair of the century,",
        QuotationSectionAuthorBis: "in reference to F.D. Roosevelt",

        //EVENTS
        EventTitle: "EVENTS",

        // FlagPartners Section
        FlagPartnerTitle: "OUR FLAG PARTNERS",

        // Nationalité
        Nationality: "- Nationality ?",
        Terrien: "- Inhabitant of Earth !",
        You: "- And you ?",

        // Footer
        Legal: "LEGAL INFORMATIONS",
        Confident: "OUR PRIVACY POLICY",
        Home: "HOME",

        // FAQ
        FaqTitleOne: "WHEN CAN THE FLAG BE USED?",
        FaqTitleTwo: "HOW CAN I GET THE FLAG FOR MY EVENT?",
        FaqTitleThree: "WHERE CAN I BUY THE FLAG?",
        FaqTitleFour: "WHERE TO PRINT THE FLAG?",
        FaqTitleFive: "IS THE FLAG PROTECTED BY INTELLECTUAL PROPERTY RIGHTS?",
        FaqTitleSix: "CAN I MODIFY THE FLAG?",
        FaqTitleSeven: "NOW IT’S YOUR TURN; DO YOU HAVE ANY QUESTIONS?",

        FaqTextOne:
          "The flag is intended to be waved at demonstrations, public speeches and relayed on social networks. We would like to see it hung from windows, fixed to balconies, hoisted on flagpoles, etc.",

        FaqTextTwo:
          "We can provide you with one or several flags depending on your event. Contact us to find out more about how we can help you: contact@earthflag1.org",
        FaqTextThree:
          "Good question ! But actually, an embarrassing one! We're in the starting blocks; the list of sales outlets will soon be online.",
        FaqTextFour:
          "We have identified the following seven suppliers in France who use recycled polyester (non-exhaustive list):",
        FaqTextFourBis: "are the ones we currently use.",
        FaqTextFive:
          "The flag was designed to belong to everyone, i.e. to be widely distributed and brandished by all citizens of the world, without any conditions or requests for prior authorisation. However, everyone undertakes to respect the flag in its integrity and in the spirit of defending the environment.",
        FaqTextSix:
          "You can customise the flag using the inside of the central circle.",
        FaqTextSeven: "Please, send us your questions using ",
        FaqTextSevenBis:
          "the contact form and we'll get back to you as soon as possible.",

        //LEGAL MENTION
        LegalTitle: "LEGAL INFORMATION",
        Publisher:
          "PUBLISHER PLANET EARTH NOW, an Association declared in the French national register of associations since 07 August 2020 under number W751257593, domiciled at 15 rue Saint-Dominique 75007 in Paris and with the SIREN number is 889954152 Contact: contact@earthflag1.org Director of publication: Mr Daniel Malingue VAT: FR33889954152 HOST Company name: GoDaddy.com, LLC Address: 2155 E Warner Rd, Tempe, Arizona 85284 United States Contact: ",
      },
    },
    fr: {
      translation: {
        // OurHouseBurns Section
        OurHouseBurnsTitle: "NOTRE MAISON BRÛLE",

        // BannerUrgency Section
        BannerUrgencyTitle: "URGENCE CLIMATIQUE",

        // Header Section
        GetTheFlagHeader: "OBTENIR LE DRAPEAU",
        PrinciplesHeader: "LES PRINCIPES",
        EventsHeader: "LES ÉVÉNEMENTS",
        ContactHeader: "CONTACT",
        FaqHeader: "FAQ",

        // BannerUnity Section
        BannerUnityTitleOne: "NOUS AVONS BESOIN",
        BannerUnityTitleTwo: "D'UN SYMBOLE D'UNITÉ FORT",

        // Flag Section
        FlagSectionTitle:
          "Cet étendard a pour but de rappeler les dangers des changements climatiques et de porter les projets et les actions des défenseurs de l'environnement, plus haut et plus fort.",

        // Banner Mobilize
        BannerMobilizeTitle: "MOBILISONS-NOUS",

        // Manifesto Section
        ManifestoSectionTitleOne: "« L'ACTION CIVILE EST",
        ManifestoSectionTitleTwo: "LA SEULE VÉRITABLE",
        ManifestoSectionTitleThree: "ALTERNATIVE POUR AGIR",
        ManifestoSectionTitleFour: "SUR LE CLIMAT »",
        ManifestoBook: "Le climat change... et vous ?",

        // ActionQuote Section
        ActionQuoteSectionTitle:
          " « IL S’AGIT DE METTRE AU PIED DU MUR LES PERSONNES QUI ONT LE POUVOIR DE FAIRE CHANGER LES CHOSES »",

        // GetTheFlag Section
        GetTheFlagTitle: "COMMENT OBTENIR LE DRAPEAU ?",

        GetTheFlagTitleCardOne: "AUX MARCHES POUR LE CLIMAT",
        GetTheFlagTextCardOne:
          "Le drapeau est distribué aux participant-es de marches citoyennes pour la défense de l'environnement.",
        GetTheFlagEventCardOne: "Rendez-vous aux prochains événements.",

        GetTheFlagTitleCardTwo: "POUR LES",
        GetTheFlagTitleCardTwoBis: "INSTITUTIONS",
        GetTheFlagTextCardTwo:
          "Grâce aux dons reçus par l'association PLANET EARTH NOW, des drapeaux pourront être offerts aux mairies et aux écoles.",
        GetTheFlagContactCardTwo: "N'hésitez pas à nous contacter.",

        GetTheFlagTitleCardThree: "DANS LE CADRE DE VOS PROJETS",
        GetTheFlagTextCardThree:
          "Dans le cadre de votre association et de vos projets, événements ou conférences, des drapeaux pourront vous être offerts.",
        GetTheFlagContactCardThree: "N'hésitez pas à nous contacter.",

        GetTheFlagTitleCardFour: "EN CONTACTANT UN FABRICANT",
        GetTheFlagTextCardFour:
          "Contactez le fournisseur de votre choix pour la fabrication du drapeau en téléchargeant le fichier ci-dessous.",
        GetTheFlagContactCardFour:
          "Nous vous en avons séléctionné quelques-uns.",

        GetTheFlagTitleCardFive: "EN LE FABRIQUANT VOUS-MÊME",
        GetTheFlagTextCardFive:
          "Vous pouvez télécharger ci-dessous le fichier du drapeau de l'urgence climatique afin de l'imprimer pour le fabriquer vous-même ou le partager autour de vous.",

        GetTheFlagDownload: "TÉLÉCHARGER LE DRAPEAU",

        // FlagPrinciples Section
        FlagPrinciplesTitle: "LES PRINCIPES DU DRAPEAU",
        FlagPrinciplesTextOne:
          "Il appartient à toutes les citoyennes et tous les citoyens du monde.",
        FlagPrinciplesTextTwo:
          "Il est neutre vis-à-vis de toute formation politique et confessionnelle ainsi que de tout groupe d'intérêt d'influence",
        FlagPrinciplesTextThree:
          "Il est écoconçu et autant que possible produit localement.",
        FlagPrinciplesTextFour:
          "Il peut être personnalisé à votre convenance et selon vos projets.",

        // WhyFlag Section
        WhyFlagTitle: "POURQUOI CE DRAPEAU ?",
        WhyFlagText:
          "LE DRAPEAU DE L'URGENCE CLIMATIQUE EST L'EMBLÈME DE LA SAUVEGARDE DE NOTRE TERRE, SA BIODIVERSITÉ, SES OCÉANS.",
        WhyFlagTextTwo:
          "IL EST LE SYMBOLE DE L'ÉVEIL DES CONSCIENCES EN FAVEUR DE L'ENVIRONNEMENT.",
        WhyFlagTextThree:
          "LES PAYS ONT LEUR DRAPEAU, LES TERRIENS ONT DÉSORMAIS LE LEUR.",
        WhyFlagTextFour:
          "IL EST LE PORTE-VOIX DE CE QUE NOUS VOULONS PROCLAMER.",

        // CustomTheFlag Section
        CustomTheFlagTitle: "PERSONNALISEZ LE DRAPEAU",

        // Quotation Section
        QuotationSectionOne:
          "« LE MONDE NE SERA PAS DÉTRUIT PAR LES GENS QUI FONT LE MAL, MAIS PAR CEUX QUI LES REGARDENT SANS RIEN FAIRE »",
        QuotationSectionTwo:
          "« MAINTENANT DESCENDEZ DANS LA RUE ET OBLIGEZ-MOI À LE FAIRE »",
        QuotationSectionThree:
          "« AUJOURD'HUI PLUS QUE JAMAIS, L'AVENIR DE LA TERRE, NOTRE AVENIR, EST ENTRE NOS MAINS »",
        QuotationSectionAuthor: "concernant l'affaire du siècle,",
        QuotationSectionAuthorBis: "en référence à F.D Roosevelt",

        //EVENTS
        EventTitle: "LES ÉVÉNEMENTS",

        // FlagPartners Section
        FlagPartnerTitle: "LES PARTENAIRES DU DRAPEAU",

        // Nationalité
        Nationality: "- Nationalité ?",
        Terrien: "- Terrien !",
        You: "- Et vous ?",

        // Footer
        Legal: "MENTIONS LÉGALES",
        Confident: "POLITIQUE DE CONFIDENTIALITÉ",
        Home: "ACCUEIL",

        // FAQ
        FaqTitleOne: "À QUELLES OCCASIONS UTILISER LE DRAPEAU ?",
        FaqTitleTwo: "COMMENT OBTENIR LE DRAPEAU POUR MON ÉVÉNEMENT ?",
        FaqTitleThree: "OÙ PUIS-JE ACHETER LE DRAPEAU ?",
        FaqTitleFour: "OÙ FABRIQUER LE DRAPEAU ?",
        FaqTitleFive:
          "LE DRAPEAU EST-IL PROTÈGE PAR DES DROITS DE PROPRIÉTÉ INTELLECTUELLE ?",
        FaqTitleSix: "PUIS-JE MODIFIER LE DRAPEAU ?",
        FaqTitleSeven: "A VOTRE TOUR, AVEZ-VOUS DES QUESTIONS ?",

        FaqTextOne:
          "Le drapeau a vocation à être brandi lors des manifestations, des interventions publiques et relayé sur les réseaux sociaux. Nous souhaitons le voir accroché aux fenêtres, fixé à des balcons, hissé aux mâts …",

        FaqTextTwo:
          "Nous pouvons vous donner un ou plusieurs drapeaux en fonction de votre événement. Contactez-nous pour en savoir plus sur la manière dont nous pouvons vous accompagner : contact@earthflag1.org",
        FaqTextThree:
          "Bonne question ! Mais en fait, embarrassante !!! Nous sommes dans les startings blocks ; la liste des points de vente sera prochainement en ligne.",
        FaqTextFour:
          "Nous avons identifié en France ces sept fournisseurs qui utilisent le polyester recyclé (liste non exhaustive) :",
        FaqTextFourBis: " sont ceux que nous utilisons actuellement.",
        FaqTextFive:
          "Le drapeau a été pensé pour « appartenir à tous », c’est-à-dire à être largement diffusé et brandi par l’ensemble des citoyen-nes du monde, sans conditions ou demandes d’autorisations préalables. Toutefois, chaque personne s’engage à respecter le drapeau dans son intégrité et dans l’esprit de la défense de l’environnement.",
        FaqTextSix:
          "Vous pouvez personnaliser le drapeau en utilisant l’intérieur du cercle central.",
        FaqTextSeven: "Envoyez-nous vos questions ",
        FaqTextSevenBis:
          "via le formulaire de contact et nous vous répondrons dans les meilleurs délais.",

        //LEGAL MENTION
        LegalTitle: "MENTIONS LÉGALES",
        Publisher:
          "ÉDITEUR PLANET EARTH NOW, Association déclarée au répertoire nationale des associations depuis le 07 août 2020 sous le numéro W751257593, domiciliée 15 rue Saint-Dominique 75007 à Paris et dont le numéro SIREN est 889954152 Contact : contact@earthflag1.org Directeur de la publication : Monsieur Daniel Malingue TVA : FR33889954152 HÉBERGEUR Raison sociale : GoDaddy.com, LLC Adresse : 2155 E Warner Rd, Tempe, Arizona 85284 États-Unis Contact : ",
      },
    },
  },
  lng: "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
