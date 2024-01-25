import { useTranslation } from "react-i18next";

import "./GetTheFlag.css";

import windowOne from "../../assets/windowgtf----.jpg";
import windowTwo from "../../assets/windowgtf-.jpg";
import windowThree from "../../assets/windowgtf.jpg";
import windowFour from "../../assets/windowgtf---.jpg";
import windowFive from "../../assets/windowgtf--.jpg";

import { Link } from "react-router-dom";

function GetTheFlag() {
  const { t } = useTranslation();
  const flagDownloadUrl = "/efo-flag.png";

  return (
    <>
      <div className="banner-mobilized">{t("GetTheFlagTitle")}</div>

      {/* <div className="kiosque-container">
        <div className="banner-mobilized-title">Bientôt en kiosques</div>
      </div> */}

      <section className="Phase-get-flag" id="getflag">
        <div className="get-flag-container">
          <div className="window-get-the-flag one">
            <div className="window-gtf-title">
              {t("GetTheFlagTitleCardOne")}
            </div>
            <div className="window-gtf-img">
              {" "}
              <img className="img-size" src={windowOne} type="image/jpeg" />
            </div>
            <div className="window-gtf-text">
              {t("GetTheFlagTextCardOne")}
              <br></br>
              <a href="#event" className="contact-link">
                {t("GetTheFlagEventCardOne")}
              </a>
            </div>
          </div>
          <div className="window-get-the-flag two">
            <div className="window-gtf-title">
              {t("GetTheFlagTitleCardTwo")}
              <br></br> {t("GetTheFlagTitleCardTwoBis")}
            </div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowTwo} type="image/jpeg" />
            </div>
            <div className="window-gtf-text">
              {t("GetTheFlagTextCardTwo")}
              <br></br>
              <a href="#contact" className="contact-link">
                {t("GetTheFlagContactCardTwo")}
              </a>
            </div>
          </div>
          <div className="window-get-the-flag three">
            <div className="window-gtf-title">
              {t("GetTheFlagTitleCardThree")}
            </div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowThree} type="image/jpeg" />
            </div>
            <div className="window-gtf-text">
              {t("GetTheFlagTextCardThree")} <br></br>
              <a href="#contact" className="contact-link">
                {t("GetTheFlagContactCardThree")}
              </a>
            </div>
          </div>
          <div className="window-get-the-flag four">
            <div className="window-gtf-title fourText">
              {t("GetTheFlagTitleCardFour")}
            </div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFour} type="image/jpeg" />
            </div>
            <div className="window-gtf-text">
              {t("GetTheFlagTextCardFour")} <br></br>
              <Link to={"/faq"} className="contact-link">
                {t("GetTheFlagContactCardFour")}
              </Link>
            </div>
          </div>
          <div className="window-get-the-flag five">
            <div className="window-gtf-title">
              {t("GetTheFlagTitleCardFive")}
            </div>
            <div className="window-gtf-img">
              <img className="img-size" src={windowFive} type="image/jpeg" />
            </div>
            <div className="window-gtf-text">{t("GetTheFlagTextCardFive")}</div>
          </div>
        </div>
      </section>
      <div className="button-mega-container">
        <div className="button-container">
          <a
            href={flagDownloadUrl}
            download="efo-flag.png"
            className="download-the-flag"
          >
            {t("GetTheFlagDownload")}
          </a>
        </div>
        {/* <div className="button-container">
          <a
            href={flagDownloadUrl}
            download="efo-flag.png"
            className="download-the-flag"
          >
            {t("GetTheFlagDownload")}
          </a>
        </div> */}
      </div>
    </>
  );
}

export default GetTheFlag;
