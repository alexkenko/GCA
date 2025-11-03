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
            standards for crewing agencies. Below you can view and download our
            certifications.
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


