import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import mailIcon from "../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.png";
import { Button } from "../Button";
import "./Header.css";

export const Header = ({ backgroundColor, backdropFilter }) => {
  return (
    <header className="header" style={{ backgroundColor: backgroundColor, backdropFilter: backdropFilter }}>
      <Link to="/" className="header__logo__container">
        <img src={logo} alt="logoIcon" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/petroleum" className="header__nav__link">
          Petroleum products
        </Link>
        <Link to="/sunflowerOil" className="header__nav__link">
          Sunflower oil
        </Link>
        <Link to="/grain" className="header__nav__link">
          Grain
        </Link>
        <Link to="/codeOfConduct" className="header__nav__link">
          Code of conduct
        </Link>
        <Link to="/process" className="header__nav__link">
          Process
        </Link>
        <Link to="/work" className="header__nav__link">
          Work
        </Link>
        <Link to="/about" className="header__nav__link">
          About us
        </Link>
      </nav>
      <div className="header__aside">
        <Link to="/contact">
          <Button width="150px" height="40px" />
        </Link>
        <img src={mailIcon} alt="mailIcon" className="header__aside__icon" />
        <img src={phoneIcon} alt="phoneIcon" className="header__aside__icon" />
      </div>
    </header>
  );
};
