import "./ProjectCard.css";
import ProjectData from "./ProjectCardData";

import React from "react";
import CardComponents from "./CardComponents";

const ProjectCard = () => {
  return (
    <div className="project-data">
      <div className="project-heading">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-container">
      {ProjectData.map((val, ind) => {
        return (
            <CardComponents 
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                desc = {val.desc}
                view = {val.view}
                source = {val.source}
                alt = {val.alt}
            />
        )
      })}
      </div>
    </div>
  );
};

export default ProjectCard;
