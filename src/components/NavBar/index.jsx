import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'
// import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/menu">
          Menu
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
