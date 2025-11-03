import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/gca-logo.jpg?v=2" alt="Georgian Crewing Agency Logo" />
          <span className="company-name">Georgian Crewing Agency</span>
        </div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/services">Services</a>
          <a href="/our-values">Our Values</a>
          <a href="/certification">Certification</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

