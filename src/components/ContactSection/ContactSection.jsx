import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">ÉCHANGEONS AUTOUR DU DRAPEAU ?</h2>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Entrez votre nom" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Entrez votre prénom" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Entrez votre email" required />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Partagez vos idées, vos suggestions, vos questions, vos propositions de partenariat..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          ENVOYER
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
