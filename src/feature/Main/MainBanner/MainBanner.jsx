import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container/Container";
import { ROUTES } from "../../../constants/routes";
import "./MainBanner.css";

export const MainBanner = () => {
  return (
    <div className="main__banner">
      <Container>
        <div className="main__banner__info">
          <h1 className="main__banner__info__title">
            We are bullet
            <br /> agroholding
          </h1>
          <p className="main__banner__info__description">
            Energy and Agriculture, Investment and
            <br /> Shipping Firm
          </p>
          <Link to={ROUTES.contact}>
            <Button width="320px" height="60px" fontSize="var(--font-l)" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
