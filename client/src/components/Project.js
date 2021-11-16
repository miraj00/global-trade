import React from "react";

function ProjectCards(props) {
  return (
    <div className={`grid-item gallery__item--${props.id}`}>
      <img src={props.image} alt={props.name} className="gallery__img" />
      <div className="desc">
        {" "}
        <h5>{props.name}</h5>{" "}
      </div>

      <div className="dep-links">
        <a href={props.github} target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github Repository"
            id="github-icon"
          />
        </a>
        <a href={props.deploy} target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/monitor.png"
            alt="Deployed Site"
            id="project-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
