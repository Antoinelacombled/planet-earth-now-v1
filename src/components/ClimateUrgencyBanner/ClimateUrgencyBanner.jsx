import React from "react";
import "./ClimateUrgencyBanner.css";

import gifFlag from "../../assets/GIFFLAG.gif";
import videoflag from "../../assets/1219.mov";

function ClimateUrgencyBanner() {
  return (
    <section className="Climate-urgency-section">
      <video className="video-flag desktop-only" loop autoPlay muted>
        <source src={videoflag} type="video/mp4" />
      </video>
      <img className="gif-flag mobile-only" src={gifFlag} alt="Drapeau" />
    </section>
  );
}

export default ClimateUrgencyBanner;
