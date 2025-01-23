import React from "react";
import { useTranslation } from "react-i18next";
import "./PrinciplesSection.css";
import { Link } from "react-router-dom";

function PrinciplesSection() {
  const { t } = useTranslation();
  return (
    <div className="principles-section" id="principles">
      <div className="principles-banner">{t("FlagPrinciplesTitle")}</div>
      <div className="principles-container">
        <div className="principle-item">
          <div className="principle-number">1</div>
          <div className="principle-text">{t("FlagPrinciplesTextOne")}</div>
        </div>
        <div className="principle-item">
          <div className="principle-number">2</div>
          <div className="principle-text">{t("FlagPrinciplesTextTwo")}</div>
        </div>
        {/* <div className="principle-item">
          <div className="principle-number">3</div>
          <div className="principle-text">{t("FlagPrinciplesTextThree")}</div>
        </div> */}
        <div className="principle-item">
          <div className="principle-number">3</div>
          <div className="principle-text">{t("FlagPrinciplesTextFour")} <Link className="hypertext-flag" to="/conditions" >{t("FlagPrinciplesTextFive")}</Link></div>
        </div>
      </div>
    </div>
  );
}

export default PrinciplesSection;
