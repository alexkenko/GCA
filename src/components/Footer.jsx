import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-contact-section">
            <h3>Georgian Crewing Agency</h3>
            <div className="footer-contact">
              <p><strong>Address:</strong> Maiakovski Ave, N41, Batumi, Georgia</p>
              <div className="footer-phone-grid">
                <p><strong>Phone:</strong></p>
                <div className="phone-grid">
                  <div className="phone-row">
                    <span className="phone-number">+995 555 300 088</span>
                    <span className="phone-name">Office (Working Hours)</span>
                  </div>
                  <div className="phone-row">
                    <span className="phone-number">+995 593 10 78 78</span>
                    <span className="phone-name">Capt. Guram Shanidze</span>
                  </div>
                  <div className="phone-row">
                    <span className="phone-number">+995 597 04 04 18</span>
                    <span className="phone-name">Mr. Zurab Saladze</span>
                  </div>
                  <div className="phone-row">
                    <span className="phone-number">+995 555 12 69 92</span>
                    <span className="phone-name">Capt. Archil Varshanidze</span>
                  </div>
                  <div className="phone-row">
                    <span className="phone-number">+995 592 444436</span>
                    <span className="phone-name">Mr. Tornike Turmanidze (24/7)</span>
                  </div>
                </div>
              </div>
              <p><strong>Email:</strong> <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a></p>
              <div className="social-media">
                <a 
                  href="https://www.facebook.com/p/Georgian-Crewing-Agency-100071801580957/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Visit our Facebook page"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
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

