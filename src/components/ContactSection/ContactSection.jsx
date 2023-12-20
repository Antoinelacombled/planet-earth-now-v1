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
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="nationality">-Nationalité ? -Terrien -Et vous ? </div>
    </section>
  );
}

export default ContactSection;
