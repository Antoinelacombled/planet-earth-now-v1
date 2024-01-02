import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer>
      <section className="footer-section">
        {location.pathname !== "/" && (
          <div>
            <Link to={"/"}>{t("Home")}</Link>
          </div>
        )}
        <div>
          <Link to={"/legal"}>{t("Legal")}</Link>
        </div>
        <div>
          <Link to={"/confidential"}>{t("Confident")}</Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
