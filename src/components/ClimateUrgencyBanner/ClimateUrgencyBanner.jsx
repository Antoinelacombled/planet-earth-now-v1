import React from "react";
import "./ClimateUrgencyBanner.css";

import videoflag from "../../assets/flag-video.mp4";

function ClimateUrgencyBanner() {
  return (
    <section className="Climate-urgency-section">
      <video className="video-flag" loop autoPlay muted>
        <source src={videoflag} type="video/mp4" />
      </video>
    </section>
  );
}

export default ClimateUrgencyBanner;
