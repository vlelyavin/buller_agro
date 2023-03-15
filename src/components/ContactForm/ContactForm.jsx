import { Button } from "../Button";
import "./ContactForm.css";

export const ContactForm = ({ title, description }) => {
  return (
    <form className="contact__form">
      {title && <h3 className="contact__form__title">Do you have any questions?</h3>}
      {description && <p className="contact__form__description">Write to us and our manager will help you</p>}
      <div className="contact__form__inputarea">
        <div className="contact__form__inputarea__details">
          <input type="text" placeholder="Name" className="contact__form__inputarea__details__input" />
          <input type="email" placeholder="E-mail" className="contact__form__inputarea__details__input" />
          <input type="text" placeholder="Company" className="contact__form__inputarea__details__input" />
          <input type="text" placeholder="Phone number" className="contact__form__inputarea__details__input" />
        </div>
        <textarea className="contact__form__inputarea__details__textarea" placeholder="Text message" />
      </div>
      <div className="contact__form__button__container">
        <Button title="Send" width="210px" backgroundColor="var(--black)" />
      </div>
    </form>
  );
};
