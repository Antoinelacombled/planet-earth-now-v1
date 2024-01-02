import React from "react";
import { useTranslation } from "react-i18next";
import "./FlagSection.css";

import flag from "../../assets/efo-flag.png";

function FlagSection() {
  const { t } = useTranslation();
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
        <div className="Quote-flag">{t("FlagSectionTitle")}</div>
      </div>
    </section>
  );
}

export default FlagSection;
