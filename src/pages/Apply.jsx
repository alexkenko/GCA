import React from 'react';
import '../styles/Pages.css';

const Apply = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/forms/GCA_Application_Form.xlsx';
    link.download = 'GCA_Application_Form.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box" style={{ textAlign: 'center', maxWidth: '800px', margin: '4rem auto' }}>
          <h1 style={{ color: 'var(--marine-blue-dark)', marginBottom: '2rem' }}>APPLICATION FORM</h1>
          
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
              To apply for a position with Georgian Crewing Agency, please download the application form below, 
              fill it out completely, and email it back to us.
            </p>
            
            <button 
              onClick={handleDownload}
              className="btn btn-primary"
              style={{ 
                fontSize: '1.2rem', 
                padding: '1.2rem 3rem',
                marginBottom: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
              </svg>
              Download Application Form
            </button>
          </div>

          <div style={{ 
            background: 'var(--marine-blue-pale)', 
            padding: '2rem', 
            borderRadius: '12px',
            marginTop: '2rem'
          }}>
            <h2 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              How to Submit Your Application
            </h2>
            <ol style={{ 
              textAlign: 'left', 
              fontSize: '1.1rem', 
              lineHeight: '2',
              color: '#555',
              maxWidth: '600px',
              margin: '0 auto',
              paddingLeft: '1.5rem'
            }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Download</strong> the application form using the button above
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Fill out</strong> all required fields in the Excel form
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Attach</strong> your CV photo and any required documents
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Email</strong> the completed form to us at:{' '}
                <a 
                  href="mailto:cv@gcagency.ge" 
                  style={{ 
                    color: 'var(--marine-blue)', 
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  cv@gcagency.ge
                </a>
              </li>
            </ol>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
              <strong>Note:</strong> Please ensure all fields are completed accurately. 
              Incomplete applications may delay the review process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
