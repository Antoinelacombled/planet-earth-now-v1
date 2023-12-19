import React from "react";
import "./WhyFlag.css";

function WhyFlag() {
  return (
    <section className="why-flag-section">
      <h2 className="why-flag-title green">POURQUOI CE DRAPEAU ?</h2>
      <div className="why-flag-content">
        <div className="why-flag-column">
          <p className="why-flag-text why-flag-text-top blue">
            LE DRAPEAU DE L'URGENCE CLIMATIQUE EST L'EMBLÈME DE LA SAUVEGARDE DE
            NOTRE TERRE, SA BIODIVERSITÉ, SES OCÉANS.
          </p>
          <p className="why-flag-text green">
            LES PAYS ONT LEUR DRAPEAU, LES TERRIENS ONT DÉSORMAIS LE LEUR.
          </p>
        </div>
        <div className="why-flag-column">
          <p className="why-flag-text why-flag-text-top blue">
            IL EST LE SYMBOLE DE L'ÉVEILS DES CONSCIENCES EN FAVEUR DE
            L'ENVIRONNEMENT.
          </p>
          <p className="why-flag-text blue">
            IL EST LE PORTE-VOIX DE CE QUE NOUS VOULONS PROCLAMER.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyFlag;
