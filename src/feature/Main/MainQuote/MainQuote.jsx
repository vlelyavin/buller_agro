import fullLogo from "../../../assets/images/icons/fullLogo.png";
import logo from "../../../assets/images/icons/logo.svg";
import "./MainQuote.css";

export const MainQuote = () => {
  return (
    <div className="main__quote">
      <h2 className="main__quote__title">« We do - what others don’t »</h2>
      <img src={fullLogo} alt="fullLogo" className="main__quote__logo" />
      <img src={logo} alt="mobileQuoteImage" className="main__quote__logo__mobile" />
    </div>
  );
};
