import React from "react";
import "./GetTheFlag.css";

import windowOne from "../../assets/windowgtf----.jpg";
import windowTwo from "../../assets/windowgtf-.jpg";
import windowThree from "../../assets/windowgtf.jpg";
import windowFour from "../../assets/windowgtf---.jpg";
import windowFive from "../../assets/windowgtf--.jpg";

function GetTheFlag() {
  const flagDownloadUrl = "/efo-flag.png";

  return (
    <>
      <div className="banner-mobilize">COMMENT OBTENIR LE DRAPEAU ?</div>

      <section className="Phase-get-flag">
        <div className="Get-flag-container">
          <div className="window-get-the-flag one">
            <div className="window-gtf-title">AUX MARCHES POUR LE CLIMAT</div>
            <div className="window-gtf-img">
              {" "}
              <img className="img-size" src={windowOne} />
            </div>
            <div className="window-gtf-text">
              Le drapeau est distribué aux participant-es de marches citoyennes
              pour la défense de l'environnement. Rendez-vous aux prochains
              événements.
            </div>
          </div>
          <div className="window-get-the-flag two">
            <div className="window-gtf-title">
              POUR LES <br></br>INSTITUTIONS
            </div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowTwo} />
            </div>
            <div className="window-gtf-text">
              Grâce aux dons reçus par l'association, des drapeaux pourront être
              offerts aux mairies et aux écoles. N'hésitez pas à nous contacter.
            </div>
          </div>
          <div className="window-get-the-flag three">
            <div className="window-gtf-title">DANS LE CADRE DE VOS PROJETS</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowThree} />
            </div>
            <div className="window-gtf-text">
              Dans le cadre de votre association et vos projets, événéments ou
              conférences, etc. Des drapeaux pourront vous être envoyés
              gracieusement. N'hésitez pas à nous contacter.
            </div>
          </div>
          <div className="window-get-the-flag four">
            <div className="window-gtf-title">EN CONTACTANT UN FABRICANT</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFour} />
            </div>
            <div className="window-gtf-text">
              Contacter le fournisseur de votre choix pour la fabrication du
              drapeau en téléchargeant le fichier. Vous pouvez également
              contacter nos fabricants.
            </div>
          </div>
          <div className="window-get-the-flag five">
            <div className="window-gtf-title">EN LE FABRICANT VOUS-MÊME</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFive} />
            </div>
            <div className="window-gtf-text">
              Vous pouvez télécharger le fichier drapeau de l'urgence climatique
              afin de l'imprimer pour le fabriquer vous-même ou le partager au
              plus grand nombre.
            </div>
          </div>
        </div>
      </section>
      <div className="button-container">
        <a
          href={flagDownloadUrl}
          download="efo-flag.png"
          className="download-the-flag"
        >
          TÉLÉCHARGER LE DRAPEAU
        </a>
      </div>
    </>
  );
}

export default GetTheFlag;
