import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

import linkedin from "../../assets/linkedin-logo.png";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer>
      <section className="footer-section">
        <div>
          <a href="https://www.linkedin.com/in/earthflagone/" target="_blank">
            <img className="linkedin" src={linkedin} />
          </a>
        </div>
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
        <div>
          {location.pathname === "/" && (
            <a className="nav-footer" href="#home">
              {t("Home")}
            </a>
          )}
        </div>
        {location.pathname !== "/faq" && (
          <Link to={"/faq?scrollTo=top"} className="nav-footer">
            {t("FaqHeader")}
          </Link>
        )}
      </section>
    </footer>
  );
}

export default Footer;
