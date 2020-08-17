import React from 'react';
import Experience from './Experience.js';
import './WorkExperience.css';
import { experiences } from './data/workExperienceData.js';

function WorkExperience() {
  return (
    <div className="WorkExperience">
      Places I have worked:
      {experiences.map((experience, key) =>
        <Experience key={key} experience={experience} />
      )}
    </div>
  );
}

export default WorkExperience;