import React from "react";
import { useTranslation } from "react-i18next";
import "./BannerUrgency.css";

function BannerUrgency() {
  const { t } = useTranslation();

  return <div className="banner-urgency">{t("BannerUrgencyTitle")}</div>;
}

export default BannerUrgency;
