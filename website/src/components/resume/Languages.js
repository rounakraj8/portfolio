import React from 'react';
import './Languages.css';
import resume from './../assets/data/resume.json'

const Languages = () => (
  <section className="languages section">
    <h3>LANGUAGES</h3>
    <p>
      {
        resume.languages.map(language => (
          language.name + "(" + language.fluency + ")"
        )).join(", ")
      }
    </p>
  </section>
);

export default Languages;
