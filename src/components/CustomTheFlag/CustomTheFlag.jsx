import React from "react";
import "./CustomTheFlag.css";

import flagTrees from "../../assets/flag-trees.png";
import flagRocket from "../../assets/flag-rocket.png";
import flagPlastic from "../../assets/flag-plastic.png";

function CustomTheFlag() {
  return (
    <section className="custom-the-flag">
      <div className="super-container-custom-the-flag">
        <div className="title-custom-the-flag">PERSONNALISEZ LE DRAPEAU</div>
        <div className="container-carousel-custom-the-flag">
          <div className="arrows-custom-the-flag left-arrow">{"<"}</div>
          <div className="container-flags-custom-the-flag">
            <div className="flags-custom-the-flag">
              <img src={flagPlastic} alt="Custom Flag 1" />
            </div>
            <div className="flags-custom-the-flag">
              <img src={flagRocket} alt="Custom Flag 2" />
            </div>
            <div className="flags-custom-the-flag">
              <img src={flagTrees} alt="Custom Flag 3" />
            </div>
          </div>
          <div className="arrows-custom-the-flag right-arrow">{">"}</div>
        </div>
      </div>
    </section>
  );
}

export default CustomTheFlag;
