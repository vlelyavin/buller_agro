import fullLogo from "../../../assets/images/icons/fullLogo.png";
import fullLogoVertical from "../../../assets/images/icons/fullLogoVertical.png";
import "./WorkWithUsImage.css";

export const WorkWithUsImage = () => {
  return (
    <div className="wwu">
      <img src={fullLogo} alt="fullLogo" className="wwu__logo" />
      <img src={fullLogoVertical} alt="fullLogoVertical" className="wwu__logo__vertical" />
      <p className="wwu__text">
        We recruit the very best and also grow our own talent. In all our offices and facilities, you will find
        outstanding individuals working to high standards as part of a powerful, worldwide team.
      </p>
    </div>
  );
};
