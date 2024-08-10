import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import resume from './components/assets/data/resume.json'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='copyRight'>&copy; {resume.name}, {currentYear}</div>
    </footer>
  );
}

export default Footer;
