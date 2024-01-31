import { useTranslation } from "react-i18next";
import "./Cookies.css";
import ScrollToTopOnMount from "../routes/ScrollToTopOnMount";

function Cookies() {
  const { t } = useTranslation();

  return (
    <>
    <ScrollToTopOnMount />
    <div className="super-container-cookies">
      <div className="cookies-title">{t("CookiesTitle")}</div>
      <h3 className="cookies-subtitle">{t("CookiesSubTitleOne")}</h3>
      <div className="cookies-text">
      {t("CookiesTextOne")}
      </div>
      <h3 className="cookies-subtitle"> {t("CookiesSubTitleTwo")}</h3>
      <div className="cookies-text"> {t("CookiesTextTwo")}
      </div>
      <h3 className="cookies-subtitle">{t("CookiesSubTitleThree")}</h3>
      <div className="cookies-text">
      {t("CookiesTextThree")}
        </div>
        <h3 className="cookies-subtitle">{t("CookiesSubTitleFour")}</h3>
        <div className="cookies-text"> {t("CookiesTextFour")}</div>
        <h3 className="cookies-subtitle">{t("CookiesSubTitleFive")}</h3>
        <div className="cookies-text">{t("CookiesTextFive")}</div>
        <h3 className="cookies-subtitle">{t("CookiesSubTitleSix")}</h3>
        <div className="cookies-text">{t("CookiesTextSix")}</div>
        <div className="space"></div>
    </div>
    </>
  );
}

export default Cookies;
