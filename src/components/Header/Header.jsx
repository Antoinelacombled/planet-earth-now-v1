import "./Header.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="App-header">
      <Link to={"/"} className="nav-menu-item">
        Accueil
      </Link>
      <a className="nav-menu-item">
        <ScrollLink
          to="getflag"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          Obtenir le drapeau
        </ScrollLink>
      </a>
      <a className="nav-menu-item">
        <ScrollLink
          to="principles"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          Les principes
        </ScrollLink>
      </a>

      <a className="nav-menu-item">
        <ScrollLink
          to="event"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          Les événements & projets
        </ScrollLink>
      </a>

      <a className="nav-menu-item">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          Contact
        </ScrollLink>
      </a>

      <Link to={"/faq"} className="nav-menu-item">
        FAQ
      </Link>
    </header>
  );
}

export default Header;
