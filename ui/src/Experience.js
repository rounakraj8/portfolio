import React from 'react';
import Position from './Position';
import './Experience.css';

class Experience extends React.Component {
  render() {
    const { experience } = this.props;
    return (
      <div className="Experience">
        <div className="Experience-header">
          <div>{experience.organizationName}</div> 
          <div>{experience.from} - {experience.to}</div>
        </div>
  
        <div>{experience.positions.map((position, key) =>
          <Position key={key} position={position} />
        )}
        </div>
      </div>

    );
  }
}

export default Experience;