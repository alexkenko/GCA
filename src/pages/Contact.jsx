import React, { useState } from 'react';
import '../styles/Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              For shipowners seeking qualified marine professionals, we're here to assist. 
              Contact us through any of the channels below or fill out the contact form 
              to discuss your crewing needs.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@georgiancrewing.com</p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p>+995 XXX XXX XXX</p>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>Tbilisi, Georgia</p>
              </div>

              <div className="contact-item">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="crew-request">Crew Request</option>
                  <option value="vessel-inquiry">Vessel Crewing Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

