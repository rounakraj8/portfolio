import React from 'react';
import './Education.css';
import resume from './../assets/data/resume.json'



const Education = () => (
  <section className="education section">
    <h3>EDUCATION</h3>
    {
      resume.education.map(e => (
        <div className="degree">
          <h4>{e.course} ({e.specialization})</h4>
          <p>{e.institutionName},{e.institutionLocation}</p>
          <p>{e.fromYear} - {e.toYear}</p>
        </div>

      ))
    }

  </section>
);

export default Education;
