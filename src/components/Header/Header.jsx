import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import fullLogoWhiteImage from "../../assets/images/icons/fullLogoWhite.png";
import crossIcon from "../../assets/images/icons/cross.png";
import mailIcon from "../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.png";
import mobileMailIcon from "../../assets/images/icons/mobile/mobileMailIcon.png";
import mobilePhoneIcon from "../../assets/images/icons/mobile/mobilePhoneIcon.png";
import mobileMenuIcon from "../../assets/images/icons/mobile/mobileMenuIcon.png";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import "./Header.css";
import { useState } from "react";

export const Header = ({ backgroundColor, backdropFilter }) => {
  const [showMenu, toggleMenuVisibility] = useState(false);
  const navigate = useNavigate();
  const handleClick = (pathname, event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(pathname);
    }, 200);
    toggleMenuVisibility(false);
  };
  return (
    <>
      {showMenu ? (
        <div className="menu">
          <div className="menu__header">
            <Link to={ROUTES.initial} className="menu__header__logo__container">
              <img src={fullLogoWhiteImage} alt="fullLogoImage" className="menu__header__logo" />
            </Link>
            <img
              src={crossIcon}
              alt="crossImage"
              className="menu__header__button"
              onClick={() => toggleMenuVisibility(false)}
            />
          </div>
          <div className="menu__info">
            <Link to={ROUTES.contact} onClick={(event) => handleClick(ROUTES.contact, event)}>
              <Button width="180px" fontSize="var(--font-m)" />
            </Link>
            <div className="menu__info__icons">
              <img src={mailIcon} alt="mailIcon" className="menu__info__icon" />
              <img src={phoneIcon} alt="phoneIcon" className="menu__info__icon" />
            </div>
          </div>
          <nav className="menu__nav">
            <Link
              to={ROUTES.petroleum}
              onClick={(event) => handleClick(ROUTES.petroleum, event)}
              className="menu__nav__link"
            >
              Petroleum products
            </Link>
            <Link
              to={ROUTES.sunflowerOil}
              onClick={(event) => handleClick(ROUTES.sunflowerOil, event)}
              className="menu__nav__link"
            >
              Sunflower oil
            </Link>
            <Link to={ROUTES.grain} onClick={(event) => handleClick(ROUTES.grain, event)} className="menu__nav__link">
              Grain
            </Link>
            <Link
              to={ROUTES.codeOfConduct}
              onClick={(event) => handleClick(ROUTES.codeOfConduct, event)}
              className="menu__nav__link"
            >
              Code of conduct
            </Link>
            <Link
              to={ROUTES.process}
              onClick={(event) => handleClick(ROUTES.process, event)}
              className="menu__nav__link"
            >
              Process
            </Link>
            <Link to={ROUTES.work} onClick={(event) => handleClick(ROUTES.work, event)} className="menu__nav__link">
              Work
            </Link>
            <Link to={ROUTES.about} onClick={(event) => handleClick(ROUTES.about, event)} className="menu__nav__link">
              About us
            </Link>
          </nav>
        </div>
      ) : (
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
            <Link
              to={ROUTES.process}
              onClick={(event) => handleClick(ROUTES.process, event)}
              className="header__nav__link"
            >
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
            <Link
              to={ROUTES.contact}
              onClick={(event) => handleClick(ROUTES.contact, event)}
              className="header__aside__button"
            >
              <Button width="150px" fontSize="var(--font-xs)" />
            </Link>
            <img src={mailIcon} alt="mailIcon" className="header__aside__icon" />
            <img src={phoneIcon} alt="phoneIcon" className="header__aside__icon" />
            <img src={mobileMailIcon} alt="mobileMailIcon" className="header__aside__icon__mobile" />
            <img src={mobilePhoneIcon} alt="molilePhoneIcon" className="header__aside__icon__mobile" />
            <img
              src={mobileMenuIcon}
              alt="mobileMenuIcon"
              className="header__aside__icon__mobile"
              onClick={() => toggleMenuVisibility(true)}
            />
          </div>
        </header>
      )}
    </>
  );
};
