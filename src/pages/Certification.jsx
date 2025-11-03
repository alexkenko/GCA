import React from 'react';
import '../styles/Pages.css';

const Certification = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Certification</h1>

        <section className="content-section">
          <p>
            Georgian Crewing Agency maintains compliance with internationally recognized
            standards for crewing agencies. We are proud to hold the following certifications:
          </p>
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.1) 0%, rgba(0, 85, 136, 0.1) 100%)', borderRadius: '12px', border: '2px solid rgba(0, 51, 102, 0.2)' }}>
            <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem' }}>Our Certifications</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong style={{ color: 'var(--marine-blue-dark)' }}>სსიპ "საზღვაო ტრანსპორტის სააგენტო"</strong>
                <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem' }}>Georgian Maritime Transport Agency</div>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong style={{ color: 'var(--marine-blue-dark)' }}>ISO 9001:2015</strong>
                <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem' }}>Quality Management System Certification</div>
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <strong style={{ color: 'var(--marine-blue-dark)' }}>MLC 2006</strong>
                <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem' }}>Maritime Labour Convention 2006 Certification</div>
              </li>
            </ul>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            Below you can view and download our certification documents.
          </p>
        </section>

        <section className="certificates-grid">
          <article className="certificate-card">
            <h2>Georgian Crew Agency Certificate</h2>
            <div className="certificate-embed">
              <iframe
                title="Georgian Crew Agency Certificate"
                src="/certificates/Georgian_Crew_Agency.pdf"
                loading="lazy"
              />
            </div>
            <a className="btn btn-secondary" href="/certificates/Georgian_Crew_Agency.pdf" target="_blank" rel="noreferrer">
              View / Download
            </a>
          </article>

          <article className="certificate-card">
            <h2>ISO Certificate</h2>
            <div className="certificate-embed">
              <iframe
                title="ISO Certificate"
                src="/certificates/ISO-GeoGeorgian_crewing_agency.pdf"
                loading="lazy"
              />
            </div>
            <a className="btn btn-secondary" href="/certificates/ISO-GeoGeorgian_crewing_agency.pdf" target="_blank" rel="noreferrer">
              View / Download
            </a>
          </article>

          <article className="certificate-card">
            <h2>MLC Certificate</h2>
            <div className="certificate-embed">
              <iframe
                title="MLC Certificate"
                src="/certificates/MLC-Geogeorgian_crewing_agency.pdf"
                loading="lazy"
              />
            </div>
            <a className="btn btn-secondary" href="/certificates/MLC-Geogeorgian_crewing_agency.pdf" target="_blank" rel="noreferrer">
              View / Download
            </a>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Certification;


