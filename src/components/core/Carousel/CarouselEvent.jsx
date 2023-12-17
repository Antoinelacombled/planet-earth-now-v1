import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./CarouselEvent.css";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const events = [
  {
    date: "12/18/2023",
    location: "Paris",
    audience: "Grand public",
    description:
      "Biodiversité et adaptation au changement climatique en ville, même combat ?",
    link: "https://www.academieduclimat.paris/evenements/biodiversite-et-adaptation-au-changement-climatique-en-ville-meme-combat/",
  },
  {
    date: "12/20/2023",
    location: "En ligne",
    audience: "Grand public",
    description:
      "Webinaire gratuit 'réinventons nos modèles d'éducation au chgt climatique'",
    link: "https://www.helloasso.com/associations/association-canopee/evenements/webinaire-reinventons-nos-modeles-d-education-au-changement-climatique",
  },
  {
    date: "12/20/2023",
    location: "En ligne",
    audience: "Grand public",
    description: "Que retenir (vraiment) de la COP 28 ?",
    link: "https://usineages.fr/zoom-meetings/que-retenir-vraiment-de-la-cop-28/",
  },
  {
    date: "12/21/2023",
    location: "En ligne",
    audience: "Grand public",
    description:
      "Au delà du carbone : vers un pilotage global du climat & RSE en entreprise",
    link: "https://www.lecampus.online/conferences/david-chapon",
  },
  {
    date: "1/6/2024",
    location: "Nantes",
    audience: "Grand public",
    description: "Ocean Talks (avec Hugo Clément et Paul Watson)",
    link: "https://www.eventbrite.fr/e/billets-escape-game-code-climat-au-port-dantibes-765250714487?aff=oddtdtcreator",
  },
  {
    date: "1/10/2024",
    location: "En ligne",
    audience: "Grand public",
    description: "Batîr un Avenir Durable",
    link: "https://www.academieduclimat.paris/evenements/atelier-horizons-decarbones-7/",
  },
];

function CarouselEvent() {
  return (
    <section className="carousel">
      <section className="set-the-event">
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
              spaceBetween={50}
              slidesPerView={3}
            >
              {events.map((event, index) => (
                <SwiperSlide key={index} className="event-card">
                  <div className="date-location">
                    {event.date} - {event.location}
                  </div>
                  <div className="event-card-text">{event.description}</div>
                  <div>{event.audience}</div>
                  <div className="event-more-info">En savoir plus</div>
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
