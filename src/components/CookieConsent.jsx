import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <h3>🍪 Cookie Consent</h3>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            By clicking "Accept", you consent to our use of cookies. 
            <Link to="/cookie-policy" target="_blank" rel="noopener noreferrer"> Learn more</Link>
          </p>
        </div>
        <div className="cookie-consent-buttons">
          <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
            Accept
          </button>
          <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

