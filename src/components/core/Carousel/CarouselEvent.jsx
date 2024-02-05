import { useTranslation } from "react-i18next";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./CarouselEvent.css";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const events = [
  {
    date: "6/2/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description:
      "EnerJ-Meeting - journée de l'efficacité énergétique et environnementale du bâtiment",
    link: "https://www.enerj-meeting.com/",
  },
  {
    date: "9/2/2024 - 9/2/2024",
    location: "Liège",
    audience: "UE",
    description: "Climate Chance Europe 2024 Wallonia Summit",
    link: "https://scce24wallonie.eu/en/",
  },
  {
    date: "11/2/2024 - 13/2/2024",
    location: "Long Beach",
    audience: "International",
    description: "2024 Higher Education Climate Leadership Summit",
    link: "https://secondnature.org/2024-summit/"
  },
  {
    date: "8/2/2024 - 9/2/2024",
    location: "Colombo",
    audience: "International",
    description: "8th International Conference on Climate Change 2024",
    link: "https://climatechangeconferences.com/"
  },
  {
    date: "6/3/2024",
    location: "Paris",
    audience: "Grand public",
    description: "Talents for the planet",
    link: "https://www.talentsfortheplanet.fr/fr",
  },
  {
    date: "13/3/2024 - 14/3/2024",
    location: "Londres",
    audience: "International",
    description: "Financial Times’ Climate Capital Live 2024",
    link: "https://climatecapital.live.ft.com/",
  },
  {
    date: "13/3/2024 - 15/3/2024",
    location: "La Défense",
    audience: "Grand public",
    description: "POwR.Earth Summit",
    link: "https://www.powrsummit.earth/",
  },
  {
    date: "25/3/2024",
    location: "Paris",
    audience: "Grand public",
    description: "Change Now",
    link: "https://www.changenow.world/fr/join_changenow_2024/",
  },
  {
    date: "26/3/2024",
    location: "Deauville",
    audience: "Salon professionnel",
    description: "Time to change 2024, forum climat énergie et finance durable",
    link: "https://evenements.optionfinance.fr/time-to-change-2024",
  },
  {
    date: "3/4/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Solutions Bas Carbone",
    link: "https://bas-carbone.com/",
  },
  {
    date: "10/4/2024",
    location: "Lyon",
    audience: "Salon professionnel",
    description: "MIX.E salon mix énergétique neutre en carbone",
    link: "https://mix-energy.com/",
  },
  {
    date: "11/4/2024",
    location: "Lille",
    audience: "Salon professionnel",
    description: "Journée Vision à 360° pour une industrie décarbonée",
    link: "https://www.team2.fr/journee-vision-a-360-pour-une-industrie-decarbonee",
  },
  {
    date: "16/4/2024 - 18/4/2024",
    location: "Florence",
    audience: "International",
    description: "European Climate Summit 2024 (IETA)",
    link: "https://www.ieta.org/events/european-climate-summit-ecs-2024/"
  },
  {
    date: "22/4/2024 - 28/4/2024",
    location: "Washington DC",
    audience: "International",
    description: "US Climate Action Summit 2024",
    link: "https://www.theclimategroup.org/us-climate-action-summit-2024"
  },
  {
    date: "28/5/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Drive to zero",
    link: "https://www.drivetozero.fr/",
  },
  {
    date: "9/10/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Produrable 2024",
    link: "https://www.produrable.com/"
  },
  {
    date: "11/11/2024 - 22/11/2024",
    location: "Baku",
    audience: "COP",
    description: "UNFCCC COP 29",
    link: "https://sdg.iisd.org/events/2024-un-climate-change-conference-unfccc-cop-29/",
  }
];

function CarouselEvent() {
  const { t } = useTranslation();
  return (
    <section className="carousel" id="event">
      <section className="set-the-event" id="event">
        <div className="title-set-the-event">{t("EventTitle")}</div>
        <div className="container-box">
          <div className="small-container super-container-set-the-event">
            <Swiper
              className="sample-slider"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                300: { slidesPerView: 1 },
                448: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
              }}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="event-card">
                  <a
                    href={event.link}
                    className="event-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="date-location">
                      {event.date} <br></br> {event.location}
                    </div>
                    <div className="audience-event">{event.audience}</div>
                    <div className="event-card-text">{event.description}</div>
                    <div className="event-more-info">{t("EventKnowMore")}</div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CarouselEvent;
