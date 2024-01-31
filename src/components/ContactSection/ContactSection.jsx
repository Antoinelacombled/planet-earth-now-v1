import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

function ContactSection() {
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    emailjs
      .sendForm(
        "service_dbxm148",
        "template_nlgu5fx",
        e.target,
        "Adnpa7DzIFyCr5BMp"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          e.target.reset();
          setSuccessMessage("Email envoyé avec succès!");
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
          <p>{t("Nationality")}</p>
          <p className="terrien">{t("Terrien")}</p>
          <p>{t("You")}</p>
          <p className="emojis">- 🤨😔😏🤔🫤🥴...</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              placeholder={t("PlaceHolderOne")}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="prenom"
              type="text"
              placeholder={t("PlaceHolderTwo")}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder={t("PlaceHolderThree")}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t("PlaceHolderFour")}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {t("ButtonContact")}
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
