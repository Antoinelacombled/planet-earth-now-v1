import React from "react";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <>
      <h2 className="projects-title">LES PROJETS</h2>
      <section className="projects-section">
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
      </section>
    </>
  );
}

export default ProjectSection;
