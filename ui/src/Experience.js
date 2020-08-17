import React from 'react';
import Position from './Position';
import './Experience.css';

class Experience extends React.Component {
  render() {
    const { experience } = this.props;
    return (
      <div>
      <span className="Experience">
        {experience.organizationName} {experience.from} - {experience.to}
        {experience.positions.map((position, key) =>
          <Position key={key} position={position}/>
        )}
      </span>
      <span>{experience.from} - {experience.to}
      </span>
      </div>

    );
  }
}

export default Experience;