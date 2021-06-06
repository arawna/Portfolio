import React from "react";
import { Link } from "react-scroll";
import { UilArrowUp } from "@iconscout/react-unicons";

export default function ScrollUp() {
  return (
    <Link to="home" className="scrollup" id="scroll-up">
      <UilArrowUp className="scrollup__icon" />
    </Link>
  );
}
