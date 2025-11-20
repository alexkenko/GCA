import React from 'react';
import '../styles/Pages.css';
import { generateBrochure } from '../utils/pdfBrochure';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="hero-content">
          <h1>Welcome to Georgian Crewing Agency</h1>
          <p className="hero-subtitle">Providing Qualified Marine Professionals to Shipowners Worldwide</p>
          <div className="hero-buttons">
            <a href="/apply" className="btn btn-primary">Submit Application</a>
            <button onClick={generateBrochure} className="btn btn-secondary">Download Brochure</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose GCA?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Qualified Crew</h3>
              <p>We provide certified and experienced marine professionals who meet international standards and requirements.</p>
            </div>
            <div className="feature-card">
              <h3>Various Vessel Types</h3>
              <p>Our crew is available for all types of vessels including container ships, bulk carriers, tankers, and more.</p>
            </div>
            <div className="feature-card">
              <h3>Reliable Service</h3>
              <p>We ensure timely placement of qualified crew members to meet your vessel's operational needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <div className="container">
          <div className="luxury-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2>About Georgian Crewing Agency</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', maxWidth: '900px', margin: '1.5rem auto' }}>
              Georgian Crewing Agency (GCA) is a professional crewing agency specializing in providing qualified marine 
              professionals to shipowners worldwide. We serve shipowners of various vessel types, ensuring they receive 
              skilled and certified crew members for their operations.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#666', maxWidth: '900px', margin: '1rem auto', fontWeight: 500 }}>
              As a certified agency holding <strong>სსიპ "საზღვაო ტრანსპორტის სააგენტო"</strong>, <strong>ISO 9001:2015</strong>, 
              and <strong>MLC 2006</strong> certifications, we are committed to international standards and quality service delivery.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/about-us" className="btn btn-primary">
                Learn More About Us
              </a>
              <button onClick={generateBrochure} className="btn btn-primary" style={{ backgroundColor: 'var(--marine-blue)', color: 'white', border: 'none' }}>
                Download PDF Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications-showcase" style={{ background: 'linear-gradient(135deg, #003366 0%, #005588 100%)', color: 'white', padding: '3rem 2rem', marginTop: '3rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'white' }}>Our Certifications</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>სსიპ "საზღვაო ტრანსპორტის სააგენტო"</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>ISO 9001:2015</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Quality Management System</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>MLC 2006</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Maritime Labour Convention</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/certification" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#003366' }}>
              View All Certificates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

