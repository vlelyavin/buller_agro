import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import blackLocationIcon from "../../../assets/images/icons/blackLocationIcon.png";
import blackMailIcon from "../../../assets/images/icons/blackMailIcon.png";
import blackPhoneIcon from "../../../assets/images/icons/blackPhoneIcon.png";
import "./ContactLocation.css";

export const ContactLocation = () => {
  const center = useMemo(() => ({ lat: 50.437351512622065, lng: 30.534185098037344 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  return (
    <section className="contact__location">
      <div className="contact__location__info">
        <div className="contact__location__info__line">
          <img src={blackLocationIcon} alt="blackLocationIcon" />
          <p className="contact__location__info__line__text">16 Mechnikova Street, Kyiv, 01021, Ukraine</p>
        </div>
        <div className="contact__location__info__line">
          <img src={blackMailIcon} alt="blackLocationIcon" />
          <p className="contact__location__info__line__text">info@bulletagro.com</p>
        </div>
        <div className="contact__location__info__line">
          <img src={blackPhoneIcon} alt="blackLocationIcon" />
          <p className="contact__location__info__line__text">+41 79 674 96 03</p>
        </div>
      </div>
      {isLoaded ? (
        <GoogleMap center={center} zoom={15} mapContainerClassName="contact__location__map">
          <MarkerF position={center} />
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};
