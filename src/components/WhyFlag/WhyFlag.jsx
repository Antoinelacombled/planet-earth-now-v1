import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./WhyFlag.css";

SwiperCore.use([Navigation]);

function WhyFlag() {
  // The text is in the i19n.js file
  const { t } = useTranslation();
  const phrases = [
    t("WhyFlagTextOne"),
    t("WhyFlagTextTwo"),
    t("WhyFlagTextThree"),
    t("WhyFlagTextFour"),
    t("WhyFlagTextFive"),
    t("WhyFlagTextSix"),
    t("WhyFlagTextSeven"),
    t("WhyFlagTextEight"),
    t("WhyFlagTextNine"),
  ];

  return (
    <section className="why-flag-section">
      <h2 className="why-flag-title green">{t("WhyFlagTitle")}</h2>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-why-flag",
          prevEl: ".swiper-button-prev-why-flag",
        }}
        spaceBetween={20}
        slidesPerView={2.5}
        slidesPerGroup={2}
        className="why-flag-swiper"
      >
        {phrases.map((phrase, index) => (
          <SwiperSlide
            key={index}
            className={`why-flag-text blue ${
              index % 2 === 0 ? "even-class" : "odd-class"
            }`}
          >
            {phrase}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="why-flag-navigation">
        <button className="swiper-button-prev-why-flag"> {"<"}</button>
        <button className="swiper-button-next-why-flag"> {">"}</button>
      </div>
    </section>
  );
}

export default WhyFlag;
