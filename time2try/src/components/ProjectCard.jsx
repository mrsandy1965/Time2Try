import React from 'react';

const ProjectCard = ({ title, description, time }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-footer">
        <span className="project-time">{time}hr</span>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default ProjectCard; 