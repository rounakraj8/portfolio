import React from 'react';
import './Interests.css';
import resume from './../assets/data/resume.json'


const Interests = () => (
  <section className="interests section">
    <h3>INTERESTS</h3>
    <p>{resume.technicalInterests.join(", ")}</p>
  </section>
);

export default Interests;

