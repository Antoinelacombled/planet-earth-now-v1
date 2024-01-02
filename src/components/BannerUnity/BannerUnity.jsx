import React from "react";
import { useTranslation } from "react-i18next";
import "./BannerUnity.css";

function BannerUnity() {
  const { t } = useTranslation();
  return (
    <div className="unity-container">
      <section className="Unity-symbol-section">
        {t("BannerUnityTitleOne")} <br></br> {t("BannerUnityTitleTwo")}
      </section>
    </div>
  );
}

export default BannerUnity;
