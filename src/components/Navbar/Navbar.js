import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
    </div>
    <div className="navbar-right">
      <div className="navbar-icon">☰</div>
      <div className="navbar-avatar">N</div>
    </div>
  </nav>
);

export default Navbar; 