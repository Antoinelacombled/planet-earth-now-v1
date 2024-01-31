import { useTranslation } from "react-i18next";
import "./LegalMention.css";
import ScrollToTopOnMount from "../routes/ScrollToTopOnMount";

function LegalMention() {
  const { t } = useTranslation();

  return (
    <>
    <ScrollToTopOnMount />
    <div className="super-container-legal-mention">
      <div className="legal-mention-title">{t("LegalTitle")}</div>
      <div className="legal-mention-text">
        {t("Publisher")}
        {""}
        <a
          className="a-text-legal"
          href="https://www.godaddy.com/whois/results.aspx?domain=wixsite"
        >
          {" "}
          {""}
          Click here.
        </a>
      </div>
    </div>
    </>
  );
}

export default LegalMention;
