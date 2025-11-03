import React from 'react';
import '../styles/Pages.css';

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including personal details, contact information, 
              professional qualifications, and employment history necessary for crewing services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use collected information to:
            </p>
            <ul className="expertise-list">
              <li>Facilitate crew placement services</li>
              <li>Communicate with you about our services</li>
              <li>Comply with legal obligations</li>
              <li>Improve our services</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We may share information with shipowners and relevant parties solely for the purpose of crew placement. 
              We do not sell personal information to third parties.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also object to certain 
              processing activities or request data portability.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. Please refer to our Cookie Policy for detailed information.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

