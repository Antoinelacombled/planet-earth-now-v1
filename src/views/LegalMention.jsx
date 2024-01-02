import { useTranslation } from "react-i18next";
import "./LegalMention.css";

function LegalMention() {
  const { t } = useTranslation();

  return (
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
          https://www.godaddy.com/whois/results.aspx?domain=wixsite.
        </a>
      </div>
    </div>
  );
}

export default LegalMention;
