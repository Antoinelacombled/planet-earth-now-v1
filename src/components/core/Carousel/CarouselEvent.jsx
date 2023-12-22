import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./CarouselEvent.css";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const events = [
  {
    date: "6/1/2024",
    location: "Nantes",
    audience: "Grand public",
    description: "Ocean Talks (avec Hugo Clément et Paul Watson)",
    link: "https://oceanfest.fr",
  },
  {
    date: "10/1/2024",
    location: "En ligne",
    audience: "Grand public",
    description: "Batîr un Avenir Durable",
    link: "https://www.lecampus.online/conferences/david-chapon",
  },
  {
    date: "16/1/2024",
    location: "Antibes",
    audience: "Colloque professionnel",
    description: "Escape game Code Climat aux port d'antibes",
    link: "https://www.eventbrite.fr/e/billets-escape-game-code-climat-au-port-dantibes-765250714487?aff=oddtdtcreator",
  },
  {
    date: "18/1/2024",
    location: "Paris",
    audience: "Grand public",
    description: "Atelier Horizons Décarbonés",
    link: "https://www.academieduclimat.paris/evenements/atelier-horizons-decarbones-7/",
  },
  {
    date: "24/1/2024",
    location: "Nantes",
    audience: "Salon professionnel",
    description: "Bio360 Expo : Salon de la bioéconomie et de la bioénergie",
    link: "https://www.bio360expo.com/",
  },
];

function CarouselEvent() {
  return (
    <section className="carousel" id="event">
      <section className="set-the-event" id="event">
        <div className="title-set-the-event">LES ÉVÉNEMENTS</div>
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
              slidesPerView={1}
              breakpoints={{
                469: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="event-card">
                  <div className="date-location">
                    {event.date} - {event.location}
                  </div>
                  <div className="event-card-text">{event.description}</div>
                  <div className="audience-event">{event.audience}</div>
                  <a href={event.link} className="event-more-info">
                    En savoir plus
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <button className="swiper-button-prev"> </button>
            <button className="swiper-button-next"> </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CarouselEvent;
