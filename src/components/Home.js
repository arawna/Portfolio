import React from "react";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section className="home section" enum-data={1}>
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/ali-hocaoglu-304224207/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://github.com/arawna"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <UilGithubAlt />
            </a>
            <a
              href="https://www.instagram.com/alihocaoglu34/"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <UilInstagram />
            </a>
          </div>

          <div className="home__img">
            <img
              className="home__img-img"
              src="https://avatars.githubusercontent.com/u/67177385??=4"
              alt=""
            />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'am Ali</h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">
              High level experience in java and web design and development
              knowledge, producing quality work.
            </p>
            <Link to="contact" spy={true} className="button button__flex">
              Contact Me <UilMessage className="button__icon" />
            </Link>
          </div>
        </div>

        <div className="home__scroll">
          <Link to="about" className="home__scroll-button button__flex">
            <UilMouseAlt className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll Down</span>
            <UilArrowDown className="home_scrool-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
