import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <div>
          <Link to={"/"}>ACCUEIL</Link>
        </div>
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
