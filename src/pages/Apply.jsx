import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import '../styles/Pages.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    rank: '',
    contracts: '',
    seaTime: '',
    availabilityDate: '',
    lastSalary: '',
    phone: '',
    email: ''
  });

  const [gdprAgreed, setGdprAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required';
    }
    if (!formData.rank.trim()) {
      newErrors.rank = 'Rank Applied for is required';
    }
    if (!formData.contracts.trim()) {
      newErrors.contracts = 'Number of Contracts is required';
    } else if (isNaN(formData.contracts) || parseInt(formData.contracts) < 0) {
      newErrors.contracts = 'Please enter a valid number';
    }
    if (!formData.seaTime.trim()) {
      newErrors.seaTime = 'Total Sea Time is required';
    } else if (isNaN(formData.seaTime) || parseInt(formData.seaTime) < 0) {
      newErrors.seaTime = 'Please enter a valid number of months';
    }
    if (!formData.availabilityDate.trim()) {
      newErrors.availabilityDate = 'Date of availability is required';
    }
    if (!String(formData.lastSalary).trim()) {
      newErrors.lastSalary = 'Last salary is required';
    } else if (isNaN(formData.lastSalary) || parseFloat(formData.lastSalary) < 0) {
      newErrors.lastSalary = 'Please enter a valid salary amount';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!gdprAgreed) {
      newErrors.gdpr = 'You must agree to GDPR terms to submit your application';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate application ID
    const applicationId = Date.now().toString().slice(-8);
    
    try {
      console.log('Submitting application...', formData);

      const savedApp = await storage.saveApplication({
        name: formData.name,
        surname: formData.surname,
        rank_applied_for: formData.rank,
        experience_contracts: parseInt(formData.contracts, 10),
        experience_sea_time_months: parseInt(formData.seaTime, 10),
        availability_date: formData.availabilityDate,
        last_salary: parseFloat(formData.lastSalary),
        phone_number: formData.phone,
        email_address: formData.email,
        gdpr_agreed: gdprAgreed,
        application_id: applicationId,
        status: 'pending'
      });

      console.log('Application saved successfully:', savedApp);

      setApplicationId(applicationId);
      setSubmitted(true);

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        setFormData({
          name: '',
          surname: '',
          rank: '',
          contracts: '',
          seaTime: '',
          availabilityDate: '',
          lastSalary: '',
          phone: '',
          email: ''
        });
        setGdprAgreed(false);
        setSubmitted(false);
        setApplicationId('');
      }, 5000);
    } catch (err) {
      console.error('Error submitting application:', err);
      alert('Error submitting application: ' + (err.message || 'Unknown error. Please check the browser console for details.'));
    }
  };

  if (submitted) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="luxury-box" style={{ textAlign: 'center', maxWidth: '600px', margin: '4rem auto' }}>
            <h1 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1.5rem' }}>Thank You!</h1>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
              Your application has been successfully submitted. Our team will review your details 
              and contact you soon regarding your application for <strong>{formData.rank}</strong>.
            </p>
            <p style={{ marginTop: '2rem', color: '#777' }}>
              Application ID: {applicationId || 'Pending'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Crew Application</h1>
          <p style={{ marginBottom: '2rem', color: '#555' }}>
            Complete the form below to apply for a position with Georgian Crewing Agency. 
            All fields are required.
          </p>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your first name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="surname">Surname *</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className={errors.surname ? 'error' : ''}
                  placeholder="Enter your last name"
                />
                {errors.surname && <span className="error-message">{errors.surname}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rank">Rank Applied for *</label>
              <input
                type="text"
                id="rank"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                className={errors.rank ? 'error' : ''}
                placeholder="e.g., Deck Officer, Engine Officer, Captain, etc."
              />
              {errors.rank && <span className="error-message">{errors.rank}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contracts">Experience in Rank (Number of Contracts) *</label>
                <input
                  type="number"
                  id="contracts"
                  name="contracts"
                  value={formData.contracts}
                  onChange={handleChange}
                  className={errors.contracts ? 'error' : ''}
                  placeholder="e.g., 5"
                  min="0"
                />
                {errors.contracts && <span className="error-message">{errors.contracts}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="seaTime">Experience in Rank: Total Sea Time (Months) *</label>
                <input
                  type="number"
                  id="seaTime"
                  name="seaTime"
                  value={formData.seaTime}
                  onChange={handleChange}
                  className={errors.seaTime ? 'error' : ''}
                  placeholder="e.g., 24"
                  min="0"
                />
                {errors.seaTime && <span className="error-message">{errors.seaTime}</span>}
              </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="availabilityDate">Date of Availability *</label>
              <input
                type="date"
                id="availabilityDate"
                name="availabilityDate"
                value={formData.availabilityDate}
                onChange={handleChange}
                className={errors.availabilityDate ? 'error' : ''}
              />
              {errors.availabilityDate && <span className="error-message">{errors.availabilityDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastSalary">Last Salary (USD) *</label>
              <input
                type="number"
                id="lastSalary"
                name="lastSalary"
                value={formData.lastSalary}
                onChange={handleChange}
                className={errors.lastSalary ? 'error' : ''}
                placeholder="e.g., 3500"
                min="0"
                step="0.01"
              />
              {errors.lastSalary && <span className="error-message">{errors.lastSalary}</span>}
            </div>
          </div>

          <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="e.g., +995 593 10 78 78"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group gdpr-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={gdprAgreed}
                  onChange={(e) => {
                    setGdprAgreed(e.target.checked);
                    if (errors.gdpr) {
                      setErrors({ ...errors, gdpr: '' });
                    }
                  }}
                  className={errors.gdpr ? 'error' : ''}
                />
                <span>
                  I agree to the <a href="/gdpr-compliance" target="_blank" rel="noopener noreferrer">GDPR Compliance</a> terms 
                  and consent to the processing of my personal data in accordance with EU and Georgian data protection regulations. *
                </span>
              </label>
              {errors.gdpr && <span className="error-message">{errors.gdpr}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '2rem', fontSize: '1.1rem', padding: '1rem' }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;

