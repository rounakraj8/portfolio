// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for styling

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <NavLink  to="/" activeClassName="active-link">
            Rounak Raj
          </NavLink>
        </div>
        <ul className="nav-right">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active-link">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
