import { useTranslation } from "react-i18next";
import "./CustomTheFlag.css";

//SWIPER
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Importation des images
import flagRecoft from "../../assets/flag-recoft.png";
import flagRocket from "../../assets/flag-rocket.jpg";
import flagCad from "../../assets/cad.png";
import flagPata from "../../assets/custom-1.png";
import flagRe from "../../assets/custom-re.png";
import flagPlastic from "../../assets/custom-plastic.png";
import flagTrees from "../../assets/flag-trees.png";
import flagPaprec from "../../assets/custom-paprec.png";
import flagAvenir from "../../assets/custom-avenir.png";
import flagFnab from "../../assets/custom-fnab.png";
import flagFriend from "../../assets/flagfriends.png";
import customYou from "../../assets/custom-your.png";
import flagStripes from "../../assets/flag-warmingStripe.png";
import flagCoquelicot from "../../assets/custom-coquelicot.png";
import flagPikPik from "../../assets/custom-pikpik.png";
import flagODNF from "../../assets/custom-odnf.png";
import flagWater from "../../assets/custom-water.png";
import flagGroupement from "../../assets/custom-groupement.jpg";
import flagFridays from "../../assets/custom-fridays.png";
import flagUrgency from "../../assets/custom-urgence.png";
import flagWings from "../../assets/custom-wings.png";
import flagMego from "../../assets/custom-mego.png";
import flagZero from "../../assets/custom-zero.png";
import flagUni from "../../assets/custom-uni.png";
//import flagBaran from "../../assets/flag-baran2.png";
import flagJoboiana from "../../assets/custom-jiboiana.png";
import terreCite from "../../assets/custom-terre-cite.png";
import flagAgrochimie from "../../assets/flag-agrochimie.png";
import flagOrange from "../../assets/efo-flag-orange.png";
import flagGloo from "../../assets/base-personnalisation-drapeau.jpg";
import flagTchao from "../../assets/efo-flag-tchao.jpg";
import convergence from "../../assets/convergence.png";
import sailcoop from "../../assets/sailcoop.png";
import saveClimate from "../../assets/save-our-climate.png";
import changeNow from "../../assets/changeNow.png";
import customCop from "../../assets/custom-cop.png";
import customOdd from "../../assets/custom-odd.png";
import customCopSols from "../../assets/custom-cop-sols.png";

import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

const logos = [
  {
    id: "flagTchao",
    image: flagTchao,
    website: "https://tchaomegot.com/",
    alt: "Personnalisation du drapeau Tchao Megot",
  },
  {
    id: "flagGloo",
    image: flagGloo,
    website: "https://glooconcept.fr/",
    alt: "Personnalisation du drapeau Gloo Concept",
  },
  {
    id: "customCop",
    image: customCop,
    website: "https://www.cbd.int/conferences/2024",
    alt: "Personnalisation du drapeau de la COP 16",
  },
  {
    id: "customCopSols",
    image: customCopSols,
    website: "https://www.unccd.int/cop16",
    alt: "Personnalisation du drapeau de la COP 16 sols",
  },
  {
    id: "customOdd",
    image: customOdd,
    website: "https://sdgs.un.org/goals",
    alt: "Personnalisation du drapeau avec les 17 ODD",
  },
  {
    id: "flagOrange",
    image: flagOrange,
    website: "https://nga-orange.org/indexe68f.html",
    alt: "Personnalisation contre l'agent Orange",
  },
  {
    id: "againstAgrochimie",
    image: flagAgrochimie,
    website: "https://linktr.ee/journee.contre.l.agrochimie",
    alt: "Logo Marche contre l'agrochimie sur le drapeau EF1",
  },
  {
    id: "flagJoboiana",
    image: flagJoboiana,
    website: "https://association-jiboiana.com/",
    alt: "Logo de Jiboiana sur le drapeau EF1",
  },
  {
    id: "terreCite",
    image: terreCite,
    website: "https://terreetcite.org/",
    alt: "Logo de Terre & Cité sur le drapeau EF1",
  },
  /* {
    id: "baran",
    image: flagBaran,
    website: "https://therocketfoundation.org/news-updates/fund-a-pond-campaign/",
    alt: "Personnalisation de re-forest Baran sur le drapeau EF1",
  }, */
  {
    id: "rewild",
    image: flagRe,
    website: "https://www.rewild.org/",
    alt: "Logo Rewild sur le drapeau EF1",
  },
  {
    id: "recoft",
    image: flagRecoft,
    website: "https://www.recoftc.org/",
    alt: "Logo Recoft sur le drapeau EF1",
  },
  {
    id: "cad",
    image: flagCad,
    alt: "Logo CAD brésil sur le drapeau EF1",
  },
  {
    id: "rocket",
    image: flagRocket,
    website: "https://therocketfoundation.org/",
    alt: "Logo Rocket Foundation sur le drapeau EF1",
  },

  {
    id: "pata",
    image: flagPata,
    website: "https://www.onepercentfortheplanet.org/join",
    alt: "Logo 1% for the planet sur le drapeau EF1",
  },
  {
    id: "zero",
    image: flagZero,
    website: "",
    alt: "Logo 1% for the planet sur le drapeau EF1",
  },
  {
    id: "mego",
    image: flagMego,
    website: "https://trash-spotter.green/megothon-2024/",
    alt: "Logo 1% for the planet sur le drapeau EF1",
  },
  {
    id: "uni",
    image: flagUni,
    website: "https://linktr.ee/agrialimsante",
    alt: "Logo 1% for the planet sur le drapeau EF1",
  },
  {
    id: "plastic",
    image: flagPlastic,
    website: "https://www.preciousplastic.com/",
    alt: "Logo precious plastic sur le drapeau EF1",
  },
  {
    id: "trees",
    image: flagTrees,
    website: "https://trees.org/",
    alt: "Logo trees sur le drapeau EF1",
  },
  {
    id: "stripes",
    image: flagStripes,
    website: "https://showyourstripes.info/",
    alt: "Logo climate stripes sur le drapeau EF1",
  },
  {
    id: "paprec",
    image: flagPaprec,
    website: "https://www.paprec.com/fr/",
    alt: "logo Paprec sur le drapeau EF1",
  },
  {
    id: "avenir",
    image: flagAvenir,
    website: "https://avenirclimatique.org/",
    alt: "logo avenir climatique sur le drapeau EF1",
  },
  {
    id: "fnab",
    image: flagFnab,
    website: "https://www.fnab.org/",
    alt: "logo FNAB sur le drapeau EF1",
  },
  {
    id: "friends",
    image: flagFriend,
    website: "https://www.amisdelaterre.org/",
    alt: "logo amis de la terre sur le drapeau EF1",
  },
  {
    id: "you",
    image: customYou,
  },
  {
    id: "coquelicot",
    image: flagCoquelicot,
    website: "https://nousvoulonsdescoquelicots.org/",
    alt: "logo nous voulons des coquelicots sur le drapeau EF1",
  },
  {
    id: "pikpik",
    image: flagPikPik,
    website: "https://pikpik.org/",
    alt: "logo PikPik événement sur le drapeau EF1",
  },
  /* {
    id: "ODNF",
    image: flagODNF,
    website: "https://odnf.fr",
    alt: "logo ODNF sur le drapeau EF1",
  }, */
  {
    id: "water",
    image: flagWater,
    website: "https://waterfamily.org/",
    alt: "logo water family sur le drapeau EF1",
  },
  {
    id: "groupement",
    image: flagGroupement,
    website: "https://www.groupementforestier.org/",
    alt: "logo groupement forestier",
  },
  {
    id: "fridays",
    image: flagFridays,
    website: "https://fridaysforfuture.org/",
    alt: "logo fridays for future",
  },
  {
    id: "wings",
    image: flagWings,
    website: "https://www.wingsoftheocean.com//",
    alt: "logo fridays for future",
  },
  {
    id: "urgency",
    image: flagUrgency,
    website: "https://planete-urgence.org/",
    alt: "logo fridays for future",
  },
  {
    id: "convergence",
    image: convergence,
    website: "https://www.convergences.org/forum-mondial/",
    alt: "logo de convergence",
  },
  {
    id: "sailcoop",
    image: sailcoop,
    website: "https://www.sailcoop.fr/",
    alt: "logo sailcoop",
  },
  {
    id: "saveClimate",
    image: saveClimate,
    website: "",
    alt: "logo save our climate",
  },
  {
    id: "changeNow",
    image: changeNow,
    website: "",
    alt: "logo change now",
  },
];

const PersonnalisationCard = () => {
  const { t } = useTranslation();
  return(
    <div className="personnalisation-card">
      <p className="window-gtf-text">{t("CustomTheFlagSubTitle")}</p>
      <div className="button-mega-container">
        <div className="button-container">
            <a className="download-the-flag" href="https://planetearthnow.org/custom-flag?id=1" target="_blank" alt="Aller sur la page de personnalisation du drapeau">{t("TextButtonClick")}</a>
        </div>
      </div>
    </div>
  )
}


function CustomTheFlag() {
  const { t } = useTranslation();

  return (
    <>
    
    <section className="custom-the-flag">
      <div className="super-container-custom-the-flag">
      <p className="banner-mobilized caps">{t("CustomTheFlagSurTitle")}</p>
        <div className="title-custom-the-flag">
          <Link to={"/conditions"} className="link-flag">
            {t("CustomTheFlagTitle")}
          </Link>
        </div>
        <div className="container-carousel-custom-the-flag">
          <div className="container-flags-custom-the-flag">
            <Swiper
              className="flags-custom-the-flag"
              navigation={{
                nextEl: ".custom-the-flag-next",
                prevEl: ".custom-the-flag-prev",
              }}
              // onTransitionEnd={}
              autoplay={{ delay: 500, disableOnInteraction: false }}
              speed={2000}
              loop={true}
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={3}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                },
                300: {
                  slidesPerView: 2,
                },
                650: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="a-url-link">
                  <a className="website" href={logo.website} target="_blank">
                    <img src={logo.image} alt={logo.alt} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div>
              <button className="swiper-button-prev custom-the-flag-prev"></button>
              <button className="swiper-button-next custom-the-flag-next"></button>
            </div>
          </div>
        </div>
        <div className="text-container">
          {/* <div className="click-on-it">{t("CustomTheFlagClick")}</div> */}
          {/* <div className="conditions-flag"><Link to={"/conditions"} className="link-flag">Cliquez ici pour consulter les conditions de personnalisation du drapeau</Link></div> */}
        </div>
      </div>
      <PersonnalisationCard/>

    </section>
    </>
  );
}

export default CustomTheFlag;
