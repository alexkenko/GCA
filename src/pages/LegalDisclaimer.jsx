import React from 'react';
import '../styles/Pages.css';

const LegalDisclaimer = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Legal Disclaimer</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. General Information</h2>
            <p>
              The information on this website is provided for general informational purposes only. While we strive 
              to keep information up to date, we make no representations or warranties of any kind about the completeness, 
              accuracy, reliability, or availability of the website or its content.
            </p>

            <h2>2. Service Provision</h2>
            <p>
              Georgian Crewing Agency acts as an intermediary service provider. We facilitate connections between 
              shipowners and marine professionals but do not assume responsibility for the employment relationship 
              between parties.
            </p>

            <h2>3. No Warranties</h2>
            <p>
              We provide our services "as is" without any warranties, express or implied. We do not guarantee the 
              suitability, qualifications, or performance of any crew member or the satisfaction of shipowners.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              GCA shall not be liable for any indirect, incidental, special, or consequential damages arising from 
              the use of our services, including but not limited to loss of profits, data, or business opportunities.
            </p>

            <h2>5. External Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the content or privacy 
              practices of these external sites.
            </p>

            <h2>6. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of Georgia. Any disputes shall be subject to the exclusive 
              jurisdiction of Georgian courts.
            </p>

            <h2>7. Contact</h2>
            <p>
              For legal inquiries, contact us at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;

