//import CSS
import React from "react";
import { useTranslation } from "react-i18next";
import "./FlagPartners.css";

// import Swiper
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import Logos
import Recoft from "../../assets/logoRecoft.png";
import Treemium from "../../assets/logoTreemium.png";
import Eco from "../../assets/logoEco.png";
import Jiboiana from "../../assets/logoJiboiana.png";
import Rocket from "../../assets/logoRockett.png";

SwiperCore.use([Navigation]);

const supporters = [
  {
    id: "recoft",
    image: Recoft,
    url: "https://www.recoftc.org/",
    alt: "logo Recoft",
  },
  {
    id: "eco",
    image: Eco,
    url: "https://www.eco-prisme.com/",
    alt: "logo Ecoprism",
  },
  {
    id: "Jiboiana",
    image: Jiboiana,
    url: "https://association-jiboiana.com/",
    alt: "logo Jiboiana",
  },
  {
    id: "rocket",
    image: Rocket,
    url: "https://therocketfoundation.org/",
    alt: "logo Rocket Fondation",
  },
  {
    id: "treemium",
    image: Treemium,
    url: "https://treemium.com/",
    alt: "logo Treemium",
  },
];

function FlagPartners() {
  const { t } = useTranslation();

  return (
    <section className="flag-partners-section">
      <h2 className="title-flag-partners-section">{t("FlagPartnerTitle")}</h2>
      <Swiper
        className="flag-partners-swiper"
        navigation={{
          nextEl: ".swiper-button-next-flag-partners",
          prevEl: ".swiper-button-prev-flag-partners",
        }}
        spaceBetween={1}
        slidesPerView={4}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {supporters.map((supporter, index) => (
          <SwiperSlide key={index}>
            <a href={supporter.url} target="_blank" rel="noopener noreferrer">
              <img
                className="logo-partner"
                src={supporter.image}
                alt={supporter.alt}
              /> 
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flag-partners-navigation">
        <button className="swiper-button-prev-flag-partners">{"<"}</button>
        <button className="swiper-button-next-flag-partners">{">"}</button>
      </div>
    </section>
  );
}

export default FlagPartners;
