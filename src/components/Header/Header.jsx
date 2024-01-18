import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import angflag from "../../assets/angflag.png";
import frenchflag from "../../assets/frenchflag.png";
import spanishflag from "../../assets/spain-flag.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const location = useLocation();

  return (
    <header className="App-header" id="home">
      {location.pathname !== "/" && (
        <Link to={"/"} className="nav-menu-item">
          {t("Home")}
        </Link>
      )}
      {location.pathname === "/" && (
        <>
          <a className="nav-menu-item" href="#getflag">
            {t("GetTheFlagHeader")}
          </a>
          <a className="nav-menu-item" href="#principles">
            {t("PrinciplesHeader")}
          </a>
          <a className="nav-menu-item" href="#event">
            {t("EventsHeader")}
          </a>
          <a className="nav-menu-item" href="#contact">
            {t("ContactHeader")}
          </a>
        </>
      )}
      {location.pathname !== "/faq" && (
        <Link to={"/faq"} className="nav-menu-item">
          {t("FaqHeader")}
        </Link>
      )}

      <div className="flags">
        <img
          src={angflag}
          alt="English flag"
          className="flag"
          onClick={() => changeLanguage("en")}
        />
        <img
          src={frenchflag}
          alt="French flag"
          className="flag"
          onClick={() => changeLanguage("fr")}
        />
        <img src={spanishflag} alt="Spanish flag" className="spanish-flag" />
        <div className="language-notification">operativo en febrero</div>
      </div>
    </header>
  );
}

export default Header;
