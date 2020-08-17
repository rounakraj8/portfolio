import React from 'react';
import PortfolioHeader from './PortfolioHeader.js';
import WorkExperience from './WorkExperience.js';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="Portfolio-header">
            <PortfolioHeader />
            <WorkExperience />
        </div>
    );
}

export default Portfolio;