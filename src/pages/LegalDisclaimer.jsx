import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/Pages.css';

const LegalDisclaimer = () => {
  const tabs = [
    {
      label: 'General Information',
      content: (
        <div>
          <p>
            The information on this website is provided for general informational purposes only. While we strive 
            to keep information up to date, we make no representations or warranties of any kind about the completeness, 
            accuracy, reliability, or availability of the website or its content.
          </p>
        </div>
      )
    },
    {
      label: 'Service Provision',
      content: (
        <div>
          <p>
            Georgian Crewing Agency acts as an intermediary service provider. We facilitate connections between 
            shipowners and marine professionals but do not assume responsibility for the employment relationship 
            between parties.
          </p>
        </div>
      )
    },
    {
      label: 'No Warranties',
      content: (
        <div>
          <p>
            We provide our services "as is" without any warranties, express or implied. We do not guarantee the 
            suitability, qualifications, or performance of any crew member or the satisfaction of shipowners.
          </p>
        </div>
      )
    },
    {
      label: 'Limitation of Liability',
      content: (
        <div>
          <p>
            GCA shall not be liable for any indirect, incidental, special, or consequential damages arising from 
            the use of our services, including but not limited to loss of profits, data, or business opportunities.
          </p>
        </div>
      )
    },
    {
      label: 'External Links',
      content: (
        <div>
          <p>
            Our website may contain links to external websites. We are not responsible for the content or privacy 
            practices of these external sites.
          </p>
        </div>
      )
    },
    {
      label: 'Jurisdiction',
      content: (
        <div>
          <p>
            These terms are governed by the laws of Georgia. Any disputes shall be subject to the exclusive 
            jurisdiction of Georgian courts.
          </p>
        </div>
      )
    },
    {
      label: 'Contact',
      content: (
        <div>
          <p>
            For legal inquiries, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Legal Disclaimer</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <Tabs tabs={tabs} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;

