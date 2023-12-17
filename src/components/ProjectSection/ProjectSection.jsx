import React from "react";
import "./ProjectSection.css";

import forestFire from "../../assets/forestfire.jpg";
import snowMountains from "../../assets/snowmountains.jpg";
import earthAbove from "../../assets/earthabove.jpg";

function ProjectSection() {
  return (
    <>
      <div className="title-project">LES PROJETS</div>
      <section className="projects-section">
        <div className="projects-container">
          <div className="project-item">
            <img className="project-image" src={forestFire} alt="Fire Image" />
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
              src={snowMountains}
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
            <img className="project-image" src={earthAbove} alt="Fire Image" />
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
