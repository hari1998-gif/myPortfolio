import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HeroImgPage from '../HeroImgPage';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPage heading="Projects." description="Some of my recent works" />
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Projects