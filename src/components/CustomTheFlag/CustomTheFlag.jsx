import React from "react";
import { useTranslation } from "react-i18next";
import "./CustomTheFlag.css";

import flagRecoft from "../../assets/flag-recoft.png";
import flagRocket from "../../assets/flag-rocket.png";
import flagTreemium from "../../assets/flag-treemium.png";

// créer lien externe vers les sites partenaires

function CustomTheFlag() {
  const { t } = useTranslation();
  return (
    <section className="custom-the-flag">
      <div className="super-container-custom-the-flag">
        <div className="title-custom-the-flag">{t("CustomTheFlagTitle")}</div>
        <div className="container-carousel-custom-the-flag">
          <div className="arrows-custom-the-flag left-arrow"></div>
          <div className="container-flags-custom-the-flag">
            <div className="flags-custom-the-flag">
              <a
                className="a-url-link"
                href="https://www.treemium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={flagTreemium} alt="Custom Flag Treemium" />
              </a>
            </div>
            <div className="flags-custom-the-flag">
              <a
                className="a-url-link"
                href="https://therocketfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={flagRocket} alt="Custom Flag Rocket" />
              </a>
            </div>
            <div className="flags-custom-the-flag">
              <a
                className="a-url-link"
                href="https://www.recoftc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={flagRecoft} alt="Custom Flag Recoft" />
              </a>
            </div>
          </div>
          <div className="arrows-custom-the-flag right-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default CustomTheFlag;
