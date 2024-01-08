import { useTranslation } from "react-i18next";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./WhyFlag.css";
import EfoFlag from "../../assets/efo-flag.png";

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
    t("WhyFlagTextTen"),
  ];
  return (
    <section className="why-flag-section">
      <h2 className="why-flag-title">{t("WhyFlagTitle")}</h2>
      <Swiper
        className="why-flag-swiper"
        navigation={{
          nextEl: ".swiper-button-next-why-flag",
          prevEl: ".swiper-button-prev-why-flag",
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {phrases.map((phrase, index) => {
          if (index % 2 === 0) {
            return (
              <SwiperSlide key={index}>
                <div className="box">
                  <div className="box-half bluebox">
                    <div className="box-text">{phrase}</div>
                  </div>
                  {index + 1 < phrases.length && (
                    <div className="box-half greenbox">
                      <div className="box-text">{phrases[index + 1]}</div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          }
          return null;
        })}
        <SwiperSlide>
          <div className="container-why-flag">
            <div className="why-flag-text">{t("WhyFlagTextEleven")}</div>
            <img src={EfoFlag} className="why-flag-img" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="why-flag-navigation">
        <button className="swiper-button-prev-why-flag">{"<"}</button>
        <button className="swiper-button-next-why-flag">{">"}</button>
      </div>
    </section>
  );
}

//ESSAYER FLAG ONDULE
//REDUIRE LE NOMBRE DE PHRASE PAR DRAPEAU

export default WhyFlag;
