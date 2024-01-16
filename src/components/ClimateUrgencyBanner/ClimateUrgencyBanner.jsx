import React from "react";
import "./ClimateUrgencyBanner.css";

import gifFlag from "../../assets/GIFFLAG.gif";
import videoflag from "../../assets/1219wSound.mp4";

function ClimateUrgencyBanner() {
  return (
    <section className="Climate-urgency-section" id="home">
      <video
        className="video-flag desktop-only"
        loop
        autoPlay
        playsInline
        muted
        alt="video du drapeau earth flag one flottant"
      >
        <source src={videoflag} type="video/mp4" />
      </video>
      <img
        className="gif-flag mobile-only"
        loading="lazy"
        src={gifFlag}
        alt="Drapeau earth flag one"
      />
    </section>
  );
}

export default ClimateUrgencyBanner;
