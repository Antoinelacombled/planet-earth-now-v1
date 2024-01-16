import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../views/Home";
import Faq from "../views/Faq";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Construction from "../views/Construction";
import LegalMention from "../views/LegalMention";
import Confidential from "../views/Confidential";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Sidebar />
        <main className="App-main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legal" element={<LegalMention />} />
            <Route path="/confidential" element={<Confidential />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default Router;
