import React from "react";
import team from "../data";
import ProjectCards from "../components/Project";

const Team = () => {
  return (
    <div className="margin3">
    <React.Fragment>
      <div className="container">
        <div className="modal-footer" />
        <div className="grid-container horizontal-line">
          {team.map((project) => (
            <ProjectCards
              id={project.id}
              key={project.id}
              image={project.image}
              name={project.name}
              github={project.github}
              deploy={project.deploy}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
    </div>
  );
};

export default Team;
