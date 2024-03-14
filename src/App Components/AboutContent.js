import { Link } from "react-router-dom";
import "./AboutContent.css";
import BelowImage from "../Assets/Reactabout123.webp";
import AboveImage from "../Assets/devPtImg.gif";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left-about">
        <h1>Who Am I?</h1>
        <p>
          I am React Front-End Developer. I create responsive secure websites
          for my clients.
        </p>
        <Link className="btn" to="/contact">
          CONTACT ME
        </Link>
      </div>
      <div className="right-about">
        <div className="img-container">
          <div className="top">
            <img src={AboveImage} alt="Item" className="img" />
          </div>
          <div className="bottom">
            <img src={BelowImage} alt="Item" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
