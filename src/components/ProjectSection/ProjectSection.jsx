import React from "react";
import "./ProjectSection";

function ProjectSection() {
  return (
    <>
      <section className="projects-section">
        <h2 className="projects-title">LES PROJETS</h2>
        <div className="projects-container">
          <div className="project-item">
            <img
              className="project-image"
              src="path-to-your-image"
              alt="Fire Image"
            />
            <h3 className="project-title">
              Contentmendos se arbitrantur qui hac opinionone non modo
            </h3>
            <p className="project-description">
              Ce drapeau est neutre vis-à-vis de toute formation politique et
              confessionnelle ainsi que de tout
            </p>
          </div>
          <div className="project-item">
            <img
              className="project-image"
              src="path-to-your-image"
              alt="Fire Image"
            />
            <h3 className="project-title">
              Contentmendos se arbitrantur qui hac opinionone non modo
            </h3>
            <p className="project-description">
              Ce drapeau est neutre vis-à-vis de toute formation politique et
              confessionnelle ainsi que de tout
            </p>
          </div>
          <div className="project-item">
            <img
              className="project-image"
              src="path-to-your-image"
              alt="Fire Image"
            />
            <h3 className="project-title">
              Contentmendos se arbitrantur qui hac opinionone non modo
            </h3>
            <p className="project-description">
              Ce drapeau est neutre vis-à-vis de toute formation politique et
              confessionnelle ainsi que de tout
            </p>
          </div>
        </div>
        <a href="#" className="projects-more">
          EN VOIR PLUS
        </a>
      </section>
      <section className="flag-partners-section">
        <div className="title-flag-parteners-section">
          LES PARTENAIRES DU DRAPEAU
        </div>
        <div className="partners-flag-partners">
          <img></img>
          <img></img>
          <img></img>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
