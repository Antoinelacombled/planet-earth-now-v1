import React from "react";
import "./FlagPartners.css";

import Recoft from "../../assets/logoRecoft.png";
import Treemium from "../../assets/logoTreemium.png";
import Eco from "../../assets/logoEco.png";
import Jiboiana from "../../assets/logoJiboiana.png";
import Rockett from "../../assets/logoRockett.png";

function FlagPartners() {
  return (
    <section className="flag-partners-section">
      <h2 className="title-flag-partners-section">
        LES PARTENAIRES DU DRAPEAU
      </h2>
      <div className="partners-container">
        <a
          href="https://www.treemium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Treemium} alt="Logo Treemium" />
        </a>
        <a
          href="https://www.recoftc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Recoft} alt="Logo Recoft" />
        </a>
        <a
          href="https://association-jiboiana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Jiboiana} alt="Logo Jiboiana" />
        </a>
        <a
          href="https://www.eco-prisme.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Eco} alt="Logo Eco" />
        </a>
        <a
          href="https://therocketfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Rockett} alt="Logo Rockett" />
        </a>
      </div>
    </section>
  );
}

export default FlagPartners;
