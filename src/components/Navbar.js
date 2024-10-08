import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbars">
        <NavLink to="/" className="navlink">Home</NavLink>
        <NavLink to="/about" className="navlink">About</NavLink>
        <NavLink to="/service" className="navlink">Services</NavLink>
        <NavLink to="/contact" className="navlink">Contact</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
