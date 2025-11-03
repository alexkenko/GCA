import React from 'react';
import '../styles/Pages.css';

const OurValues = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Values</h1>
        
        <section className="values-grid">
          <div className="value-card">
            <h2>Quality</h2>
            <p>
              We provide only qualified marine professionals who meet international standards 
              and certification requirements. Quality is at the core of our service delivery.
            </p>
          </div>

          <div className="value-card">
            <h2>Reliability</h2>
            <p>
              Shipowners can depend on us to provide qualified crew members when needed. 
              We understand the importance of timely crew placement for vessel operations.
            </p>
          </div>

          <div className="value-card">
            <h2>Professionalism</h2>
            <p>
              We maintain professional standards in all our operations, ensuring smooth 
              coordination between shipowners and marine professionals.
            </p>
          </div>

          <div className="value-card">
            <h2>Integrity</h2>
            <p>
              We conduct our business with honesty and transparency, building trust with 
              shipowners through reliable and ethical practices.
            </p>
          </div>

          <div className="value-card">
            <h2>Commitment</h2>
            <p>
              We are committed to meeting shipowners' crewing needs efficiently and effectively, 
              ensuring their vessels are staffed with qualified professionals.
            </p>
          </div>

          <div className="value-card">
            <h2>Safety</h2>
            <p>
              All marine professionals we provide meet safety standards and certifications. 
              Safety is a fundamental requirement in our crewing services.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurValues;

