import React from 'react';
import '../styles/Pages.css';

const CookiePolicy = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Cookie Policy</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your device when you visit our website. They help us provide 
              a better user experience and understand how our website is being used.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality 
              such as security, network management, and accessibility.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with our website, helping us improve 
              our services and user experience.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make and provide enhanced, personalized features.
            </p>

            <h2>3. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. However, disabling cookies may 
              affect the functionality of our website.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              Some cookies may be set by third-party services used on our website. We do not control these cookies, 
              and you should review the third-party privacy policies.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Please review this page periodically for any changes.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              For questions about our use of cookies, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

