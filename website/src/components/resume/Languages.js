import React from 'react';
import './Languages.css';
import resume from './../assets/data/resume.json'
import settings from "./../../website-setting.json"

const Languages = () => {  

  if (!settings.resume.launguagesEnabled) {
    return null; // Return null to render nothing
  }
  
  return (
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
)};

export default Languages;
