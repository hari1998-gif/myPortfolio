import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 1){
        setColor(true);
    }
    else {
        setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "nav-header nav-header-bg" : "nav-header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item item1">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item item2">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item item3">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item item4">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <IoMdClose size={20} style={{ color: "white" }} />
        ) : (
          <GiHamburgerMenu size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
