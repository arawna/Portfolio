import React from "react";
import TurkishResume from "../assets/pdf/My_Resume_Turkish.pdf";
import EnglishResume from "../assets/pdf/My_Resume_English.pdf";
import { UilDownloadAlt } from "@iconscout/react-unicons";

export default function About() {
  return (
    <section className="about section" enum-data={2}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src="https://avatars.githubusercontent.com/u/67177385??=4"
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            Web & Mobile developer, working in web and mobile technologies, delivering
            quality work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br /> web development
              </span>
            </div>
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
              Years <br /> Java development
              </span>
            </div>
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
              Completed <br /> project
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              href={TurkishResume}
              download="Turkish_Resume.pdf"
              className="button button__flex"
            >
              Turkish Resume
              <UilDownloadAlt className="button__icon" />
            </a>
            <a
              href={EnglishResume}
              download="English_resume.pdf"
              className="button button__flex"
            >
              English Resume
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
