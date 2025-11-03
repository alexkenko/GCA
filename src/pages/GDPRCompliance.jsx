import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/Pages.css';

const GDPRCompliance = () => {
  const tabs = [
    {
      label: 'Our Commitment',
      content: (
        <div>
          <p>
            Georgian Crewing Agency is committed to compliance with the General Data Protection Regulation (GDPR) 
            of the European Union and the Personal Data Protection Act of Georgia. We protect the privacy rights 
            of all individuals whose data we process, regardless of their location.
          </p>
        </div>
      )
    },
    {
      label: 'Data Controller',
      content: (
        <div>
          <p>
            Georgian Crewing Agency, located at Maiakovski Ave, N41, Batumi, Georgia, acts as a data controller 
            for personal information collected in the course of providing crewing services. We are responsible for 
            ensuring that personal data is processed lawfully and securely in accordance with both EU GDPR (Regulation 
            (EU) 2016/679) and Georgian Personal Data Protection Act (Law of Georgia on Personal Data Protection, 2011).
          </p>
        </div>
      )
    },
    {
      label: 'Legal Basis',
      content: (
        <div>
          <p>
            We process personal data based on:
          </p>
          <ul className="expertise-list">
            <li>Consent from data subjects</li>
            <li>Contractual necessity for service provision</li>
            <li>Legal obligations</li>
            <li>Legitimate interests in business operations</li>
          </ul>
        </div>
      )
    },
    {
      label: 'Your Rights',
      content: (
        <div>
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
        </div>
      )
    },
    {
      label: 'Data Retention',
      content: (
        <div>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected 
            or as required by law.
          </p>
        </div>
      )
    },
    {
      label: 'Data Security',
      content: (
        <div>
          <p>
            We implement appropriate technical and organizational measures to protect personal data against unauthorized 
            access, loss, or destruction.
          </p>
        </div>
      )
    },
    {
      label: 'International Transfers',
      content: (
        <div>
          <p>
            When transferring data outside the EEA or Georgia, we ensure appropriate safeguards are in place to protect 
            your personal information, including standard contractual clauses and adequacy decisions as recognized by 
            both EU and Georgian regulations.
          </p>
        </div>
      )
    },
    {
      label: 'Georgian Law Compliance',
      content: (
        <div>
          <p>
            In addition to EU GDPR compliance, we adhere to the Georgian Personal Data Protection Act, which includes:
          </p>
          <ul className="expertise-list">
            <li>Registration with the Georgian Personal Data Protection Inspector</li>
            <li>Compliance with data processing principles and requirements</li>
            <li>Respect for data subject rights under Georgian law</li>
            <li>Proper handling of cross-border data transfers</li>
          </ul>
        </div>
      )
    },
    {
      label: 'Exercising Rights',
      content: (
        <div>
          <p>
            To exercise your rights under both EU GDPR and Georgian Personal Data Protection Act, please contact us 
            at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>. We will respond to your request within 
            one month (as required by GDPR) or within the timeframe specified by Georgian law.
          </p>
        </div>
      )
    },
    {
      label: 'Data Protection Officer',
      content: (
        <div>
          <p>
            For data protection inquiries under EU GDPR and Georgian regulations, contact our data protection officer 
            at <a href="mailto:crewing@gcagency.ge">crewing@gcagency.ge</a>.
          </p>
        </div>
      )
    },
    {
      label: 'Complaints',
      content: (
        <div>
          <p>
            You have the right to lodge a complaint with:
          </p>
          <ul className="expertise-list">
            <li><strong>EU Supervisory Authority:</strong> Your local data protection authority in your EU member state</li>
            <li><strong>Georgian Authority:</strong> Personal Data Protection Inspector of Georgia</li>
          </ul>
          <p>
            However, we encourage you to contact us first so we may resolve any concerns directly.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>GDPR Compliance</h1>
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <Tabs tabs={tabs} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;

