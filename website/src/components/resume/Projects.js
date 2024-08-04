import React from 'react';
import './Projects.css';
import resume from './../assets/data/resume.json'

import { capitalizeEachWord } from './../common/utils'


const Projects = () => (
  <section className="projects section">
    <h3>PROJECTS</h3>
    {
      resume.projects.map(project => (
        <div className="project">
          <div className="projectAndOrg">
            <h4 className="projectName">{capitalizeEachWord(project.name)}</h4>
            <p className="orgName">{project.organization}</p>
          </div>
          <p>{project.summary}</p>
          <p>{project.skills && "Technologies:  "}
            <i>
              {project.skills.join(', ')}
            </i>
          </p>
        </div>
      ))
    }

  </section>
);

export default Projects;
