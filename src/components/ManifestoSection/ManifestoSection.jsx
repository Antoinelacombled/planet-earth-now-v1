import React from "react";
import "./ManifestoSection.css";

import imgManif from "../../assets/manifestation-rue.jpg";

function ManifestoSection() {
  return (
    <section className="manifesto-section">
      <div className="manif-container">
        <img className="img-manif" src={imgManif}></img>
      </div>
      <div className="Right-manifesto-section">
        <div className="Quote-manifesto">
          « L'ACTION CIVILE EST LA SEULE VÉRITABLE ALTERNATIVE POUR AGIR SUR LE
          CLIMAT »<br></br>
        </div>
        <div className="author-manifesto">
          <span className="author">Xavier Montserrat</span>
          <br></br> +4°C <br></br>Le climat change... et vous ?
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
