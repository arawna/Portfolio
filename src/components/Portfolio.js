import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

export default function Portfolio() {
  return (
    <section className="section portfolio" enum-data={5}>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container container">
        <div>
          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/3wdvom5.PNG"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">HRMS Aplication React Frontend</h3>
              <p className="portfolio__description">
                A full functionality human resources management system app like linkedin. It made with React
                and java
              </p>

              <a
                href="https://kodlama-io-hrms.herokuapp.com"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>

          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/buzk0zy.PNG"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">HRMS Aplication Spring Api Service</h3>
              <p className="portfolio__description">
                A full functionality human resources management system app like linkedin. It made with Java
                and Spring
              </p>

              <a
                href="https://kodlamaio-hrms.herokuapp.com/swagger-ui.html#/"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
