import React from "react";

const ProjectCard = ({ title, description, github, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;
