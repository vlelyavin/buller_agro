import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import mailIcon from "../../assets/images/icons/footer/footerMailIcon.svg";
import phoneIcon from "../../assets/images/icons/footer/footerPhoneIcon.svg";
import locationIcon from "../../assets/images/icons/footer/footerLocationIcon.svg";
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
            <p className="footer__column__rights">
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
            <Link
              to={ROUTES.codeOfConduct}
              onClick={(event) => handleClick(ROUTES.codeOfConduct, event)}
              className="footer__column__link"
            >
              Code of conduct
            </Link>
            <Link
              to={ROUTES.process}
              onClick={(event) => handleClick(ROUTES.process, event)}
              className="footer__column__link"
            >
              Process
            </Link>
            <Link
              to={ROUTES.work}
              onClick={(event) => handleClick(ROUTES.work, event)}
              className="footer__column__link"
            >
              Work
            </Link>
            <Link
              to={ROUTES.about}
              onClick={(event) => handleClick(ROUTES.about, event)}
              className="footer__column__link"
            >
              About us
            </Link>
          </div>
          <div className="footer__column">
            <Link to={ROUTES.contact} onClick={(event) => handleClick(ROUTES.contact, event)}>
              <button className="footer__column__button">Contact us</button>
            </Link>
            <div className="footer__column__info">
              <img src={locationIcon} alt="locationIcon" className="footer__column__info__line__icon" />
              <p className="footer__column__text">
                16 Mechnikova Street, Kyiv,
                <br /> 01021, Ukraine
              </p>
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
