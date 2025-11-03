import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/gca-logo.png?v=1" alt="Georgian Crewing Agency Logo" />
          <span className="company-name">Georgian Crewing Agency</span>
        </div>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/our-values">Our Values</Link>
          <Link to="/certification">Certification</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

