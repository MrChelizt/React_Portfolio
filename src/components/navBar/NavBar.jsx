import React from "react";
import "./NavBar.css";

import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="logo" />
      <a href="#0">
        <FontAwesomeIcon icon={faBars} id="hamburger" />
      </a>
    </div>
  );
}
