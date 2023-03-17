import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.png";
import mailIcon from "../../assets/images/icons/footer/footerMailIcon.png";
import phoneIcon from "../../assets/images/icons/footer/footerPhoneIcon.png";
import locationIcon from "../../assets/images/icons/footer/footerLocationIcon.png";
import { Container } from "../Container/Container";
import "./Footer.css";
import { ROUTES } from "../../constants/routes";

export const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (pathname, event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate(pathname);
    }, 200);
  };
  return (
    <footer className="footer">
      <Container>
        <div className="footer__row">
          <div className="footer__column">
            <img src={logo} alt="logo" className="footer__column__logo" />
            <p className="footer__column__text">
              All rights reserved.
              <br /> www.bullet-agro.com
            </p>
          </div>
          <div className="footer__column">
            <Link
              to={ROUTES.petroleum}
              onClick={(event) => handleClick(ROUTES.petroleum, event)}
              className="footer__column__link"
            >
              Petroleum Products
            </Link>
            <Link
              to={ROUTES.sunflowerOil}
              onClick={(event) => handleClick(ROUTES.sunflowerOil, event)}
              className="footer__column__link"
            >
              Sunflower Oil
            </Link>
            <Link
              to={ROUTES.grain}
              onClick={(event) => handleClick(ROUTES.grain, event)}
              className="footer__column__link"
            >
              Grain
            </Link>
          </div>
          <div className="footer__column">
            <Link to={ROUTES.contact} onClick={(event) => handleClick(ROUTES.contact, event)}>
              <button className="footer__column__button">Contact us</button>
            </Link>
            <div className="footer__column__info">
              <img src={locationIcon} alt="locationIcon" className="footer__column__info__line__icon" />
              <p className="footer__column__text">16 Mechnikova Street, Kyiv, 01021, Ukraine</p>
            </div>
            <div className="footer__column__info">
              <img src={mailIcon} alt="mailIcon" className="footer__column__info__line__icon" />
              <p className="footer__column__text">info@bulletagro.com</p>
            </div>
            <div className="footer__column__info">
              <img src={phoneIcon} alt="phoneIcon" className="footer__column__info__line__icon" />
              <p className="footer__column__text">+41 79 674 96 03</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
