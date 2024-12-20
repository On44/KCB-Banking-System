import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          KCB Bank
        </Link>
        
        <ul className="navbar-links">
          <li><Link to="/dashboard" className="navbar-link">Home</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
          <li><Link to="/profile" className="navbar-link">Profile</Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
