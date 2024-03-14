import "./HeroImgPage.css";
import React from 'react'

const HeroImgPage = (props) => {
  return (
    <div className="hero-img">
      <div className="bgImg2"></div>
        <div className="hero-container">
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
        </div>

    </div>
  )
}

export default HeroImgPage