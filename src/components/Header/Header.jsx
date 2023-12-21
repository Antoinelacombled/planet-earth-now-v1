import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="App-header">
      {location.pathname !== "/" && (
        <Link to={"/"} className="nav-menu-item">
          Accueil
        </Link>
      )}
      {location.pathname === "/" && (
        <>
          <a className="nav-menu-item" href="#getflag">
            Obtenir le drapeau
          </a>
          <a className="nav-menu-item" href="#principles">
            Les principes
          </a>
          <a className="nav-menu-item" href="#event">
            Les événements
          </a>
          <a className="nav-menu-item" href="#contact">
            Contact
          </a>
        </>
      )}
      {location.pathname !== "/faq" && (
        <Link to={"/faq"} className="nav-menu-item">
          FAQ
        </Link>
      )}
    </header>
  );
}

export default Header;
