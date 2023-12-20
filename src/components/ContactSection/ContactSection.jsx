import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

function ContactSection() {
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplacez 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', et 'YOUR_USER_ID' par vos identifiants réels
    emailjs
      .sendForm(
        "service_sjosw2b",
        "template_nlgu5fx",
        e.target,
        "Adnpa7DzIFyCr5BMp"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          e.target.reset(); // Réinitialiser le formulaire
          setSuccessMessage("Email envoyé avec succès!"); // Définir le message de succès
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-content">
        <div className="left-content">
          <p>- Nationalité ?</p>
          <p className="terrien">- Terrien !</p>
          <p>- Et vous ?</p>
          <p className="emojis">- 🤨😔😏🤔🫤🥴...</p>
        </div>
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
      </div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </section>
  );
}

export default ContactSection;
