import React from "react";
import "./FlagSupport.css";
import William from "../../assets/William.jpeg";
import Pascale from "../../assets/pascale.jpeg";
import Sebastien from "../../assets/Sébastien.jpeg";

function FlagSupport() {
  const supporters = [
    {
      id: "1",
      name: "William Mathelin Moreaux",
      role: "Navigateur",
      imageUrl: William,
      linkedInUrl:
        "https://www.linkedin.com/in/william-mathelin-moreaux-aa5635a6/",
    },
    {
      id: "2",
      name: "Pascale d'Erm-Gasselin",
      role: "Auteure et réalisatrice",
      imageUrl: Pascale,
      linkedInUrl:
        "https://www.linkedin.com/in/pascale-d-erm-gasselin-baba2222/",
    },
    {
      id: "3",
      name: "Sébastien Rogues",
      role: "Skipper",
      imageUrl: Sebastien,
      linkedInUrl:
        "https://www.linkedin.com/in/s%C3%A9bastien-rogues-3518725a/",
    },
  ];

  return (
    <section className="flag-support-section">
      <h2 className="title-flag-support-section">LES SOUTIENS DU DRAPEAU</h2>
      <div className="supporters-container">
        {supporters.map((supporter) => (
          <a
            href={supporter.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="supporter-card"
            key={supporter.id}
          >
            <img
              src={supporter.imageUrl}
              alt={`Soutien - ${supporter.name}`}
              className="supporter-image"
            />
            <div className="supporter-name">{supporter.name}</div>
            <div className="supporter-role">{supporter.role}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FlagSupport;
