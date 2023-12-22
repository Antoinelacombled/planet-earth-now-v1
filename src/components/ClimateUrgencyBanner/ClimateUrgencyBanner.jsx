import React from "react";
import "./ClimateUrgencyBanner.css";

import videoflag from "../../assets/1219.mov";

function ClimateUrgencyBanner() {
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Video play failed:", error));
    }
  }, []);

  return (
    <section className="Climate-urgency-section">
      <video
        ref={videoRef}
        className="video-flag"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={videoflag} type="video/mp4" />
      </video>
    </section>
  );
}

export default ClimateUrgencyBanner;
