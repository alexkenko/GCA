import React from 'react';
import '../styles/Pages.css';

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

            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a></p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p><a href="tel:+995555300088">+995 555 300 088</a> - Office (Working Hours)</p>
                <p><a href="tel:+995593107878">+995 593 10 78 78</a> - Capt. Guram Shanidze (24/7)</p>
                <p><a href="tel:+995597040418">+995 597 04 04 18</a> - Mr. Zurab Saladze</p>
                <p><a href="tel:+995555126992">+995 555 12 69 92</a> - Capt. Archil Varshanidze</p>
                <p><a href="tel:+995592444436">+995 592 444436</a> - Mr. Tornike Surmanidze</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

