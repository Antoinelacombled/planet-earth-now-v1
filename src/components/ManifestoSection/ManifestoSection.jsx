import React from "react";
import { useTranslation } from "react-i18next";
import "./ManifestoSection.css";

import imgManif from "../../assets/manifestation-rue.jpg";

function ManifestoSection() {
  const { t } = useTranslation();
  return (
    <section className="manifesto-section">
            <div className="Right-manifesto-section">
        <div className="Quote-manifesto">
          {t("ManifestoSectionTitleOne")}
          <br></br>
          {t("ManifestoSectionTitleTwo")} <br></br>
          {t("ManifestoSectionTitleThree")} <br></br>{" "}
          {t("ManifestoSectionTitleFour")}
          <br></br>
        </div>
        <div className="author-manifesto">
          <span className="author-title-ee">Xavier Montserrat</span>
          <span className="title-manifesto">
            <br></br> +4°C <br></br>
            {t("ManifestoBook")}
          </span>
        </div>
      </div>
      <div className="manif-container">
        <img className="img-manif" src={imgManif} type="image/jpeg"></img>
      </div>

    </section>
  );
}

export default ManifestoSection;
