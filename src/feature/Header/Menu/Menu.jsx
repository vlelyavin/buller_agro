import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { Button } from "../../../components/Button";
import mailIcon from "../../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../../assets/images/icons/phoneIcon.png";
import fullLogoWhiteImage from "../../../assets/images/icons/fullLogoWhite.png";
import "./Menu.css";

export const Menu = ({ menuRef, handleClick, transformMenu }) => {
  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__header">
        <Link to={ROUTES.initial} className="menu__header__logo__container">
          <img src={fullLogoWhiteImage} alt="fullLogoImage" className="menu__header__logo" />
        </Link>
        <div className="menu__header__button" onClick={() => transformMenu("100vw")}>
          <div className="menu__header__button__line left"></div>
          <div className="menu__header__button__line right"></div>
        </div>
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
        <Link to={ROUTES.process} onClick={(event) => handleClick(ROUTES.process, event)} className="menu__nav__link">
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
  );
};
