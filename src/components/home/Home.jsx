import React from "react";
import "./Home.css";

import profile from "../../images/profileImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="home">
      <div className="intro-container">
        <div className="intro">
          <img src={profile} alt="profile" />
          <p>
            Professional designer combines his photography degree with his
            marketing degree to find the right balance between creativity and
            commercial sense. Vincent is an experienced all round photographer
            and moved to Stirling at the end of 2017.
          </p>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <h2>portfolio</h2>
          <h2>design</h2>
          <h4>outside, tasty on the inside.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            tellus cras adipiscing enim. Ut porttitor leo a diam sollicitudin.
            Turpis in eu mi bibendum neque egestas congue{" "}
            <a href="#0">quisque egestas</a>. Viverra adipiscing at in tellus
            integer.
          </p>
          <button className="btn_learn_more">Learn More</button>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <div id="item1"></div>
        </div>
        <div className="grid-item">
          <div id="item2"></div>
        </div>
        <div className="grid-item">
          <div id="item3"></div>
        </div>
        <div className="grid-item">
          <div id="item4"></div>
        </div>
        <div className="grid-item">
          <div id="item5"></div>
        </div>
        <div className="grid-item">
          <div id="item6"></div>
        </div>
        <div className="grid-item">
          <div id="item7"></div>
        </div>
        <div className="grid-item">
          <div id="item8"></div>
        </div>
        <div className="grid-item">
          <div id="item9"></div>
        </div>
      </div>
      <button id="grid-button">Learn More</button>
      <div className="contact">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Enter your Name" />
            <input type="text" placeholder="Enter a valid email address" />
            <textarea cols="30" rows="5" />
          </form>
          <button id="submit">Submit</button>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <div id="icons">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            <FontAwesomeIcon icon={["fab", "twitter"]} />
            <FontAwesomeIcon icon={["fab", "vimeo"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </div>
          <p>1 (234) 567-891</p>
          <p>1 (234) 567-891</p>
        </div>
      </div>
    </div>
  );
}
