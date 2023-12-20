import React from "react";
import "./QuotationSection.css";

function QuotationSection() {
  return (
    <section className="quotation-section">
      <div className="container-quotation-section">
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section blue">
            « LE MONDE NE SERA PAS DÉTRUIT PAR LES GENS QUI FONT LE MAL MAIS PAR
            CEUX QUI LES <br></br>LAISSE FAIRE »
          </div>
          <div className="author-quotation-section blue">Albert Einstein</div>
        </div>
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section green">
            « MAINTENANT DESCENDEZ DANS LA RUE ET OBLIGEZ-MOI À LE FAIRE »
          </div>
          <div className="author-quotation-section green">
            Cyril Dion <br></br> concernant l'affaire du siècle, <br></br> en
            référence à F.D Roosevelt
          </div>
        </div>
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section blue">
            « AUJOURD'HUI PLUS QUE JAMAIS, L'AVENIR DE LA TERRE, NOTRE AVENIR,
            EST ENTRE NOS MAINS »
          </div>
          <div className="author-quotation-section blue">Thomas Pesquet</div>
        </div>
      </div>
    </section>
  );
}

export default QuotationSection;
