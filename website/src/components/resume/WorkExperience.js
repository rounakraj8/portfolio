import React from 'react';
import './WorkExperience.css';
import resume from './../assets/data/resume.json'

const WorkExperience = () => (
  <section className="work-experience section">
    <h3>WORK EXPERIENCE</h3>
    {resume.workExperiences.map(workExperience =>
      <div className="job">
        <div className="designationCompanyTimePeriod">
          <h4 className="jobDesignation">{workExperience.designation}</h4>
          <div className="companyAndTimePeriod">{workExperience.company} | {workExperience.fromTimePeriod} - {workExperience.toTimePeriod}</div>
        </div>
        {workExperience.jobSummary &&
          <ul>
            {workExperience.jobSummary.map(summary => (
              <li>{summary}</li>
            ))}
          </ul>
        }
      </div>
    )
    }
  </section>
);

export default WorkExperience;
