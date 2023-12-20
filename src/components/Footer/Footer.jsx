import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer>
      <section className="footer-section">
        {location.pathname !== "/" && (
          <div>
            <Link to={"/"}>ACCUEIL</Link>
          </div>
        )}
        <div>
          <Link to={"/legal"}>MENTION LÉGALES</Link>
        </div>
        <div>
          <Link to={"/confidential"}>POLITIQUE DE CONFIDENTIALITÉ</Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
