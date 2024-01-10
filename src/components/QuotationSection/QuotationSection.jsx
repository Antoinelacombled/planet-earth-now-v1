import React from "react";
import { useTranslation } from "react-i18next";
import "./QuotationSection.css";

function QuotationSection() {
  const { t } = useTranslation();
  return (
    <section className="quotation-section">
      <div className="container-quotation-section">
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section blue">
            {t("QuotationSectionOne")}
          </div>
          <div className="author-quotation-section blue">Albert Einstein</div>
        </div>
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section green">
            {t("QuotationSectionTwo")}
          </div>
          <div className="author-quotation-section green">
            Cyril Dion<br></br> {t("QuotationSectionAuthor")} <br></br>{" "}
            {t("QuotationSectionAuthorBis")}
          </div>
        </div>
        <div className="mini-container-quotation-section">
          <div className="quote-quotation-section blue">
            {t("QuotationSectionThree")}
          </div>
          <div className="author-quotation-section blue">Thomas Pesquet</div>
        </div>
      </div>
    </section>
  );
}

export default QuotationSection;
