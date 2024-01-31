import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./conditionflag.css";

function ConditionFlag() {
  const { t } = useTranslation();

  return (
    <div className="super-container-condition">
      <div className="condition-title">COMMENT PERSONNALISER LE DRAPEAU</div>
      <h3 className="condition-subtitle"></h3>
      <div className="condition-text">Vous pouvez personnaliser le drapeau sous réserve que la version obtenue soit en accord avec le respect de l’environnement et qu’elle soit neutre vis-à-vis de toute formation politique et confessionnelle ou de tout groupe d’intérêt ou d’influence.
        Pour cela, il vous suffit de <Link to={"/"} className="condition-flag-hypertext">prendre contact</Link> pour valider votre nouvelle version en nous expliquant votre projet.</div>
      <h3 className="condition-subtitle"></h3>
      <div className="condition-text"> </div>
      <h3 className="condition-subtitle"></h3>
      <div className="condition-text"> </div>
    </div>
  
  );
}

export default ConditionFlag;
