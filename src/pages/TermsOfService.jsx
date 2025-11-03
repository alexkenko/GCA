import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/Pages.css';

const TermsOfService = () => {
  const tabs = [
    {
      label: 'Agreement to Terms',
      content: (
        <div>
          <p>
            By accessing and using the services of Georgian Crewing Agency (GCA), you agree to be bound by these Terms of Service. 
            If you disagree with any part of these terms, you may not access our services.
          </p>
        </div>
      )
    },
    {
      label: 'Services Provided',
      content: (
        <div>
          <p>
            GCA provides crewing services, connecting qualified marine professionals with shipowners. We facilitate the placement 
            of certified crew members for various vessel types including container ships, bulk carriers, tankers, and other maritime vessels.
          </p>
        </div>
      )
    },
    {
      label: 'User Responsibilities',
      content: (
        <div>
          <p>
            Users are responsible for providing accurate information and complying with all applicable laws and regulations. 
            Shipowners must ensure they have the legal capacity to engage crew members.
          </p>
        </div>
      )
    },
    {
      label: 'Intellectual Property',
      content: (
        <div>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Georgian Crewing Agency 
            and is protected by copyright and trademark laws.
          </p>
        </div>
      )
    },
    {
      label: 'Limitation of Liability',
      content: (
        <div>
          <p>
            GCA acts as an intermediary between shipowners and crew members. We are not liable for disputes between parties or 
            any consequences arising from the employment relationship.
          </p>
        </div>
      )
    },
    {
      label: 'Modifications',
      content: (
        <div>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes 
            acceptance of the modified terms.
          </p>
        </div>
      )
    },
    {
      label: 'Contact',
      content: (
        <div>
          <p>
            For questions about these Terms of Service, please contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Terms of Service</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <Tabs tabs={tabs} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

