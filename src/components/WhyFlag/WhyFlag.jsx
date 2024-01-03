import { useTranslation } from "react-i18next";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./WhyFlag.css";
import "swiper/css";
import "swiper/css/navigation";
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
      <div className="container-box">
        <div className="small-container-why-the-flag">
          <Swiper
            className="why-flag-swiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2.5}
            slidesPerGroup={2}
          >
            {phrases.map((phrase, index) => (
              <SwiperSlide
                key={index}
                className={`why-flag-text ${
                  index % 2 === 0 ? "even-class" : "odd-class"
                }`}
              >
                {phrase}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <button className="swiper-button-prev test"> </button>
          <button className="swiper-button-next"> </button>
        </div>
      </div>
    </section>
  );
}

export default WhyFlag;
