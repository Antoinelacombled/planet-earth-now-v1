import "./Faq.css";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <div className="super-container-faq">
      <div className="faq-title">FAQ</div>
      <div className="faq-text">
        <h2>A QUELLES OCCASIONS UTILISER LE DRAPEAU ?</h2> Le drapeau a vocation
        à être brandi lors des manifestations, des interventions publiques et
        relayé sur les réseaux sociaux. Nous souhaitons le voir accroché aux
        fenêtres, fixé à des balcons, hissé aux mâts …
        <h2>COMMENT OBTENIR LE DRAPEAU POUR MON ÉVÉNEMENT ?</h2> Nous pouvons
        vous donner un ou plusieurs drapeaux en fonction de votre événement.
        Contactez-nous pour en savoir plus sur la manière dont nous pouvons vous
        accompagner : contact@earthflag1.org
        <h2> OÙ PUIS-JE ACHETER LE DRAPEAU ?</h2>
        Bonne question ! Mais en fait, embarrassante !!! Nous sommes dans les
        startings blocks ; la liste des points de vente sera prochainement en
        ligne. <h2>OÙ FABRIQUER LE DRAPEAU ?</h2> Nous avons identifié en France
        ces sept fournisseurs qui utilisent le polyester recyclé (liste non
        exhaustive) :{" "}
        <a className="link-faq" href="https://www.imprimer-vert.fr/">
          IMPRIMER VERT
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.doublet.fr/?gad_source=1">
          DOUBLET
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.drapeauxunic.fr/">
          DRAPEAUX UNIC
        </a>
        ,{" "}
        <a
          className="link-faq"
          href="https://www.aviso-drapeaux.com/1688-mats-et-supports?gad_source=1"
        >
          MATS DESCHAMPS
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.varinard.com/fr">
          SOCIÉTÉ VARINARD.
        </a>{" "}
        <a className="link-faq" href="https://atelier-lemee.com/entreprise/">
          LE MÉE{" "}
        </a>{" "}
        et{" "}
        <a className="link-faq" href="https://www.macapflag.com/">
          MACAP
        </a>{" "}
        sont ceux que nous utilisons actuellement.
        <h2>
          LE DRAPEAU EST-IL PROTÈGÉ PAR DES DROITS DE PROPRIÉTÉ INTELLECTUELLE ?
        </h2>
        Le drapeau a été pensé pour « appartenir à tous », c’est-à-dire à être
        largement diffusé et brandi par l’ensemble des citoyen-nes du monde,
        sans conditions ou demandes d’autorisations préalables. Toutefois,
        chaque personne s’engage à respecter le drapeau dans son intégrité et
        dans l’esprit de la défense de l’environnement.
        <h2> PUIS-JE MODIFIER LE DRAPEAU ? </h2>Vous pouvez personnaliser le
        drapeau en utilisant l’intérieur du cercle central.
        <h2>A VOTRE TOUR, AVEZ-VOUS DES QUESTIONS ?</h2>
        Envoyez-nous vos questions {""}
        <Link to={"/"} className="link-faq">
          via le formulaire de contact et nous vous répondrons dans les
          meilleurs délais.
        </Link>
      </div>
    </div>
  );
}

export default Faq;
