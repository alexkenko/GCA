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

            {/* General Contact Info */}
            <div className="luxury-box" style={{ marginBottom: '3rem', textAlign: 'center', marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                General Contact
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
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
                </div>
                <div>
                  <strong style={{ color: 'var(--marine-blue)', display: 'block', marginBottom: '0.5rem' }}>Address:</strong>
                  <p style={{ color: 'var(--marine-blue-dark)', fontSize: '1.1rem', margin: 0 }}>
                    Maiakovski Ave, N41<br />Batumi, Georgia
                  </p>
                </div>
                <div>
                  <strong style={{ color: 'var(--marine-blue)', display: 'block', marginBottom: '0.5rem' }}>Office Hours:</strong>
                  <div style={{ color: 'var(--marine-blue-dark)', fontSize: '1rem', textAlign: 'left' }}>
                    <p style={{ margin: '0.25rem 0' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p style={{ margin: '0.25rem 0' }}>Saturday: 10:00 AM - 2:00 PM</p>
                    <p style={{ margin: '0.25rem 0' }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--marine-blue-dark)', fontSize: '2.5rem' }}>
            Our Team
          </h2>

          <div className="services-grid">
            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/images/staff/zurab-saladze.jpg" 
                  alt="Mr. Zurab Saladze"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--marine-blue-light)',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                Mr. Zurab Saladze
              </h3>
              <a href="tel:+995597040418" className="team-phone-link" style={{ marginBottom: '1rem' }}>
                +995 597 04 04 18
              </a>
              <a href="mailto:zura.saladze@gcagency.ge" className="team-phone-link" style={{ background: 'var(--marine-blue-pale)', fontSize: '1rem' }}>
                zura.saladze@gcagency.ge
              </a>
            </div>

            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/images/staff/tornike-turmanidze.jpg" 
                  alt="Mr. Tornike Turmanidze"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--marine-blue-light)',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                Mr. Tornike Turmanidze
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                (24/7 Available)
              </p>
              <a href="tel:+995592444436" className="team-phone-link" style={{ marginBottom: '1rem' }}>
                +995 592 444436
              </a>
              <a href="mailto:tornike.turmanidze@gcagency.ge" className="team-phone-link" style={{ background: 'var(--marine-blue-pale)', fontSize: '1rem' }}>
                tornike.turmanidze@gcagency.ge
              </a>
            </div>

            <div className="service-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                Capt. Guram Shanidze
              </h3>
              <a href="tel:+995593107878" className="team-phone-link" style={{ marginBottom: '1rem' }}>
                +995 593 10 78 78
              </a>
              <a href="mailto:guram.shanidze@gcagency.ge" className="team-phone-link" style={{ background: 'var(--marine-blue-pale)', fontSize: '1rem' }}>
                guram.shanidze@gcagency.ge
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
          </div>
        </section>

        {/* Social Media */}
        <div className="contact-content-single" style={{ marginTop: '4rem' }}>
          <div className="contact-info">
            <div className="contact-details">
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
