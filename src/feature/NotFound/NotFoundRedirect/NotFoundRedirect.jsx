import { Link } from "react-router-dom";
import notFoundLogo from "../../../assets/images/notFound/404.png";
import arrowLeft from "../../../assets/images/icons/arrowLeft.png";
import "./NotFoundRedirect.css";

export const NotFoundRedirect = () => {
  return (
    <section className="not__found__redirect">
      <img src={notFoundLogo} alt="notFoundLogo" className="not__found__redirect__image" />
      <Link to="/" className="not__found__redirect__link">
        <img src={arrowLeft} alt="arrowLeft" className="not__found__redirect__link__arrow" />
        Back to home page
      </Link>
    </section>
  );
};
