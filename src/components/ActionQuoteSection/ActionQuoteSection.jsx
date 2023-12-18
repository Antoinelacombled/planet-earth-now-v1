import React from "react";
import imgAssemb from "../../assets/manif-ass.jpg";
import "./ActionQuoteSection.css";

function ActionQuoteSection() {
  return (
    <section className="action-quote-section">
      <div className="action-quote">
        <p className="action-quote-text">
          « IL S’AGIT DE METTRE AU PIED DU MUR LES PERSONNES QUI ONT LE POUVOIR
          DE FAIRE CHANGER LES CHOSES »
        </p>

        <p className="author action-quote-author">Nadia Maizi</p>
      </div>
      <div className="action-quote-image-container">
        <div className="action-quote-image">
          <img src={imgAssemb} alt="Image description" />
        </div>
      </div>
    </section>
  );
}

export default ActionQuoteSection;
