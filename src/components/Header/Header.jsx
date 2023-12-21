import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import angflag from "../../assets/angflag.png"; // Assurez-vous que le chemin d'accès est correct

function Header() {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  const handleFlagClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // La notification disparaît après 3 secondes
  };

  return (
    <header className="App-header">
      {/* ...autres éléments du header... */}

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
      <img
        src={angflag}
        alt="English flag"
        className="english-flag"
        onClick={handleFlagClick}
      />
      {showNotification && (
        <div className="language-notification">ONLINE EARLY JANUARY 2024</div>
      )}
    </header>
  );
}

export default Header;
