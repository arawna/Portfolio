import React, { useState } from "react";
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

export default function Qualification() {
  const [state, setState] = useState({
    active: "",
  });

  const handleActive = (value) => {
    setState({
      ...state,
      active: value,
    });
  };

  const getActiveClass = (value) => {
    return state.active === value ? "qualification__active" : "";
  };

  return (
    <section className="qualification section" enum-data={4}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button__flex ${getActiveClass(
              "education"
            )}`}
            onClick={() => handleActive("education")}
          >
            <UilGraduationCap className="qualification__icon" /> Education
          </div>
          <div
            className={`qualification__button button__flex ${getActiveClass(
              "work"
            )}`}
            onClick={() => handleActive("work")}
          >
            <UilBriefcaseAlt className="qualification__icon" /> Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${getActiveClass("education")}`}
            data-content
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Engineering
                </h3>
                <span className="qualification__subtitle">
                  Tekirdağ Namık Kemal University
                </span>

                <div className="qualification__calendat">
                  <UilCalendarAlt /> 2018 - Now
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${getActiveClass("work")}`}
            data-content
          >
            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">Uzum Technology</span>
                <div className="qualification__calendat">
                  <UilCalendarAlt /> 2021 For 3 month
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mobile Developer</h3>
                <span className="qualification__subtitle">Wannart</span>

                <div className="qualification__calendat">
                  <UilCalendarAlt /> 2021 - Now
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
