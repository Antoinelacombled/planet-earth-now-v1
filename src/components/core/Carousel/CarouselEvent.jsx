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
    date: "6/3/2024",
    location: "Paris",
    audience: "Grand public",
    description: "Talents for the planet",
    link: "https://www.talentsfortheplanet.fr/fr",
  },
  {
    date: "7/3/2024 - 8/3/2024",
    location: "Bordeaux",
    audience: "Grand public",
    description: "World Impact Summit, Sommet international des solutions à impact positif",
    link: "https://www.worldimpactsummit-event.com/2024/fr",
  },
  {
    date: "8/3/2024 - 17/3/2024",
    location: "France",
    audience: "Grand public",
    description: "Rencontres de l’habitat écologique, en France",
    link: "https://fr.twiza.org/portail/",
  },
  {
    date: "9/3/2024 - 10/3/2024",
    location: "Sainte-Suzanne",
    audience: "Grand public",
    description: "Marche Réunionnaise pour le Climat et la Biodiversité",
    link: "https://ville-saintesuzanne.re/marche-reunionnaise-pour-le-climat-2024/",
  },
  {
    date: "25/3/2024 - 27/3/2024",
    location: "Paris",
    audience: "Grand public",
    description: "Change Now",
    link: "https://www.changenow.world/fr/join_changenow_2024/",
  },
  {
    date: "26/3/2024 - 27/3/2024",
    location: "Deauville",
    audience: "Salon professionnel",
    description: "Time to change 2024, forum climat énergie et finance durable",
    link: "https://evenements.optionfinance.fr/time-to-change-2024",
  },
  {
    date: "28/3/2024 - 30/3/2024",
    location: "Berkeley, CA",
    audience: "International",
    description: "Bioneers 2024",
    link: "https://conference.bioneers.org/",
  },
  {
    date: "3/4/2024 - 4/4/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Solutions Bas Carbone",
    link: "https://bas-carbone.com/",
  },
  {
    date: "3/4/2024 - 4/4/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Le Grand Défi Écologique 2024 (organisé par l'ADEME)",
    link: "https://legranddefiecologique.ademe.fr/content/accueil-pro",
  },
  {
    date: "10/4/2024 - 11/4/2024",
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
    date: "7/5/2024 - 9/5/2024",
    location: "Atlanta, GA",
    audience: "International",
    description: "Living Future Conference 2024",
    link: "https://www.livingfutureconference.org/event/2473f788-aa25-45ab-8d52-8299cc1bbeb2/summary"
  },
  {
    date: "28/5/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Drive to zero",
    link: "https://www.drivetozero.fr/",
  },
  {
    date: "Juin",
    location: "Paris, Lyon, Bordeaux",
    audience: "Course",
    description: "Run for Planet",
    link: "https://runforplanet.fr/",
  },
  {
    date: "11/6/2024 - 1/12/2024",
    location: "Paris",
    audience: "Grand public",
    description: "BIOMIMEXPO 2024",
    link: "https://biomimexpo.com/",
  },
  {
    date: "18/6/2024 - 20/6/2024",
    location: "Torshavn (Îles Faroe)",
    audience: "Conference",
    description: "Seagriculture EU",
    link: "https://seagriculture.eu/conference-program-2024/",
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
