import React from 'react';
import '../styles/Pages.css';

const TermsOfService = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Terms of Service</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using the services of Georgian Crewing Agency (GCA), you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              GCA provides crewing services, connecting qualified marine professionals with shipowners. We facilitate the placement 
              of certified crew members for various vessel types including container ships, bulk carriers, tankers, and other maritime vessels.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
              Users are responsible for providing accurate information and complying with all applicable laws and regulations. 
              Shipowners must ensure they have the legal capacity to engage crew members.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Georgian Crewing Agency 
              and is protected by copyright and trademark laws.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              GCA acts as an intermediary between shipowners and crew members. We are not liable for disputes between parties or 
              any consequences arising from the employment relationship.
            </p>

            <h2>6. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes 
              acceptance of the modified terms.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

