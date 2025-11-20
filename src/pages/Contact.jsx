import React from 'react';
import '../styles/Pages.css';
import { generateBrochure } from '../utils/pdfBrochure';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content-single">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              For shipowners seeking qualified marine professionals, we're here to assist. 
              Contact us through any of the channels below to discuss your crewing needs.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
              <button onClick={generateBrochure} className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }}>
                📄 Download Company Brochure (PDF)
              </button>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a></p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <div className="phone-grid">
                  <div className="phone-row">
                    <div className="phone-number"><a href="tel:+995555300088">+995 555 300 088</a></div>
                    <div className="phone-name">Office (Working Hours)</div>
                  </div>
                  <div className="phone-row">
                    <div className="phone-number"><a href="tel:+995593107878">+995 593 10 78 78</a></div>
                    <div className="phone-name">Capt. Guram Shanidze</div>
                  </div>
                  <div className="phone-row">
                    <div className="phone-number"><a href="tel:+995597040418">+995 597 04 04 18</a></div>
                    <div className="phone-name">Mr. Zurab Saladze</div>
                  </div>
                  <div className="phone-row">
                    <div className="phone-number"><a href="tel:+995555126992">+995 555 12 69 92</a></div>
                    <div className="phone-name">Capt. Archil Varshanidze</div>
                  </div>
                  <div className="phone-row">
                    <div className="phone-number"><a href="tel:+995592444436">+995 592 444436</a></div>
                    <div className="phone-name">Mr. Tornike Turmanidze (24/7)</div>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>Maiakovski Ave, N41<br />Batumi, Georgia</p>
              </div>

              <div className="contact-item">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="contact-item">
                <h3>Follow Us</h3>
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
                    <span>Visit our Facebook page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

