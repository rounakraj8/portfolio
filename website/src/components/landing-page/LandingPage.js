import React, { forwardRef } from 'react';

import './LandingPage.css';
import settings from "../../website-setting.json"

const LandingPage = forwardRef((props, ref) => {

  if (!settings.landingPageEnabled) {
    return null; // Return null to render nothing
  }

  return (
    <div ref={ref} className="landing-page-container">
      Hello
    </div>
  )
});

LandingPage.displayName = 'LandingPage';

export default LandingPage;
