import React from 'react';
import '../styles/Pages.css';

const Services = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Services</h1>
        
        <section className="services-grid">
          <div className="service-card">
            <h2>Marine Professionals Supply</h2>
            <p>
              We provide qualified marine professionals to shipowners for various vessel types. 
              Our crew members are certified, experienced, and ready to meet your operational requirements.
            </p>
            <ul>
              <li>Deck Officers</li>
              <li>Engine Officers</li>
              <li>Ratings (Deck & Engine)</li>
              <li>Catering Staff</li>
              <li>Specialized Personnel</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Crew Verification</h2>
            <p>
              All marine professionals provided by GCA undergo thorough verification to ensure 
              they meet the required standards and certifications.
            </p>
            <ul>
              <li>Credential verification</li>
              <li>Certification validation</li>
              <li>Background checks</li>
              <li>Medical clearance</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Vessel Type Coverage</h2>
            <p>
              We provide crew for various types of vessels operated by shipowners, ensuring 
              the right professionals for each specific vessel type.
            </p>
            <ul>
              <li>Container vessels</li>
              <li>Bulk carriers</li>
              <li>Tankers</li>
              <li>General cargo vessels</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Reliable Service</h2>
            <p>
              We ensure timely and efficient placement of marine professionals to meet 
              shipowners' crewing schedules and operational needs.
            </p>
            <ul>
              <li>Timely crew placement</li>
              <li>Continuous support</li>
              <li>Flexible arrangements</li>
              <li>Professional coordination</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

