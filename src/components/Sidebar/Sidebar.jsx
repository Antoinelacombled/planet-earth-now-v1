import "./Sidebar.css";
import flaghero from "../../assets/Component7.png";

function Sidebar() {
  return (
    <aside className="App-sidebar">
      <div className="Sidebar-content">
        <img className="hero-flag" src={flaghero} type="image/png" />
      </div>
    </aside>
  );
}

export default Sidebar;
