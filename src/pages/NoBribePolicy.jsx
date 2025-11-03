import React from 'react';
import '../styles/Pages.css';

const NoBribePolicy = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>No Bribe Policy</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            <h2>1. Our Commitment</h2>
            <p>
              Georgian Crewing Agency maintains a strict zero-tolerance policy against bribery and corruption. 
              We are committed to conducting all business activities with the highest standards of integrity and ethics.
            </p>

            <h2>2. Prohibition of Bribery</h2>
            <p>
              GCA strictly prohibits any form of bribery, whether directly or indirectly, including:
            </p>
            <ul className="expertise-list">
              <li>Offering, giving, or accepting bribes</li>
              <li>Providing improper benefits to influence business decisions</li>
              <li>Facilitating payments or kickbacks</li>
              <li>Any form of corruption or unethical conduct</li>
            </ul>

            <h2>3. Business Conduct Standards</h2>
            <p>
              All employees, agents, and representatives of GCA must:
            </p>
            <ul className="expertise-list">
              <li>Refuse any form of bribery or corruption</li>
              <li>Report any suspected violations immediately</li>
              <li>Maintain transparency in all business transactions</li>
              <li>Comply with all applicable anti-corruption laws</li>
            </ul>

            <h2>4. Third-Party Relationships</h2>
            <p>
              We require all business partners, contractors, and intermediaries to adhere to the same anti-bribery 
              standards. We conduct due diligence on third parties before engaging in business relationships.
            </p>

            <h2>5. Gifts and Hospitality</h2>
            <p>
              Any gifts or hospitality must be modest, appropriate, and transparent. They must never be intended to 
              influence business decisions or create improper obligations.
            </p>

            <h2>6. Reporting Violations</h2>
            <p>
              Anyone who witnesses or suspects bribery or corruption must report it immediately to management or through 
              our confidential reporting channel at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
            </p>

            <h2>7. Enforcement</h2>
            <p>
              Violations of this policy will result in immediate disciplinary action, up to and including termination 
              of employment or business relationships, and may lead to legal prosecution.
            </p>

            <h2>8. Continuous Improvement</h2>
            <p>
              We regularly review and update our anti-bribery procedures to ensure continued compliance with international 
              standards and best practices.
            </p>

            <h2>9. Compliance Training</h2>
            <p>
              All employees receive regular training on anti-bribery and anti-corruption policies and procedures.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NoBribePolicy;

