import React from 'react';
import './resume.css';

export const ProfSkills = ({ skill, percentage }) => {
  return (
    <div className="skillContainer">
      <div className="skillHeader">
        <span className="skillName">{skill}</span>
        
      </div>
      <div className="progressBar">
        <div className="filledBar" style={{ width: `${percentage}%` }}></div>
        <span className="skillPercentage">{percentage}%</span>
      </div>
    </div>
  );
};
