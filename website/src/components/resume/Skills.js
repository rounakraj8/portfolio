import React from 'react';
import './Skills.css';
import resume from './../assets/data/resume.json'

const Skills = () => (
  <section className="skills section">
    <h3>SKILLS</h3>
    {
      resume.skills.map(skill => (
        <p>{skill}</p>
      ))
    }
  </section>
);

export default Skills;
