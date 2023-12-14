import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="App-header">
      <a className="nav-menu-item">Obtenir le drapeau</a>
      <a className="nav-menu-item">Les principes</a>
      <a className="nav-menu-item">Les événements & projets</a>
      <a className="nav-menu-item">Contact</a>
      <a className="nav-menu-item">FAQ</a>
    </header>
  );
}

export default Header;
