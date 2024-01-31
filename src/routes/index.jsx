import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "../views/Home";
import Faq from "../views/Faq";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Construction from "../views/Construction";
import LegalMention from "../views/LegalMention";
import Confidential from "../views/Confidential";
import CookieConsent from "react-cookie-consent";
import Cookies from "../views/Cookies";

function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <main className="App-main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legal" element={<LegalMention />} />
            <Route path="/confidential" element={<Confidential />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <Footer />
        </main>
        <CookieConsent
          location="bottom"
          buttonText="J'accepte"
          enableDeclineButton
          declineButtonText="Je refuse"
          declineButtonStyle={{fontFamily: "sans-serif", borderRadius:"1px", fontSize: "12px", background: "#ffffff", color:"#0f0f0f"}}
          cookieName="userConsentCookie"
          style={{ background: "#0f0f0f", opacity: "0.8", fontFamily: "sans-serif",  }}
          buttonStyle={{fontFamily: "sans-serif", color: "#0f0f0f", fontSize: "12px", borderRadius:"1px"}}
          expires={150}
        >
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
          <span style={{ fontSize: "11px" }}><Link to="/cookies" style={{ color: "#fff" }}>Consultez notre politique de cookies en cliquant ici.</Link> </span> 
        </CookieConsent>
      </div>
    </BrowserRouter>
  );
}

export default Router;
