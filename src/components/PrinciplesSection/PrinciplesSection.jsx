import React from "react";
import "./PrinciplesSection.css";

function PrinciplesSection() {
  return (
    <div className="principles-section" id="principles">
      <div className="principles-banner">LES PRINCIPES DU DRAPEAU</div>
      <div className="principles-container">
        <div className="principle-item">
          <div className="principle-number">1</div>
          <div className="principle-text">
            Il appartient à toutes les citoyennes et tous les citoyens du monde.
          </div>
        </div>
        <div className="principle-item">
          <div className="principle-number">2</div>
          <div className="principle-text">
            Il est neutre vis-à-vis de toute formation politique et
            confessionnelle ainsi que de tout groupe d'intérêt ou d'influence.
          </div>
        </div>
        <div className="principle-item">
          <div className="principle-number">3</div>
          <div className="principle-text">
            Il est écoconçu et autant que possible produit localement.
          </div>
        </div>
        <div className="principle-item">
          <div className="principle-number">4</div>
          <div className="principle-text">
            Il peut être personnalisé à votre convenance et selon vos projets.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrinciplesSection;
