import React, { useState } from "react";
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [state, setState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setState({
      ...state,
      [name]: e,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_axh3m8o",
        "template_kpqsuvz",
        e.target,
        "user_x9c6VLB55vR0H0SYjWACs"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="section contact" enum-data={6}>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone className="contact__icon" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+90-541-299-4638</span>
            </div>
          </div>

          <div className="contact__information">
            <UilEnvelope className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">Fatih.kayan83@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <UilMapMarker className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Turkey - Denizli</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" onSubmit={handleSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__input"
                onChange={(e) => handleChange(e.target.value, "name")}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__input"
                onChange={(e) => handleChange(e.target.value, "email")}
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <input
              type="text"
              name="project"
              className="contact__input"
              onChange={(e) => handleChange(e.target.value, "project")}
            />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              cols="0"
              rows="7"
              name="message"
              className="contact__input"
              onChange={(e) => handleChange(e.target.value, "message")}
            />
          </div>

          <div>
            <button className="button button__flex" type="submit">
              Send Message
              <UilMessage className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
