import React from "react";
import { useTranslation } from "react-i18next";
import "./FlagPartners.css";

import Recoft from "../../assets/logoRecoft.png";
import Treemium from "../../assets/logoTreemium.png";
import Eco from "../../assets/logoEco.png";
import Jiboiana from "../../assets/logoJiboiana.png";
import Rockett from "../../assets/logoRockett.png";

// //SWIPER
// import SwiperCore from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// // Initialisation de Navigation pour Swiper
// SwiperCore.use([Navigation]);

// const logos = [
//   { id: "recoft", image: Recoft },
//   { id: "treemium", image: Treemium },
//   { id: "eco", image: Eco },
//   { id: "rocket", image: Rockett },
//   { id: "jiboiana", image: Jiboiana },
// ];

// function FlagPartners() {
//   const { t } = useTranslation();

//   return (
//     <section className="flag-partners-section">
//       <div className="title-custom-the-flag">{t("FlagPartnerTitle")}</div>
//       <div className="partners-container">
//         <div className="container-flags-custom-the-flag">
//           <Swiper
//             className="flags-custom-the-flag"
//             navigation={{
//               nextEl: ".flag-partners-prev",
//               prevEl: ".flag-partners-next",
//             }}
//             modules={[Navigation]}
//             spaceBetween={1}
//             slidesPerView={3}
//             breakpoints={{
//               100: {
//                 slidesPerView: 1,
//               },
//               300: {
//                 slidesPerView: 2,
//               },
//               650: {
//                 slidesPerView: 2,
//               },
//               1000: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {logos.map((logo, index) => (
//               <SwiperSlide key={index} className="a-url-link">
//                 <img
//                   src={logo.image}
//                   className="logo-partner"
//                   alt={`Flag ${index}`}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div>
//             <button className="swiper-button-prev flag-partners-prev"></button>
//             <button className="swiper-button-next flag-partners-next"></button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FlagPartners;

function FlagPartners() {
  const { t } = useTranslation();
  return (
    <section className="flag-partners-section">
      <h2 className="title-flag-partners-section">{t("FlagPartnerTitle")}</h2>
      <div className="partners-container">
        <a
          href="https://www.treemium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Treemium} alt="Logo Treemium" />
        </a>
        <a
          href="https://www.recoftc.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Recoft} alt="Logo Recoft" />
        </a>
        <a
          href="https://association-jiboiana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Jiboiana} alt="Logo Jiboiana" />
        </a>
        <a
          href="https://www.eco-prisme.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Eco} alt="Logo Eco" />
        </a>
        <a
          href="https://therocketfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-partner" src={Rockett} alt="Logo Rockett" />
        </a>
      </div>
    </section>
  );
}

export default FlagPartners;
