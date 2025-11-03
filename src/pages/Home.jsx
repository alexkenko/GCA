import React from 'react';
import '../styles/Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Georgian Crewing Agency</h1>
          <p className="hero-subtitle">Providing Qualified Marine Professionals to Shipowners Worldwide</p>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">Get Started</a>
            <a href="/services" className="btn btn-secondary">Our Services</a>
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
    </div>
  );
};

export default Home;

