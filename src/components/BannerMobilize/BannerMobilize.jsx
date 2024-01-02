import React from "react";
import { useTranslation } from "react-i18next";
import "./BannerMobilize.css";

function BannerMobilize() {
  const { t } = useTranslation();
  return <div className="banner-mobilized">{t("BannerMobilizeTitle")}</div>;
}

export default BannerMobilize;
