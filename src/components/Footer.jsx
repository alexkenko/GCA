import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Georgian Crewing Agency</h3>
            <p>Providing qualified marine professionals to shipowners worldwide. Your trusted partner in maritime crewing services.</p>
            <div className="footer-contact">
              <p><strong>Address:</strong> Maiakovski Ave, N41, Batumi, Georgia</p>
              <p><strong>Phone:</strong> 593 10 78 78; 592 44 44 36</p>
              <p><strong>Email:</strong> <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a></p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/our-values">Our Values</Link></li>
              <li><Link to="/certification">Certification</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/apply">Apply</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/legal-disclaimer">Legal Disclaimer</Link></li>
              <li><Link to="/gdpr-compliance">GDPR Compliance</Link></li>
              <li><Link to="/no-bribe-policy">No Bribe Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Georgian Crewing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

