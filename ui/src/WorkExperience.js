import React from 'react';
import Experience from './Experience.js';
import './WorkExperience.css';
import { experiences } from './data/workExperienceData.js';

function WorkExperience() {
  return (
    <div>
      <div className="WorkExperience-header">
        Places I have worked:</div>
      <div className="WorkExperience-experience">
        {experiences.map((experience, key) =>
          <Experience key={key} experience={experience} />
        )}
      </div>
    </div>
  );
}

export default WorkExperience;