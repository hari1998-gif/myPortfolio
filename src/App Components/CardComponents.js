import React from 'react';
import { NavLink } from 'react-router-dom';

const CardComponents = (props) => {
  return (
        <div className="project-card">
          <img src={props.imgsrc} alt={props.alt} className="fitness-img" />
          <div className="project-title">
            <h2>{props.title}</h2>
            <p>
              {props.desc}
            </p>
            <div className="project-btns">
              <NavLink to={props.view} className="btn" target='_blank'>
                VIEW
              </NavLink>
              <NavLink to={props.source} className="btn" target='_blank'>
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
  )
}

export default CardComponents