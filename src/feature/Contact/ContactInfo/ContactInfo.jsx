import blackLocationIcon from "../../../assets/images/icons/blackLocationIcon.png";
import blackMailIcon from "../../../assets/images/icons/blackMailIcon.png";
import blackPhoneIcon from "../../../assets/images/icons/blackPhoneIcon.png";
import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <div className="contact__info">
      <div className="contact__info__line">
        <img src={blackLocationIcon} alt="blackLocationIcon" />
        <p className="contact__info__line__text">16 Mechnikova StreetKyiv 01021Ukraine</p>
      </div>
      <div className="contact__info__line">
        <img src={blackMailIcon} alt="blackLocationIcon" />
        <p className="contact__info__line__text">info@bulletagro.com</p>
      </div>
      <div className="contact__info__line">
        <img src={blackPhoneIcon} alt="blackLocationIcon" />
        <p className="contact__info__line__text">+41 79 674 96 03</p>
      </div>
    </div>
  );
};
