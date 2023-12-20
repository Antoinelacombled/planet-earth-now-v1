import React from "react";
import "./FlagPartners.css";

import Recoft from "../../assets/logoRecoft.png";
import Treemium from "../../assets/logoTreemium.png";
import Eco from "../../assets/logoEco.png";
import Jiboiana from "../../assets/logoJiboiana.png";
import Rockett from "../../assets/logoRockett.png";

function FlagPartners() {
  console.log("test");
  return (
    <section className="flag-partners-section">
      <h2 className="title-flag-partners-section">
        LES PARTENAIRES DU DRAPEAU
      </h2>
      <div className="partners-container">
        <img className="logo-partner" src={Treemium} alt="Logo Treemium" />
        <img className="logo-partner" src={Jiboiana} alt="Logo Jiboiana" />
        <img className="logo-partner" src={Recoft} alt="Logo Recoft" />
        <img className="logo-partner" src={Eco} alt="Logo Eco" />
        <img className="logo-partner" src={Rockett} alt="Logo Rockett" />
      </div>
    </section>
  );
}

export default FlagPartners;
