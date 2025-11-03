import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/Pages.css';

const PrivacyPolicy = () => {
  const tabs = [
    {
      label: 'Information We Collect',
      content: (
        <div>
          <p>
            We collect information that you provide directly to us, including personal details, contact information, 
            professional qualifications, and employment history necessary for crewing services.
          </p>
        </div>
      )
    },
    {
      label: 'How We Use Information',
      content: (
        <div>
          <p>
            We use collected information to:
          </p>
          <ul className="expertise-list">
            <li>Facilitate crew placement services</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
            <li>Improve our services</li>
          </ul>
        </div>
      )
    },
    {
      label: 'Information Sharing',
      content: (
        <div>
          <p>
            We may share information with shipowners and relevant parties solely for the purpose of crew placement. 
            We do not sell personal information to third parties.
          </p>
        </div>
      )
    },
    {
      label: 'Data Security',
      content: (
        <div>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction.
          </p>
        </div>
      )
    },
    {
      label: 'Your Rights',
      content: (
        <div>
          <p>
            You have the right to access, update, or delete your personal information. You may also object to certain 
            processing activities or request data portability.
          </p>
        </div>
      )
    },
    {
      label: 'Cookies',
      content: (
        <div>
          <p>
            Our website uses cookies to enhance user experience. Please refer to our Cookie Policy for detailed information.
          </p>
        </div>
      )
    },
    {
      label: 'Contact Us',
      content: (
        <div>
          <p>
            For privacy-related inquiries, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <Tabs tabs={tabs} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

