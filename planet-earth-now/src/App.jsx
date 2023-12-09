import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import "./App.css";

import bl from "../src/assets/bl.jpg";
import br from "../src/assets/br.jpg";
import tl from "../src/assets/tl.jpg";
import tr from "../src/assets/tr.jpg";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <div className="App">
        <aside className="App-sidebar">
          <div className="Sidebar-content">
            <div className="sticky-squares-container">
              <div className="sticky-square-blue"></div>
              <div className="sticky-square-green"></div>
            </div>
            <div>
              EARTH FLAG <span className="Text-sidebar">ONE</span>
            </div>
          </div>
        </aside>
        <main className="App-main">
          <header className="App-header">
            <a className="nav-menu-item">Obtenir le drapeau</a>
            <a className="nav-menu-item">Les principes</a>
            <a className="nav-menu-item">Les événements & projets</a>
            <a className="nav-menu-item">Contact</a>
            <a className="nav-menu-item">FAQ</a>
          </header>
          <section className="Climate-urgency-section">
            VIDEO DU DRAPEAU
          </section>
          <div className="banner-urgency">URGENCE CLIMATIQUE</div>
          <section className="Our-house-burns-section">
            <img
              className="img-burning"
              src={tl}
              alt="photo d'un glacier en train de fondre"
            />
            <img
              className="img-burning"
              src={tr}
              alt="photo de voiture immergée par des crues"
            />
            <img
              className="img-burning"
              src={bl}
              alt="photo de sol sec à cause de la secheresse"
            />
            <img
              className="img-burning"
              src={br}
              alt="photo de forêts en feu incendie"
            />
          </section>
          <section className="Unity-symbol-section">
            NOUS AVONS BESOIN D'UN SYMBOLE D'UNITÉ FORT :
          </section>

          <section className="Flag-section">
            <div className="Earth-flag">drapeau</div>
            <div className="Text-flag-section">text</div>
          </section>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
