import React from 'react';
import './Position.css';

class Position extends React.Component {
  render() {
    const { position } = this.props;
    return (
      <div className="Position">
        <span className="Position-row">
        <span>{position.designation}</span>
        <span>{position.from} - {position.to}</span>
        </span>
      </div>
    );
  }
}

export default Position;