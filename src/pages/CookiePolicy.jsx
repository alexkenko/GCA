import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/Pages.css';

const CookiePolicy = () => {
  const tabs = [
    {
      label: 'What Are Cookies',
      content: (
        <div>
          <p>
            Cookies are small text files placed on your device when you visit our website. They help us provide 
            a better user experience and understand how our website is being used.
          </p>
        </div>
      )
    },
    {
      label: 'Types of Cookies',
      content: (
        <div>
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
        </div>
      )
    },
    {
      label: 'Managing Cookies',
      content: (
        <div>
          <p>
            You can control and manage cookies through your browser settings. However, disabling cookies may 
            affect the functionality of our website.
          </p>
        </div>
      )
    },
    {
      label: 'Third-Party Cookies',
      content: (
        <div>
          <p>
            Some cookies may be set by third-party services used on our website. We do not control these cookies, 
            and you should review the third-party privacy policies.
          </p>
        </div>
      )
    },
    {
      label: 'Changes to Policy',
      content: (
        <div>
          <p>
            We may update this Cookie Policy from time to time. Please review this page periodically for any changes.
          </p>
        </div>
      )
    },
    {
      label: 'Contact Us',
      content: (
        <div>
          <p>
            For questions about our use of cookies, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Cookie Policy</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <Tabs tabs={tabs} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

