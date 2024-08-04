import React, { forwardRef } from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Interests from './Interests';
import './Resume.css';

const Resume = forwardRef((props, ref) => (
  <div ref={ref} className="resume-container">
    <Header />
    <div className="resume-container1">
      <div className="left-content">

        <WorkExperience />
        <Projects />
      </div>
      <div className="right-sidebar">
        <Education />
        {/* <Awards /> */}
        <Skills />
        <Languages />
        <Interests />
      </div>
    </div>
  </div>
));

export default Resume;
