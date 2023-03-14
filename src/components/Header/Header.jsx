import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import mailIcon from "../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.png";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import "./Header.css";

export const Header = ({ backgroundColor, backdropFilter }) => {
  const navigate = useNavigate();
  const handleClick = (pathname, event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(pathname);
    }, 200);
  };
  return (
    <header className="header" style={{ backgroundColor: backgroundColor, backdropFilter: backdropFilter }}>
      <Link
        to={ROUTES.initial}
        onClick={(event) => handleClick(ROUTES.initial, event)}
        className="header__logo__container"
      >
        <img src={logo} alt="logoIcon" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link
          to={ROUTES.petroleum}
          onClick={(event) => handleClick(ROUTES.petroleum, event)}
          className="header__nav__link"
        >
          Petroleum products
        </Link>
        <Link
          to={ROUTES.sunflowerOil}
          onClick={(event) => handleClick(ROUTES.sunflowerOil, event)}
          className="header__nav__link"
        >
          Sunflower oil
        </Link>
        <Link to={ROUTES.grain} onClick={(event) => handleClick(ROUTES.grain, event)} className="header__nav__link">
          Grain
        </Link>
        <Link
          to={ROUTES.codeOfConduct}
          onClick={(event) => handleClick(ROUTES.codeOfConduct, event)}
          className="header__nav__link"
        >
          Code of conduct
        </Link>
        <Link to={ROUTES.process} onClick={(event) => handleClick(ROUTES.process, event)} className="header__nav__link">
          Process
        </Link>
        <Link to={ROUTES.work} onClick={(event) => handleClick(ROUTES.work, event)} className="header__nav__link">
          Work
        </Link>
        <Link to={ROUTES.about} onClick={(event) => handleClick(ROUTES.about, event)} className="header__nav__link">
          About us
        </Link>
      </nav>
      <div className="header__aside">
        <Link to={ROUTES.contact} onClick={(event) => handleClick(ROUTES.contact, event)}>
          <Button width="150px" height="40px" fontSize="var(--font-xs)" />
        </Link>
        <img src={mailIcon} alt="mailIcon" className="header__aside__icon" />
        <img src={phoneIcon} alt="phoneIcon" className="header__aside__icon" />
      </div>
    </header>
  );
};
