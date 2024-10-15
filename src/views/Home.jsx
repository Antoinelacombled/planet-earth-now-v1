import ActionQuoteSection from "../components/ActionQuoteSection/ActionQuoteSection";
import BannerMobilize from "../components/BannerMobilize/BannerMobilize";
import BannerUnity from "../components/BannerUnity/BannerUnity";
import BannerUrgency from "../components/BannerUrgency/BannerUrgency";
import ClimateUrgencyBanner from "../components/ClimateUrgencyBanner/ClimateUrgencyBanner";
import ContactSection from "../components/ContactSection/ContactSection";
import CustomTheFlag from "../components/CustomTheFlag/CustomTheFlag";
import FlagPartners from "../components/FlagPartners/FlagPartners";
import FlagSection from "../components/FlagSection/FlagSection";
import GetTheFlag from "../components/GetTheFlag/GetTheFlag";
import ManifestoSection from "../components/ManifestoSection/ManifestoSection";
import OurHouseBurns from "../components/OurHouseBurns/OurHouseBurns";
import PrinciplesSection from "../components/PrinciplesSection/PrinciplesSection";
import QuotationSection from "../components/QuotationSection/QuotationSection";
import WhyFlag from "../components/WhyFlag/WhyFlag";
import EventRequest from "../components/axios/EventRequest";
import CarouselEvent from "../components/core/Carousel/CarouselEvent";

function Home() {
  return (
    <>
      {/* header jusqu'à house burn */}
      
      <ClimateUrgencyBanner /> 
      <BannerUrgency /> 
      <OurHouseBurns />
      <BannerUnity />
      <FlagSection />
      <ManifestoSection />
      <ActionQuoteSection />
      <PrinciplesSection />
      <WhyFlag />
      <GetTheFlag />
      <CustomTheFlag />
      <CarouselEvent />
      <QuotationSection />
      <ContactSection />
{/* image pantheon >> principes >> pourquoi >> comment obtenir >>
 bouton télécharger + nouveau label >> caroussel personnalisez >> 
 events ajouter lien vers agenda >> enlever partenariats */}
      {/* <BannerMobilize />
      
      
      

      
      
      
      
      

      <FlagPartners />
      
      <EventRequest /> */}
    </>
  );
}

export default Home;
