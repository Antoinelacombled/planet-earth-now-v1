import React from "react";
import { useTranslation } from "react-i18next";
import "./WhyFlag.css";

function WhyFlag() {
  const { t } = useTranslation();
  return (
    <section className="why-flag-section">
      <h2 className="why-flag-title green">{t("WhyFlagTitle")}</h2>
      <div className="why-flag-content">
        <div className="why-flag-column">
          <p className="why-flag-text why-flag-text-top blue">
            {t("WhyFlagText")}
          </p>
          <p className="why-flag-text green">{t("WhyFlagTextThree")}</p>
        </div>
        <div className="why-flag-column">
          <p className="why-flag-text why-flag-text-top blue">
            {t("WhyFlagTextTwo")}
          </p>
          <p className="why-flag-text blue">{t("WhyFlagTextFour")}</p>
        </div>
      </div>
    </section>
  );
}

export default WhyFlag;
