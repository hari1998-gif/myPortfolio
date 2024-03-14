import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HeroImgPage from '../HeroImgPage';
import AboutContent from '../AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPage heading="About Me" description="I am a FRONT-END DEVELOPER" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About