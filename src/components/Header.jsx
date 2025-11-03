import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/gca-logo.png?v=1" alt="Georgian Crewing Agency Logo" />
          <span className="company-name">Georgian Crewing Agency</span>
        </div>
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about-us" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/our-values" onClick={closeMenu}>Our Values</Link>
          <Link to="/certification" onClick={closeMenu}>Certification</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/apply" onClick={closeMenu}>Apply</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

