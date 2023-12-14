import React from "react";
import "./FlagSection.css";

import flag from "../../assets/efo-flag.png";

function FlagSection() {
  return (
    <section className="Flag-section">
      <div className="Earth-flag">
        <img
          className="img-flag"
          src={flag}
          alt="planet earth now flag"
          loading="lazy"
        ></img>
      </div>
      <div className="Right-flag-section">
        <div className="Quote-flag">
          Cet étendard a pour but de rappeler les dangers des changements
          climatiques et de porter les projets et les actions des défenseurs de
          l'environnement, plus haut et plus fort.
        </div>
      </div>
    </section>
  );
}

export default FlagSection;
