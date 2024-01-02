import React from "react";
import { useTranslation } from "react-i18next";
import imgAssemb from "../../assets/manif-ass.jpg";
import "./ActionQuoteSection.css";

function ActionQuoteSection() {
  const { t } = useTranslation();
  return (
    <section className="action-quote-section">
      <div className="action-quote">
        <p className="action-quote-text">{t("ActionQuoteSectionTitle")}</p>

        <p className="author action-quote-author">Nadia Maizi</p>
      </div>
      <div className="action-quote-image-container">
        <div className="action-quote-image">
          <img
            className="img-action-quote"
            src={imgAssemb}
            alt="Image description"
          />
        </div>
      </div>
    </section>
  );
}

export default ActionQuoteSection;
