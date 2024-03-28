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
    date: "3/4/2024 - 4/4/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Solutions Bas Carbone",
    link: "https://bas-carbone.com/",
  },
  {
    date: "3/4/2024 - 4/4/2024",
    location: "Le Havre",
    audience: "Salon professionnel",
    description: "Le Grand Défi Écologique 2024 (organisé par l'ADEME)",
    link: "https://legranddefiecologique.ademe.fr/content/accueil-pro",
  },
  {
    date: "4/4/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Forum national des éco-entreprises",
    link: "https://forum.ecoentreprises-france.fr/",
  },
  {
    date: "9/4/2024 - 12/4/2024",
    location: "Leuven",
    audience: "International",
    description: "5th Global Food Security Conference",
    link: "https://www.globalfoodsecurityconference.com/",
  },
  {
    date: "10/4/2024 - 11/4/2024",
    location: "Lyon",
    audience: "Salon professionnel",
    description: "MIX.E salon mix énergétique neutre en carbone",
    link: "https://mix-energy.com/",
  },
  {
    date: "10/4/2024 - 12/4/2024",
    location: "Barcelona",
    audience: "International",
    description: "2024 UN Ocean Decade Conference",
    link: "https://oceandecade-conference.com/home.php",
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
    date: "16/4/2024 - 17/4/2024",
    location: "Montréal",
    audience: "International",
    description: "Forum national de l’action climatique 2024",
    link: "https://rncreq.org/fnac2024/"
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
    date: "31/5/2024 - 2/6/2024",
    location: "Paris",
    audience: "Salon professionnel",
    description: "Festival développement durable ",
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
    date: "11/6/2024 - 12/6/2024",
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
    date: "26/7/2024 - 28/7/2024",
    location: "Alénya",
    audience: "Grand Public",
    description: "Bioviv'art - des arts vivants pour le vivant",
    link: "https://www.biovivart.fr/",
  },
  {
    date: "10/9/2024 - 12/9/2024",
    location: "Dunkerque",
    audience: "Grand Public",
    description: "Assises européennes de la transition énergétique",
    link: "https://assises-energie.org/",
  },
  {
    date: "9/10/2024 - 10/10/2024",
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
  },
  {
    date: "8/12/2024",
    location: "Abbeville",
    audience: "Grand public",
    description: "Journée mondiale du climat",
    link: "https://www.tourisme-en-hautsdefrance.com/offres/journee-mondiale-du-climat-abbeville-fr-4701953/",
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
