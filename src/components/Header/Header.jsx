import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import mailIcon from "../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.png";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import "./Header.css";

export const Header = ({ backgroundColor, backdropFilter }) => {
  return (
    <header className="header" style={{ backgroundColor: backgroundColor, backdropFilter: backdropFilter }}>
      <Link to={ROUTES.initial} className="header__logo__container">
        <img src={logo} alt="logoIcon" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to={ROUTES.petroleum} className="header__nav__link">
          Petroleum products
        </Link>
        <Link to={ROUTES.sunflowerOil} className="header__nav__link">
          Sunflower oil
        </Link>
        <Link to={ROUTES.grain} className="header__nav__link">
          Grain
        </Link>
        <Link to={ROUTES.codeOfConduct} className="header__nav__link">
          Code of conduct
        </Link>
        <Link to={ROUTES.process} className="header__nav__link">
          Process
        </Link>
        <Link to={ROUTES.work} className="header__nav__link">
          Work
        </Link>
        <Link to={ROUTES.about} className="header__nav__link">
          About us
        </Link>
      </nav>
      <div className="header__aside">
        <Link to={ROUTES.contact}>
          <Button width="150px" height="40px" fontSize="var(--font-xs)" />
        </Link>
        <img src={mailIcon} alt="mailIcon" className="header__aside__icon" />
        <img src={phoneIcon} alt="phoneIcon" className="header__aside__icon" />
      </div>
    </header>
  );
};
