import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";


function Faq() {

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('scrollTo') === 'top') {
        const element = document.getElementById('topElement');
        element?.scrollIntoView({ behavior: 'smooth' });
    }
}, []);

  const { t } = useTranslation();
  return (
    <>
    <div className="super-container-faq">
      <div className="faq-title">FAQ</div>
      <div className="faq-text">
        <h2>{t("FaqTitleOne")}</h2> {t("FaqTextOne")}
        <h2>{t("FaqTitleTwo")}</h2> {t("FaqTextTwo")}
        {/* <h2>{t("FaqTitleThree")}</h2>
        {t("FaqTextThree")} */}
        <h2>{t("FaqTitleFour")}</h2> {t("FaqTextFour")}{" "}
        <a className="link-faq" href="https://atelier-lemee.com/entreprise/">
          LE MÉE{" "}
        </a>{" "}
        et{" "}
        <a className="link-faq" href="https://www.macapflag.com/">
          MACAP.
        </a>{" "}pour le polyester recyclé et <a className="link-faq" href="https://gl-imprimerie-paris.fr">G.L. Associés</a> pour le papier certifié PEFC. 
        <h2>{t("FaqTitleFive")}</h2>
        {t("FaqTextFive")}
{/*         <h2>{t("FaqTitleSix")}</h2>
        {t("FaqTextSix")} */}
        <h2>{t("FaqTitleSeven")}</h2>
        {t("FaqTextSeven")} {""}
        <Link to={"/"} className="link-faq">
          {t("FaqTextSevenBis")}
        </Link>
      </div>
    </div>
    </>
  );
}

export default Faq;
