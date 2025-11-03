import React from 'react';
import '../styles/Pages.css';

const GDPRCompliance = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>GDPR Compliance</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. Our Commitment</h2>
            <p>
              Georgian Crewing Agency is committed to compliance with the General Data Protection Regulation (GDPR) 
              and protecting the privacy rights of all individuals whose data we process.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              Georgian Crewing Agency acts as a data controller for personal information collected in the course of 
              providing crewing services. We are responsible for ensuring that personal data is processed lawfully and securely.
            </p>

            <h2>3. Legal Basis for Processing</h2>
            <p>
              We process personal data based on:
            </p>
            <ul className="expertise-list">
              <li>Consent from data subjects</li>
              <li>Contractual necessity for service provision</li>
              <li>Legal obligations</li>
              <li>Legitimate interests in business operations</li>
            </ul>

            <h2>4. Your Rights Under GDPR</h2>
            <p>
              You have the following rights:
            </p>
            <ul className="expertise-list">
              <li><strong>Right of Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to certain processing activities</li>
              <li><strong>Rights Related to Automated Decision Making:</strong> Human review of automated decisions</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected 
              or as required by law.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect personal data against unauthorized 
              access, loss, or destruction.
            </p>

            <h2>7. International Transfers</h2>
            <p>
              When transferring data outside the EEA, we ensure appropriate safeguards are in place to protect your 
              personal information.
            </p>

            <h2>8. Exercising Your Rights</h2>
            <p>
              To exercise your GDPR rights, please contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>. 
              We will respond to your request within one month.
            </p>

            <h2>9. Data Protection Officer</h2>
            <p>
              For data protection inquiries, contact our data protection officer at the same email address.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;

