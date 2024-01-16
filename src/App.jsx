import "./i18n.js";
import "./App.css";

import Routes from "./routes";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return <Routes />;
}

export default App;
