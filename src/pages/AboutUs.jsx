import React from 'react';
import '../styles/Pages.css';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>About Us</h1>
        
        <section className="content-section">
          <h2>Who We Are</h2>
          <p>
            Georgian Crewing Agency (GCA) is a professional crewing agency specializing in providing 
            qualified marine professionals to shipowners worldwide. We serve shipowners of various 
            vessel types, ensuring they receive skilled and certified crew members for their operations.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide shipowners with qualified marine professionals who meet all 
            necessary certifications and standards. We understand the critical importance of having 
            reliable, skilled crew members on board, and we are committed to delivering the highest 
            quality crewing services to our clients.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Scope</h2>
          <p>
            GCA provides marine professionals for various types of vessels operated by shipowners, including:
          </p>
          <ul className="expertise-list">
            <li>Container Ships</li>
            <li>Bulk Carriers</li>
            <li>Tankers</li>
            <li>General Cargo Vessels</li>
            <li>Ro-Ro Vessels</li>
            <li>Offshore Vessels</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Contact Our Team</h2>
          <p>
            Our experienced team is ready to assist shipowners with their crewing needs. 
            Contact us to discuss how we can provide qualified marine professionals for your vessels.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

