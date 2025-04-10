import { useTranslation } from "react-i18next";
import "./Confidential.css";
import ScrollToTop from "../routes/ScrollToTop";
import ScrollToTopOnMount from "../routes/ScrollToTopOnMount";

function Confidential() {
  const { t } = useTranslation();
  return (
    <>
    <ScrollToTopOnMount />
      <div className="super-container-confidential">
        <div className="confidential-title" id="confidential">
          {t("TitlePolicy")}
        </div>
        <ScrollToTop />
        <div className="policy-container">
          <div className="policy-section">
            <p>{t("FirstTextPolicy")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleOne")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleTwo")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleThree")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleFour")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleFive")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleSix")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleSeven")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleEight")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleNine")}</p>
          </div>
          <div className="policy-section">
            <p>{t("ArticleTen")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confidential;
