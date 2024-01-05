import { useTranslation } from "react-i18next";
import "./CustomTheFlag.css";

//SWIPER
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Importation des images
import flagRecoft from "../../assets/flag-recoft.png";
import flagRocket from "../../assets/flag-rocket.png";
import flagTreemium from "../../assets/flag-treemium.png";

// Initialisation de Navigation pour Swiper
SwiperCore.use([Navigation]);

const logos = [
  { id: "recoft", image: flagRecoft },
  { id: "rocket", image: flagRocket },
  { id: "treemium", image: flagTreemium },
  { id: "recoft", image: flagRecoft },
  { id: "rocket", image: flagRocket },
  { id: "treemium", image: flagTreemium },
];

function CustomTheFlag() {
  const { t } = useTranslation();

  return (
    <section className="custom-the-flag">
      <div className="super-container-custom-the-flag">
        <div className="title-custom-the-flag">{t("CustomTheFlagTitle")}</div>
        <div className="container-carousel-custom-the-flag">
          <div className="container-flags-custom-the-flag">
            <Swiper
              className="flags-custom-the-flag"
              navigation={{
                nextEl: ".custom-the-flag-next",
                prevEl: ".custom-the-flag-prev",
              }}
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
                  <img src={logo.image} alt={`Flag ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <button className="swiper-button-prev custom-the-flag-prev"></button>
              <button className="swiper-button-next custom-the-flag-next"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomTheFlag;
