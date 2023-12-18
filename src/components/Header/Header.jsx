import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Link to={"/"} className="nav-menu-item">
        Accueil
      </Link>
      <a className="nav-menu-item">Obtenir le drapeau</a>
      <a className="nav-menu-item">Les principes</a>
      <a className="nav-menu-item">Les événements & projets</a>
      <a className="nav-menu-item">Contact</a>
      <Link to={"/faq"} className="nav-menu-item">
        FAQ
      </Link>
    </header>
  );
}

export default Header;
