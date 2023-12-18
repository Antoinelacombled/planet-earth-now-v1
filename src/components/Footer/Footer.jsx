import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <div>
          <Link to={"/"}>ACCUEIL</Link>
        </div>
        <div>MENTIONS LÉGALES</div>
        <div>POLITIQUE DE CONFIDENTIALITÉ </div>
      </section>
    </footer>
  );
}

export default Footer;
