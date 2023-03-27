import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import mailIcon from "../../assets/images/icons/mailIcon.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.png";
import mobileMailIcon from "../../assets/images/icons/mobile/mobileMailIcon.png";
import mobilePhoneIcon from "../../assets/images/icons/mobile/mobilePhoneIcon.png";
import mobileMenuIcon from "../../assets/images/icons/mobile/mobileMenuIcon.png";
import copyIcon from "../../assets/images/icons/copyIcon.png";
import { ROUTES } from "../../constants/routes";
import { Button } from "../Button";
import { Menu } from "../../feature/Header/Menu";
import "./Header.css";

export const Header = ({ backgroundColor, backdropFilter }) => {
  const [isEmailButtonVisible, toggleEmailButtonVisibility] = useState(false);
  const headerRef = useRef();
  const menuRef = useRef();
  const navigate = useNavigate();

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  const transformHeader = (value) => {
    headerRef.current.style.transform = `translateY(${value})`;
  };

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        transformHeader("-110%");
      } else {
        transformHeader("0%");
      }
    });
  }, []);

  const transformMenu = (value) => {
    menuRef.current.style.transform = `translateX(${value})`;
  };
  const handleClick = (pathname, event) => {
    event.preventDefault();
    transformMenu("110vw");
    setTimeout(() => {
      navigate(pathname);
    }, 200);
  };
  return (
    <>
      <div className="header__container" ref={headerRef}>
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
            <div className="header__aside__icon__container">
              {isEmailButtonVisible ? (
                <img
                  src={copyIcon}
                  alt="copyIcon"
                  className="header__aside__copy"
                  onClick={() => copyToClipboard("info@bullet-agro.com")}
                  onMouseOut={() => toggleEmailButtonVisibility(false)}
                />
              ) : (
                <img
                  src={mailIcon}
                  alt="mailIcon"
                  className="header__aside__icon"
                  onMouseOver={() => toggleEmailButtonVisibility(true)}
                />
              )}
            </div>
            <div className="header__aside__icon__container">
              <img src={phoneIcon} alt="phoneIcon" className="header__aside__icon" />
            </div>

            <img src={mobileMailIcon} alt="mobileMailIcon" className="header__aside__icon__mobile" />
            <img src={mobilePhoneIcon} alt="molilePhoneIcon" className="header__aside__icon__mobile" />
            <img
              src={mobileMenuIcon}
              alt="mobileMenuIcon"
              className="header__aside__icon__mobile"
              onClick={() => transformMenu("0")}
            />
          </div>
        </header>
      </div>
      <Menu menuRef={menuRef} transformMenu={transformMenu} handleClick={handleClick} />
    </>
  );
};
