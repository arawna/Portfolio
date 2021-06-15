import React, { useEffect, useState } from "react";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilBook,
  UilMoon,
  UilSun,
} from "@iconscout/react-unicons";
import { Link } from "react-scroll";

export default function Header() {
  const [state, setState] = useState({
    isBottomNavOpen: false,
    theme: "light",
  });
  const darkTheme = "dark-theme";
  const [active, setActive] = useState(1);

  function scollActive() {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        let enumData = Number(current.getAttribute("enum-data"));
        setActive(enumData);
      }
    });

    navScroll(scrollY);
    scrollUp(scrollY);
  }

  function navScroll(scrollY) {
    const nav = document.getElementById("header");
    if (scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }

  function scrollUp(scrollY) {
    const scrollUp = document.getElementById("scroll-up");
    if (scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }

  const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? "dark" : "light";
  };

  useEffect(() => {
    function getTheme() {
      console.log("aaa");
      const selectedTheme = localStorage.getItem("selected-theme");
      const theme = getCurrentTheme();
      setState({
        ...state,
        theme: theme,
      });

      if (selectedTheme) {
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
          darkTheme
        );
      }
    }
    getTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    const theme = getCurrentTheme();
    localStorage.setItem("selected-theme", theme);
  };

  window.addEventListener("scroll", scollActive);

  const handleToggleBottomNav = () => {
    setState({
      ...state,
      isBottomNavOpen: !state.isBottomNavOpen,
    });
  };

  const HandleMenuLinkClick = (value) => {
    setState({
      ...state,
      isBottomNavOpen: false,
    });

    setActive(value);
  };

  const getNavLinkClass = (value) => {
    return active === value ? "active-link" : "";
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__logo">Ali Hocaoğlu</div>

        <div
          className={`nav__menu ${state.isBottomNavOpen ? "show-menu" : ""}`}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                spy={true}
                className={`nav__link ${getNavLinkClass(1)}`}
                onClick={() => HandleMenuLinkClick(1)}
              >
                <UilEstate className="nav__icon" /> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                className={`nav__link ${getNavLinkClass(2)}`}
                onClick={() => HandleMenuLinkClick(2)}
              >
                <UilUser className="nav__icon" /> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                spy={true}
                className={`nav__link ${getNavLinkClass(3)}`}
                onClick={() => HandleMenuLinkClick(3)}
              >
                <UilFileAlt className="nav__icon" /> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="qualification"
                spy={true}
                className={`nav__link ${getNavLinkClass(4)}`}
                onClick={() => HandleMenuLinkClick(4)}
              >
                <UilBook className="nav__icon" /> Qualification
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="portfolio"
                spy={true}
                className={`nav__link ${getNavLinkClass(5)}`}
                onClick={() => HandleMenuLinkClick(5)}
              >
                <UilScenery className="nav__icon" /> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                className={`nav__link ${getNavLinkClass(6)}`}
                onClick={() => HandleMenuLinkClick(6)}
              >
                <UilMessage className="nav__icon" /> Contact Me
              </Link>
            </li>
          </ul>
          <UilTimes className="nav__close" onClick={handleToggleBottomNav} />
        </div>

        <div className="nav__btns">
          {state.theme === "dark" ? (
            <UilMoon
              className="change-theme"
              id="theme-button"
              onClick={handleToggleTheme}
            />
          ) : (
            <UilSun
              className="change-theme"
              id="theme-button"
              onClick={handleToggleTheme}
            />
          )}
          <div className="nav__toggle" onClick={handleToggleBottomNav}>
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
}
