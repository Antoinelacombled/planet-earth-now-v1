import React from "react";
import imgAssemb from "../../assets/manif-ass.jpg";
import "./ActionQuoteSection.css";

function ActionQuoteSection() {
  return (
    <section className="action-quote-section">
      <div className="action-quote">
        <p className="action-quote-text">
          « IL S’AGIT DE METTRE<br></br> AU PIED DU MUR LES<br></br>
          PERSONNES QUI ONT<br></br> LE POUVOIR DE FAIRE<br></br> CHANGER LES
          CHOSES »
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
