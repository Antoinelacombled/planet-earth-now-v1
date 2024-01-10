import React from "react";
import { useTranslation } from "react-i18next";
import "./FlagSection.css";

import flag from "../../assets/efo-flagcolor.jpg";

function FlagSection() {
  const { t } = useTranslation();
  return (
    <section className="Flag-section">
      <div className="Earth-flag">
        <img
          className="img-flag"
          src={flag}
          alt="earth flag one flag"
          loading="lazy"
          type="image/jpeg"
        ></img>
      </div>
      <div className="Right-flag-section">
        <div className="Quote-flag">{t("FlagSectionTitle")}</div>
      </div>
    </section>
  );
}

export default FlagSection;
