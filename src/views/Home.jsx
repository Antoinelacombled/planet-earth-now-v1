import ActionQuoteSection from "../components/ActionQuoteSection/ActionQuoteSection";
import BannerMobilize from "../components/BannerMobilize/BannerMobilize";
import BannerUnity from "../components/BannerUnity/BannerUnity";
import BannerUrgency from "../components/BannerUrgency/BannerUrgency";
import ClimateUrgencyBanner from "../components/ClimateUrgencyBanner/ClimateUrgencyBanner";
import ContactSection from "../components/ContactSection/ContactSection";
import CustomTheFlag from "../components/CustomTheFlag/CustomTheFlag";
import FlagSection from "../components/FlagSection/FlagSection";
import GetTheFlag from "../components/GetTheFlag/GetTheFlag";
import ManifestoSection from "../components/ManifestoSection/ManifestoSection";
import OurHouseBurns from "../components/OurHouseBurns/OurHouseBurns";
import PrinciplesSection from "../components/PrinciplesSection/PrinciplesSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import QuotationSection from "../components/QuotationSection/QuotationSection";
import WhyFlag from "../components/WhyFlag/WhyFlag";
import CarouselEvent from "../components/core/Carousel/CarouselEvent";

function Home() {
  return (
    <>
      <ClimateUrgencyBanner />
      <BannerUrgency />
      <OurHouseBurns />
      <BannerUnity />
      <FlagSection />
      <BannerMobilize />
      <ManifestoSection />
      <ActionQuoteSection />
      <GetTheFlag />
      <PrinciplesSection />
      <WhyFlag />
      <CustomTheFlag />
      <QuotationSection />
      <CarouselEvent />
      {/* <ProjectSection /> */}
      {/* <FlagPartners /> */}
      <ContactSection />
    </>
  );
}

export default Home;
