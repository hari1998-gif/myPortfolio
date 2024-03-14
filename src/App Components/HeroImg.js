import "./HeroImg.css";
import IntroImg from "../Assets/splashImgHome.jpg";
// import {Button, Link} from "@nextui-org/react";

import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="HeroPage">
      <div className="bgImg">
        <img src={IntroImg} alt="Intro" className="devImg" />
      </div>
      <div className="contentPage">
        <p>Hi. I'M A Freelancer.</p>
        <h1>React Developer.</h1>
          <Link to="/projects"className="btn" >
            Projects
          </Link>
          <Link to="/contact" className="btn-light" >
            Contact
          </Link>
      </div>
    </div>
  );
}

export default HeroImg;