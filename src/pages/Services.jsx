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
            <p style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0, 51, 102, 0.05)', borderRadius: '8px', fontSize: '0.95rem' }}>
              <strong>Our Certifications:</strong> სსიპ "საზღვაო ტრანსპორტის სააგენტო", ISO 9001:2015, MLC 2006
            </p>
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

        {/* Contact Information Section */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--marine-blue-dark)', fontSize: '2.5rem' }}>
            Contact Our Team
          </h2>

          {/* General Contact Info */}
          <div className="luxury-box" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              General Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <div>
                <strong style={{ color: 'var(--marine-blue)', display: 'block', marginBottom: '0.5rem' }}>Email:</strong>
                <a href="mailto:crewing@gcagency.ge" style={{ color: 'var(--marine-blue-dark)', fontSize: '1.1rem', textDecoration: 'none' }}>
                  crewing@gcagency.ge
                </a>
              </div>
              <div>
                <strong style={{ color: 'var(--marine-blue)', display: 'block', marginBottom: '0.5rem' }}>Phone:</strong>
                <a href="tel:+995555300088" style={{ color: 'var(--marine-blue-dark)', fontSize: '1.1rem', textDecoration: 'none' }}>
                  +995 555 300 088
                </a>
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>Office (Working Hours)</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="services-grid" style={{ marginTop: '2rem' }}>
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                Capt. Guram Shanidze
              </h3>
              <a href="tel:+995593107878" className="team-phone-link">
                +995 593 10 78 78
              </a>
            </div>

            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                Mr. Zurab Saladze
              </h3>
              <a href="tel:+995597040418" className="team-phone-link">
                +995 597 04 04 18
              </a>
            </div>

            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                Capt. Archil Varshanidze
              </h3>
              <a href="tel:+995555126992" className="team-phone-link">
                +995 555 12 69 92
              </a>
            </div>

            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                Mr. Tornike Turmanidze
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                (24/7 Available)
              </p>
              <a href="tel:+995592444436" className="team-phone-link">
                +995 592 444436
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
