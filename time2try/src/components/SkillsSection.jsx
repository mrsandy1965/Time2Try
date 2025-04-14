import React from 'react';

const SkillsSection = ({ skills, onRemoveSkill }) => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
            <button onClick={() => onRemoveSkill(skill)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 