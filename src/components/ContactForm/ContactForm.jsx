import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../Button";
import "./ContactForm.css";

export const ContactForm = ({ title, description }) => {
  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors({});
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Your message has been sent");
            setValues({
              name: "",
              email: "",
              company: "",
              phoneNumber: "",
              message: "",
            });
            setErrors({});
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      {title && <h3 className="contact__form__title">Do you have any questions?</h3>}
      {description && <p className="contact__form__description">Write to us and our manager will help you</p>}
      <div className="contact__form__inputarea">
        <div className="contact__form__inputarea__details">
          <div className="contact__form__inputarea__details__input__container">
            <input
              type="text"
              value={values.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Name"
              className="contact__form__inputarea__details__input"
            />
            {errors.name && <p className="contact__form__inputarea__details__error">{errors.name}</p>}
          </div>
          <div className="contact__form__inputarea__details__input__container">
            <input
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="E-mail"
              className="contact__form__inputarea__details__input"
            />
            {errors.email && <p className="contact__form__inputarea__details__error">{errors.email}</p>}
          </div>
          <div className="contact__form__inputarea__details__input__container">
            <input
              type="text"
              value={values.company}
              onChange={handleInputChange}
              name="company"
              placeholder="Company"
              className="contact__form__inputarea__details__input"
            />
          </div>
          <div className="contact__form__inputarea__details__input__container">
            <input
              type="text"
              value={values.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              placeholder="Phone number"
              className="contact__form__inputarea__details__input"
            />
            {errors.phoneNumber && <p className="contact__form__inputarea__details__error">{errors.phoneNumber}</p>}
          </div>
        </div>
        <div className="contact__form__inputarea__details__input__container">
          <textarea
            value={values.message}
            onChange={handleInputChange}
            className="contact__form__inputarea__details__textarea"
            name="message"
            placeholder="Text message"
          />
          {errors.message && <p className="contact__form__inputarea__details__error">{errors.message}</p>}
        </div>
      </div>
      <div className="contact__form__button">
        <Button title="Send" width="210px" backgroundColor="var(--black)" />
      </div>
      <div className="contact__form__button__mobile">
        <Button title="Send" width="100%" backgroundColor="var(--black)" />
      </div>
    </form>
  );
};
