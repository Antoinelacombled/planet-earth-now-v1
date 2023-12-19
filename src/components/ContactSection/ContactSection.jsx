import React from "react";
import "./ContactSection.css";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const prenom = form.prenom.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:contact@exemple.com?subject=Message%20du%20formulaire%20de%20contact&body=${encodeURI(
      `Nom: ${name}\nPrénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            type="text"
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="prenom"
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
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
