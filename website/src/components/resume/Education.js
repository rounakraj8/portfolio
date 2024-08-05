 
import React from 'react';
import './Education.css';
import resume from './../assets/data/resume.json'
import settings from "./../../website-setting.json"



const Education = () => {
  
  if (!settings.resume.educationEnabled) {
    return null; // Return null to render nothing
  }
  
  return (
  <section className="education section">
    <h3>EDUCATION</h3>
    {
      resume.education.map((e, index) => (
        <div key={index} className="degree">
          <h4>{e.course} ({e.specialization})</h4>
          <p>{e.institutionName},{e.institutionLocation}</p>
          <p>{e.fromYear} - {e.toYear}</p>
        </div>

      ))
    }

  </section>
)};

export default Education;
