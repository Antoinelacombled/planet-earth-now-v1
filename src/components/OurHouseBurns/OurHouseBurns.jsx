import React from "react";
import "./OurHouseBurns.css";

import bl from "../../assets/bl.jpg";
import br from "../../assets/br.jpg";
import tl from "../../assets/tl.jpg";
import tr from "../../assets/tr.jpg";

function OurHouseBurns() {
  return (
    <>
      <section className="Our-house-burns-section">
        <img
          className="img-burning"
          src={tl}
          alt="photo d'un glacier en train de fondre"
          loading="lazy"
        />
        <img
          className="img-burning"
          src={tr}
          alt="photo de voiture immergée par des crues"
          loading="lazy"
        />

        <img
          className="img-burning"
          src={bl}
          alt="photo de sol sec à cause de la secheresse"
          loading="lazy"
        />
        <img
          className="img-burning"
          src={br}
          alt="photo de forêts en feu incendie"
          loading="lazy"
        />
      </section>
    </>
  );
}

export default OurHouseBurns;
