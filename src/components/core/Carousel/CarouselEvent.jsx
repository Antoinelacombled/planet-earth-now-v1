import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    <section className="set-the-event">
      <div className="title-set-the-event">LES ÉVÉNEMENTS</div>
      <div className="super-container-set-the-event">
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="event-card">
                <div>
                  {event.date} - {event.location}
                </div>
                <div className="event-card-text">{event.description}</div>
                <div>{event.audience}</div>
                <div className="event-more-info">En savoir plus</div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarouselEvent;
