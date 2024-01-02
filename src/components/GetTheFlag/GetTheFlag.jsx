import "./GetTheFlag.css";

import windowOne from "../../assets/windowgtf----.jpg";
import windowTwo from "../../assets/windowgtf-.jpg";
import windowThree from "../../assets/windowgtf.jpg";
import windowFour from "../../assets/windowgtf---.jpg";
import windowFive from "../../assets/windowgtf--.jpg";

import { Link } from "react-router-dom";

function GetTheFlag() {
  const flagDownloadUrl = "/efo-flag.png";

  return (
    <>
      <div className="banner-mobilized">COMMENT OBTENIR LE DRAPEAU ?</div>

      <section className="Phase-get-flag" id="getflag">
        <div className="get-flag-container">
          <div className="window-get-the-flag one">
            <div className="window-gtf-title">AUX MARCHES POUR LE CLIMAT</div>
            <div className="window-gtf-img">
              {" "}
              <img className="img-size" src={windowOne} />
            </div>
            <div className="window-gtf-text">
              Le drapeau est distribué aux participant-es de marches citoyennes
              pour la défense de l&apos;environnement. <br></br>
              <a href="#event" className="contact-link">
                Rendez-vous aux prochains événements.
              </a>
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
              Grâce aux dons reçus par l&apos;association, des drapeaux pourront
              être offerts aux mairies et aux écoles.<br></br>
              <a href="#contact" className="contact-link">
                N'hésitez pas à nous contacter.
              </a>
            </div>
          </div>
          <div className="window-get-the-flag three">
            <div className="window-gtf-title">DANS LE CADRE DE VOS PROJETS</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowThree} />
            </div>
            <div className="window-gtf-text">
              Dans le cadre de votre association et de vos projets, événéments
              ou conférences, des drapeaux pourront vous être offerts. <br></br>
              <a href="#contact" className="contact-link">
                N'hésitez pas à nous contacter.
              </a>
            </div>
          </div>
          <div className="window-get-the-flag four">
            <div className="window-gtf-title">EN CONTACTANT UN FABRICANT</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFour} />
            </div>
            <div className="window-gtf-text">
              Contactez le fournisseur de votre choix pour la fabrication du
              drapeau en téléchargeant le fichier ci-dessous. <br></br>
              <Link to={"/faq"} className="contact-link">
                Nous vous en avons sélectionné quelques-uns.
              </Link>
            </div>
          </div>
          <div className="window-get-the-flag five">
            <div className="window-gtf-title">EN LE FABRICANT VOUS-MÊME</div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFive} />
            </div>
            <div className="window-gtf-text">
              Vous pouvez télécharger ci-dessous le fichier du drapeau de
              l&apos;urgence climatique afin de l&apos;imprimer pour le
              fabriquer vous-même ou le partager autour de vous.
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
