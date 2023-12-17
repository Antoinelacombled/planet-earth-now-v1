import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ClimateUrgencyBanner from "./components/ClimateUrgencyBanner/ClimateUrgencyBanner";
import BannerUrgency from "./components/BannerUrgency/BannerUrgency";
import OurHouseBurns from "./components/OurHouseBurns/OurHouseBurns";
import BannerUnity from "./components/BannerUnity/BannerUnity";
import FlagSection from "./components/FlagSection/FlagSection";
import BannerMobilize from "./components/BannerMobilize/BannerMobilize";
import ManifestoSection from "./components/ManifestoSection/ManifestoSection";
import ActionQuoteSection from "./components/ActionQuoteSection/ActionQuoteSection";
import GetTheFlag from "./components/GetTheFlag/GetTheFlag";
import WhyFlag from "./components/WhyFlag/WhyFlag";
import PrinciplesSection from "./components/PrinciplesSection/PrinciplesSection";
import CustomTheFlag from "./components/CustomTheFlag/CustomTheFlag";

import CarouselEvent from "./components/core/Carousel/CarouselEvent";
import QuotationSection from "./components/QuotationSection/QuotationSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import FlagPartners from "./components/FlagPartners/FlagPartners";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="App-main">
        <Header />
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
        <ProjectSection />
        {/* <FlagPartners /> */}
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
