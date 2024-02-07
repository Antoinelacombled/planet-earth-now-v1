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
import flagTreemium from "../../assets/custom-treemium.jpg";
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
import flagStripes from "../../assets/custom-stripes.png";
import flagCoquelicot from "../../assets/custom-coquelicot.png";
import flagPikPik from "../../assets/custom-pikpik.png";
import flagODNF from "../../assets/custom-odnf.png"

import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Autoplay]);

const logos = [
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
    alt: "Logo Rocket Foundation sur le drapeau EF1"
  },
  { 
    id: "treemium",
    image: flagTreemium,
    website: "https://treemium.com/",
    alt: "Logo Treemium sur le drapeau EF1"
  },
  {
    id: "pata",
    image: flagPata,
    website: "https://www.onepercentfortheplanet.org/join",
    alt: "Logo 1% for the planet sur le drapeau EF1"
  },
  {
    id: "plastic",
    image: flagPlastic,
    website: "https://www.preciousplastic.com/",
    alt: "Logo precious plastic sur le drapeau EF1"
  },
  {
    id: "trees", image: flagTrees,
    website: "https://trees.org/",
    alt: "Logo trees sur le drapeau EF1"
  },
  {
    id: "stripes",
    image: flagStripes,
    website: "https://showyourstripes.info/",
    alt: "Logo climate stripes sur le drapeau EF1"
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
    alt : "logo avenir climatique sur le drapeau EF1"
  },
  {
    id: "fnab",
    image: flagFnab,
    website: "https://www.fnab.org/",
    alt : "logo FNAB sur le drapeau EF1"
  },
  {
    id: "friends",
    image: flagFriend,
    website: "https://www.amisdelaterre.org/",
    alt : "logo amis de la terre sur le drapeau EF1"
  }
  ,
  { 
    id: "you",
    image: customYou,
  },
  {
    id: "coquelicot",
    image: flagCoquelicot,
    website: "https://nousvoulonsdescoquelicots.org/",
    alt : "logo nous voulons des coquelicots sur le drapeau EF1"
  },
  {
    id: "pikpik",
    image: flagPikPik,
    website: "https://pikpik.org/",
    alt : "logo PikPik événement sur le drapeau EF1",
  },
  {
    id: "ODNF",
    image: flagODNF,
    website: "https://odnf.fr",
    alt : "logo ODNF sur le drapeau EF1"
  }
];

function CustomTheFlag() {
  const { t } = useTranslation();

  return (
    <section className="custom-the-flag">
      <div className="super-container-custom-the-flag">
        <div className="title-custom-the-flag"><Link to={"/conditions"} className="link-flag">{t("CustomTheFlagTitle")}</Link></div>
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
          <div className="click-on-it">{t("CustomTheFlagClick")}</div>
          {/* <div className="conditions-flag"><Link to={"/conditions"} className="link-flag">Cliquez ici pour consulter les conditions de personnalisation du drapeau</Link></div> */}
        </div>
      </div>
    </section>
  );
}

export default CustomTheFlag;
