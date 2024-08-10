import './App.css';
import Resume from './components/resume/Resume';
import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Footer from './Footer'
import settings from './website-setting.json'
import LandingPage from './components/landing-page/LandingPage';



function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {settings.landingPageEnabled && <Route path="/" element={<LandingPage />} />}
        {settings.resumeEnabled && <Route path="/resume" element={<Resume ref={componentRef} />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
