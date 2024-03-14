import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HeroImgPage from '../HeroImgPage';
import Form from '../Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPage heading="Contact Me" description="Let's Have a chat " />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact