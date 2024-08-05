import React from 'react';
import './Skills.css';
import resume from './../assets/data/resume.json'
import settings from "./../../website-setting.json"

const Skills = () => {
  
  if (!settings.resume.skillsEnabled) {
    return null; // Return null to render nothing
  }

  return(
  <section className="skills section">
    <h3>SKILLS</h3>
    {
      resume.skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))
    }
  </section>
)};

export default Skills;
