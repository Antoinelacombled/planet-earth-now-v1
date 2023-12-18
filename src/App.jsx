import "./App.css";
import { ReactLenis } from "@studio-freight/react-lenis";

import Routes from "./routes";

function App() {
  return (
    <ReactLenis root>
      <Routes />
    </ReactLenis>
  );
}

export default App;
