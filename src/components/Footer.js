import React from "react";
import { Link } from "react-scroll";
import { UilLinkedin, UilInstagram, UilGithub } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Fatih Kayan</h1>
            <span className="footer__subtitle">
              Frontend & Mobile Developer
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to="portfolio" className="footer__link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer__link">
                Contactme
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/fatihkayan/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              <UilLinkedin />
            </a>
            <a
              href="https://www.instagram.com/fatihkayann20/"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilInstagram />
            </a>
            <a
              href="https://github.com/fatihkayan20"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <UilGithub />
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Fatih Kayan. All right reserved. </p>
      </div>
    </footer>
  );
}
