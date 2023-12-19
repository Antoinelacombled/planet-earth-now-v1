import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Faq from "../views/Faq";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Construction from "../views/Construction";

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
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default Router;
