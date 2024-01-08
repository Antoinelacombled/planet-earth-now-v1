import React from "react";
import { useTranslation } from "react-i18next";
import "./FlagPartners.css";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./FlagPartners.css";

import Recoft from "../../assets/logoRecoft.png";
import Treemium from "../../assets/logoTreemium.png";
import Eco from "../../assets/logoEco.png";
import Jiboiana from "../../assets/logoJiboiana.png";
import Rockett from "../../assets/logoRockett.png";

SwiperCore.use([Navigation]);

function FlagPartners() {
  const { t } = useTranslation();
  const partners = [Treemium, Recoft, Jiboiana, Eco, Rockett];

  return (
    <section className="flag-partners-section">
      <h2 className="title-flag-partners-section">{t("FlagPartnerTitle")}</h2>
      <Swiper
        className="flag-partners-swiper"
        navigation={{
          nextEl: ".swiper-button-next-flag-partners",
          prevEl: ".swiper-button-prev-flag-partners",
        }}
        spaceBetween={5}
        slidesPerView={4}
      >
        {partners.map((partnerLogo, index) => (
          <SwiperSlide key={index}>
            <a
              href="partner-link" // Replace with actual partner link
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-partner"
                src={partnerLogo}
                alt="Partner Logo"
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
