import "../App Components/Footer.css";
import {
  MdOutlineMapsHomeWork,
  MdPhoneInTalk,
  MdOutlineAttachEmail,
} from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="location">
          <MdOutlineMapsHomeWork
            size={20}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <div>
            <p>Sai Nilayam, Block-B, Kondapur</p>
            <p>Hyderabad</p>
          </div>
        </div>
        <div className="phone">
          <h4>
            <MdPhoneInTalk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            +91 9908877037
          </h4>
        </div>
        <div className="email">
          <h4>
            <MdOutlineAttachEmail
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            harikanaparthi15@gmail.com
          </h4>
        </div>
      </div>
      <div className="right">
        <h3>About Me</h3>
        <p>
          As a skilled Full Stack Web Developer, I specialize in crafting
          visually captivating and intuitive web interfaces. Proficient in HTML,
          CSS, JavaScript, and ReactJS, I adeptly transform designs into fully
          functional websites, prioritizing exceptional user experiences
        </p>
      </div>
      <div className="center">
        <h2>CONNECT WITH ME ON</h2>
        <div className="reachMe">
          <AiFillGithub
            size={30}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaLinkedin
            size={30}
            style={{ color: "white", marginRight: "2rem" }}
          />
          <FaFacebook
            size={30}
            style={{ color: "white", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
