import React from "react";
import "./App.css";
import bl from "../src/assets/bl.jpg";
import br from "../src/assets/br.jpg";
import tl from "../src/assets/tl.jpg";
import tr from "../src/assets/tr.jpg";

function App() {
  return (
    <div className="App">
      <aside className="App-sidebar">
        {/* Sidebar content */}
        <div className="Sidebar-content">EARTH FLAG ONE</div>
      </aside>
      <main className="App-main">
        <header className="App-header">
          <a>Obtenir le drapeau</a>
          <a>Les principes</a>
          <a>Les événements & projets</a>
          <a>Contact</a>
          <a>FaQ</a>
        </header>
        <section className="Climate-urgency-section">VIDEO DU DRAPEAU</section>
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
      </main>
    </div>
  );
}

export default App;
