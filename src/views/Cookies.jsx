import { useTranslation } from "react-i18next";
import "./Cookies.css";

function Cookies() {
  const { t } = useTranslation();

  return (
    <div className="super-container-cookies">
      <div className="cookies-title">Politique de Cookies pour ef1.org</div>
      <h3 className="cookies-subtitle">1. Introduction</h3>
      <div className="cookies-text">
      Le site ef1.org utilise des cookies afin d'optimiser l'expérience utilisateur et d'analyser le trafic de notre site. Cette politique vise à expliquer comment et pourquoi nous utilisons ces technologies.
      </div>
      <h3 className="cookies-subtitle">2. Définition des Cookies</h3>
      <div className="cookies-text">Les cookies sont de petits fichiers texte stockés sur votre appareil lors de la visite de notre site. Ils permettent de mémoriser vos préférences et actions pour une période déterminée, facilitant ainsi votre navigation en évitant de ressaisir certaines informations lors de visites ultérieures.
      </div>
      <h3 className="cookies-subtitle">3. Utilisation des Cookies</h3>
      <div className="cookies-text">
        ef1.org utilise Google Analytics pour collecter des informations anonymes sur l'interaction des utilisateurs avec notre site. Ces données nous aident à améliorer notre plateforme en comprenant mieux les besoins et comportements des visiteurs.
        </div>
        <h3 className="cookies-subtitle"> 4. Consentement</h3>
        <div className="cookies-text">En utilisant ef1.org, vous consentez à l'utilisation de cookies conformément à cette politique. En cas de désaccord, il vous est possible refuser nos cookies, cela n'affectera pas votre navigation sur le site web.</div>
        <h3 className="cookies-subtitle"> 5. Révisions de la Politique</h3>
        <div className="cookies-text">Cette politique de cookies peut être révisée périodiquement. Tout changement sera communiqué sur cette page.</div>
        <h3 className="cookies-subtitle"> 6. Nous Contacter</h3>
        <div className="cookies-text">Pour toute question relative à notre utilisation des cookies, n'hésitez pas à nous contacter à l'adresse suivante : contact@planetearthnow.com.</div>
    </div>
  
  );
}

export default Cookies;
