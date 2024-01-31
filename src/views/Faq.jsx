import { useTranslation } from "react-i18next";
import "./Faq.css";
import { Link } from "react-router-dom";

function Faq() {
  const { t } = useTranslation();
  return (
    <div className="super-container-faq">
      <div className="faq-title">FAQ</div>
      <div className="faq-text">
        <h2>{t("FaqTitleOne")}</h2> {t("FaqTextOne")}
        <h2>{t("FaqTitleTwo")}</h2> {t("FaqTextTwo")}
        <h2>{t("FaqTitleThree")}</h2>
        {t("FaqTextThree")}
        <h2>{t("FaqTitleFour")}</h2> {t("FaqTextFour")}{" "}
        <a className="link-faq" href="https://www.imprimer-vert.fr/">
          IMPRIMER VERT
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.doublet.fr/?gad_source=1">
          DOUBLET
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.drapeauxunic.fr/">
          MANUFACTURE DES DRAPEAUX UNIC S.A
        </a>
        ,{" "}
        <a
          className="link-faq"
          href="https://www.aviso-drapeaux.com/1688-mats-et-supports?gad_source=1"
        >
          MATS DESCHAMPS
        </a>
        ,{" "}
        <a className="link-faq" href="https://www.varinard.com/fr">
          SOCIÉTÉ VARINARD.
          <br></br>
        </a>{" "}
        <a className="link-faq" href="https://atelier-lemee.com/entreprise/">
          LE MÉE{" "}
        </a>{" "}
        et{" "}
        <a className="link-faq" href="https://www.macapflag.com/">
          MACAP
        </a>{" "}
        {t("FaqTextFourBis")}
        <h2>{t("FaqTitleFive")}</h2>
        {t("FaqTextFive")}
        <h2>{t("FaqTitleSix")}</h2>
        {t("FaqTextSix")}
        <h2>{t("FaqTitleSeven")}</h2>
        {t("FaqTextSeven")} {""}
        <Link to={"/"} className="link-faq">
          {t("FaqTextSevenBis")}
        </Link>
      </div>
    </div>
  );
}

export default Faq;
