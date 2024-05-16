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
    date: "21/6/2024",
    location: "International",
    audience: "",
    description:
      "Show Your Stripes Day",
    link: "https://www.reading.ac.uk/planet/events/show-your-stripes-day  ",
  },
  {
    date: "25 mai 2024",
    location: "France",
    audience: "",
    description:
      "Journée contre l'agrochimie et vers un autre modèle agro-alimentaire",
    link: "https://linktr.ee/journee.contre.l.agrochimie",
  },
  {
    date: "27/5/2024 - 30/5/2024",
    location: "Antigua and Barbuda",
    audience: "",
    description:
      "4th International Conference on Small Island Developing States",
    link: "https://sdgs.un.org/conferences/sids2024",
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
    date: "7/6/2024 - 16/6/2024",
    location: "France",
    audience: "Festival",
    description: "Les nuits des forêts",
    link: "https://nuitsdesforets.com/",
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
    date: "16/6/2024 - 21/6/2024",
    location: "Davos",
    audience: "International",
    description: "3rd World Biodiversity Forum",
    link: "",
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
    link: "https://www.produrable.com/",
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
  },
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
