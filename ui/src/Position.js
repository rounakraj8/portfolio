import React from 'react';
import './Position.css';

class Position extends React.Component {
  render() {
    const { position } = this.props;
    return (
      <div className="Position">
        <span>{position.designation} &nbsp;
        <i>From</i> {position.from} <i>To</i> {position.to}
        </span>
      </div>
    );
  }
}

export default Position;