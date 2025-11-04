import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import '../styles/Pages.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    // Position Information
    position_applied_for: '',
    date_of_availability: '',
    last_salary: '',
    
    // General Information
    surname: '',
    date_of_birth: '',
    first_name: '',
    place_of_birth: '',
    nationality: '',
    mobile_phone: '',
    email_address: '',
    home_address: '',
    
    // Documents/Certificates
    passport_document_no: '',
    passport_place_issued: '',
    passport_date_issued: '',
    passport_expiry_date: '',
    us_visa_document_no: '',
    us_visa_place_issued: '',
    us_visa_date_issued: '',
    us_visa_expiry_date: '',
    seaman_id_document_no: '',
    seaman_id_place_issued: '',
    seaman_id_date_issued: '',
    seaman_id_expiry_date: '',
    national_license_document_no: '',
    national_license_place_issued: '',
    national_license_date_issued: '',
    national_license_expiry_date: '',
    national_license_class: '',
    endorsement_document_no: '',
    endorsement_place_issued: '',
    endorsement_date_issued: '',
    endorsement_expiry_date: '',
    
    // Sea Service Data (up to 5 entries)
    sea_service: [
      { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
      { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
      { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
      { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
      { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' }
    ]
  });

  const [gdprAgreed, setGdprAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [applicationId, setApplicationId] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

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
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSeaServiceChange = (index, field, value) => {
    const newSeaService = [...formData.sea_service];
    newSeaService[index][field] = value;
    setFormData({
      ...formData,
      sea_service: newSeaService
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, photo: 'Please upload a JPEG or PNG image.' });
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setErrors({ ...errors, photo: 'File size too large. Maximum size is 5MB.' });
        return;
      }

      setPhotoFile(file);
      setErrors({ ...errors, photo: '' });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    setErrors({ ...errors, photo: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.position_applied_for.trim()) {
      newErrors.position_applied_for = 'Position applied for is required';
    }
    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required';
    }
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }
    if (!formData.mobile_phone.trim()) {
      newErrors.mobile_phone = 'Mobile Phone is required';
    }
    if (!formData.email_address.trim()) {
      newErrors.email_address = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_address)) {
      newErrors.email_address = 'Please enter a valid email address';
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

    const applicationId = Date.now().toString().slice(-8);
    
    try {
      console.log('Submitting application...', formData);
      
      // Upload photo if provided
      let photoUrl = null;
      if (photoFile) {
        setUploadingPhoto(true);
        try {
          photoUrl = await storage.uploadPhoto(photoFile, applicationId);
        } catch (photoError) {
          console.error('Photo upload error:', photoError);
          alert('Error uploading photo: ' + photoError.message);
          setUploadingPhoto(false);
          return;
        }
        setUploadingPhoto(false);
      }
      
      const savedApp = await storage.saveApplication({
        ...formData,
        photo_url: photoUrl,
        gdpr_agreed: gdprAgreed,
        application_id: applicationId,
        status: 'pending',
        submitted_at: new Date().toISOString()
      });

      console.log('Application saved successfully:', savedApp);
      
      setApplicationId(applicationId);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setTimeout(() => {
        setFormData({
          position_applied_for: '',
          date_of_availability: '',
          last_salary: '',
          surname: '',
          date_of_birth: '',
          first_name: '',
          place_of_birth: '',
          nationality: '',
          mobile_phone: '',
          email_address: '',
          home_address: '',
          passport_document_no: '',
          passport_place_issued: '',
          passport_date_issued: '',
          passport_expiry_date: '',
          us_visa_document_no: '',
          us_visa_place_issued: '',
          us_visa_date_issued: '',
          us_visa_expiry_date: '',
          seaman_id_document_no: '',
          seaman_id_place_issued: '',
          seaman_id_date_issued: '',
          seaman_id_expiry_date: '',
          national_license_document_no: '',
          national_license_place_issued: '',
          national_license_date_issued: '',
          national_license_expiry_date: '',
          national_license_class: '',
          endorsement_document_no: '',
          endorsement_place_issued: '',
          endorsement_date_issued: '',
          endorsement_expiry_date: '',
          sea_service: [
            { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
            { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
            { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
            { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' },
            { vessel_name: '', imo_number: '', engine_vessel_type: '', dwt_kw: '', rank: '', period_from: '', period_to: '', company: '', flag: '' }
          ]
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
              and contact you soon regarding your application for <strong>{formData.position_applied_for}</strong>.
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
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>APPLICATION FORM</h1>
          
          <form className="application-form" onSubmit={handleSubmit}>
            {/* Position Information */}
            <div className="form-section">
              <h2 className="form-section-title">Position Information</h2>
              
              <div className="position-info-grid">
                <div className="position-info-left">
                  <div className="form-group">
                    <label htmlFor="position_applied_for">Position applied for *</label>
                    <input
                      type="text"
                      id="position_applied_for"
                      name="position_applied_for"
                      value={formData.position_applied_for}
                      onChange={handleChange}
                      className={errors.position_applied_for ? 'error' : ''}
                      placeholder="e.g., Deck Officer, Engine Officer, Captain, etc."
                    />
                    {errors.position_applied_for && <span className="error-message">{errors.position_applied_for}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date_of_availability">Date of availability</label>
                      <input
                        type="date"
                        id="date_of_availability"
                        name="date_of_availability"
                        value={formData.date_of_availability}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="last_salary">Last salary</label>
                      <input
                        type="text"
                        id="last_salary"
                        name="last_salary"
                        value={formData.last_salary}
                        onChange={handleChange}
                        placeholder="e.g., USD 3000"
                      />
                    </div>
                  </div>
                </div>

                <div className="position-info-right">
                  <div className="form-group">
                    <label htmlFor="cv_photo">CV Photo</label>
                    <div className="photo-upload-container-top">
                      <input
                        type="file"
                        id="cv_photo"
                        name="cv_photo"
                        accept="image/jpeg,image/jpg,image/png"
                        onChange={handlePhotoChange}
                        style={{ display: 'none' }}
                      />
                      {photoPreview ? (
                        <div className="photo-preview-top">
                          <img src={photoPreview} alt="CV Photo Preview" />
                          <div className="photo-actions">
                            <label htmlFor="cv_photo" className="photo-upload-button-small">
                              Change
                            </label>
                            <button
                              type="button"
                              onClick={removePhoto}
                              className="photo-remove-button-small"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="photo-upload-placeholder">
                          <label htmlFor="cv_photo" className="photo-upload-button-large">
                            Upload Photo
                          </label>
                          <p className="photo-upload-hint-small">JPEG or PNG<br />Max 5MB</p>
                        </div>
                      )}
                      {errors.photo && <span className="error-message">{errors.photo}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="form-section">
              <h2 className="form-section-title">GENERAL INFORMATION</h2>
              
              {/* Name Fields - First name then Surname */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First name *</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={errors.first_name ? 'error' : ''}
                  />
                  {errors.first_name && <span className="error-message">{errors.first_name}</span>}
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
                  />
                  {errors.surname && <span className="error-message">{errors.surname}</span>}
                </div>
              </div>

              {/* Birth Information */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date_of_birth">Date of birth</label>
                  <input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="place_of_birth">Place of birth</label>
                  <input
                    type="text"
                    id="place_of_birth"
                    name="place_of_birth"
                    value={formData.place_of_birth}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Nationality */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="e.g., Georgian"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile_phone">Mobile Phone *</label>
                  <input
                    type="tel"
                    id="mobile_phone"
                    name="mobile_phone"
                    value={formData.mobile_phone}
                    onChange={handleChange}
                    className={errors.mobile_phone ? 'error' : ''}
                    placeholder="e.g., +995 593 10 78 78"
                  />
                  {errors.mobile_phone && <span className="error-message">{errors.mobile_phone}</span>}
                </div>
              </div>

              {/* Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email_address">Email address *</label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    className={errors.email_address ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email_address && <span className="error-message">{errors.email_address}</span>}
                </div>
              </div>

              {/* Address */}
              <div className="form-group">
                <label htmlFor="home_address">Home Address</label>
                <textarea
                  id="home_address"
                  name="home_address"
                  value={formData.home_address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter your complete home address"
                />
              </div>

            </div>

            {/* Documents/Certificates */}
            <div className="form-section">
              <h2 className="form-section-title">Documents/Certificates Held</h2>
              
              {/* Desktop Table View */}
              <div className="documents-table">
                <table>
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Document No.</th>
                      <th>Place Issued</th>
                      <th>Date Issued</th>
                      <th>Expiry Date</th>
                      <th>Class (if applicable)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Passport */}
                    <tr>
                      <td><strong>Passport international</strong></td>
                      <td><input type="text" name="passport_document_no" value={formData.passport_document_no} onChange={handleChange} /></td>
                      <td><input type="text" name="passport_place_issued" value={formData.passport_place_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="passport_date_issued" value={formData.passport_date_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="passport_expiry_date" value={formData.passport_expiry_date} onChange={handleChange} /></td>
                      <td></td>
                    </tr>
                    
                    {/* US Visa */}
                    <tr>
                      <td><strong>US Visa</strong></td>
                      <td><input type="text" name="us_visa_document_no" value={formData.us_visa_document_no} onChange={handleChange} /></td>
                      <td><input type="text" name="us_visa_place_issued" value={formData.us_visa_place_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="us_visa_date_issued" value={formData.us_visa_date_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="us_visa_expiry_date" value={formData.us_visa_expiry_date} onChange={handleChange} /></td>
                      <td></td>
                    </tr>
                    
                    {/* Seaman's Identification Card */}
                    <tr>
                      <td><strong>Seaman's Identification Card</strong></td>
                      <td><input type="text" name="seaman_id_document_no" value={formData.seaman_id_document_no} onChange={handleChange} /></td>
                      <td><input type="text" name="seaman_id_place_issued" value={formData.seaman_id_place_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="seaman_id_date_issued" value={formData.seaman_id_date_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="seaman_id_expiry_date" value={formData.seaman_id_expiry_date} onChange={handleChange} /></td>
                      <td></td>
                    </tr>
                    
                    {/* National License */}
                    <tr>
                      <td><strong>National License</strong></td>
                      <td><input type="text" name="national_license_document_no" value={formData.national_license_document_no} onChange={handleChange} /></td>
                      <td><input type="text" name="national_license_place_issued" value={formData.national_license_place_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="national_license_date_issued" value={formData.national_license_date_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="national_license_expiry_date" value={formData.national_license_expiry_date} onChange={handleChange} /></td>
                      <td><input type="text" name="national_license_class" value={formData.national_license_class} onChange={handleChange} placeholder="Class: OS" /></td>
                    </tr>
                    
                    {/* Endorsement */}
                    <tr>
                      <td><strong>Endorsement</strong></td>
                      <td><input type="text" name="endorsement_document_no" value={formData.endorsement_document_no} onChange={handleChange} /></td>
                      <td><input type="text" name="endorsement_place_issued" value={formData.endorsement_place_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="endorsement_date_issued" value={formData.endorsement_date_issued} onChange={handleChange} /></td>
                      <td><input type="date" name="endorsement_expiry_date" value={formData.endorsement_expiry_date} onChange={handleChange} /></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="documents-mobile">
                {/* Passport */}
                <div className="document-card">
                  <h3>Passport international</h3>
                  <div className="form-group">
                    <label>Document No.</label>
                    <input type="text" name="passport_document_no" value={formData.passport_document_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Place Issued</label>
                    <input type="text" name="passport_place_issued" value={formData.passport_place_issued} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date Issued</label>
                      <input type="date" name="passport_date_issued" value={formData.passport_date_issued} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="date" name="passport_expiry_date" value={formData.passport_expiry_date} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* US Visa */}
                <div className="document-card">
                  <h3>US Visa</h3>
                  <div className="form-group">
                    <label>Document No.</label>
                    <input type="text" name="us_visa_document_no" value={formData.us_visa_document_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Place Issued</label>
                    <input type="text" name="us_visa_place_issued" value={formData.us_visa_place_issued} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date Issued</label>
                      <input type="date" name="us_visa_date_issued" value={formData.us_visa_date_issued} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="date" name="us_visa_expiry_date" value={formData.us_visa_expiry_date} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* Seaman's Identification Card */}
                <div className="document-card">
                  <h3>Seaman's Identification Card</h3>
                  <div className="form-group">
                    <label>Document No.</label>
                    <input type="text" name="seaman_id_document_no" value={formData.seaman_id_document_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Place Issued</label>
                    <input type="text" name="seaman_id_place_issued" value={formData.seaman_id_place_issued} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date Issued</label>
                      <input type="date" name="seaman_id_date_issued" value={formData.seaman_id_date_issued} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="date" name="seaman_id_expiry_date" value={formData.seaman_id_expiry_date} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* National License */}
                <div className="document-card">
                  <h3>National License</h3>
                  <div className="form-group">
                    <label>Document No.</label>
                    <input type="text" name="national_license_document_no" value={formData.national_license_document_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Place Issued</label>
                    <input type="text" name="national_license_place_issued" value={formData.national_license_place_issued} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date Issued</label>
                      <input type="date" name="national_license_date_issued" value={formData.national_license_date_issued} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="date" name="national_license_expiry_date" value={formData.national_license_expiry_date} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Class (if applicable)</label>
                    <input type="text" name="national_license_class" value={formData.national_license_class} onChange={handleChange} placeholder="Class: OS" />
                  </div>
                </div>

                {/* Endorsement */}
                <div className="document-card">
                  <h3>Endorsement</h3>
                  <div className="form-group">
                    <label>Document No.</label>
                    <input type="text" name="endorsement_document_no" value={formData.endorsement_document_no} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Place Issued</label>
                    <input type="text" name="endorsement_place_issued" value={formData.endorsement_place_issued} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date Issued</label>
                      <input type="date" name="endorsement_date_issued" value={formData.endorsement_date_issued} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="date" name="endorsement_expiry_date" value={formData.endorsement_expiry_date} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sea Service Data */}
            <div className="form-section">
              <h2 className="form-section-title">LAST 5 YEARS SEA SERVICE DATA</h2>
              
              {/* Desktop Table View */}
              <div className="sea-service-table">
                <table>
                  <thead>
                    <tr>
                      <th>Vessel's Name & IMO Number</th>
                      <th>Engine / Vessel Type</th>
                      <th>DWT / kW</th>
                      <th>Rank</th>
                      <th>Period From</th>
                      <th>Period To</th>
                      <th>Company</th>
                      <th>Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.sea_service.map((service, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            placeholder="Vessel Name"
                            value={service.vessel_name}
                            onChange={(e) => handleSeaServiceChange(index, 'vessel_name', e.target.value)}
                            style={{ marginBottom: '0.5rem' }}
                          />
                          <input
                            type="text"
                            placeholder="IMO Number"
                            value={service.imo_number}
                            onChange={(e) => handleSeaServiceChange(index, 'imo_number', e.target.value)}
                          />
                        </td>
                        <td><input type="text" value={service.engine_vessel_type} onChange={(e) => handleSeaServiceChange(index, 'engine_vessel_type', e.target.value)} /></td>
                        <td><input type="text" value={service.dwt_kw} onChange={(e) => handleSeaServiceChange(index, 'dwt_kw', e.target.value)} /></td>
                        <td><input type="text" value={service.rank} onChange={(e) => handleSeaServiceChange(index, 'rank', e.target.value)} /></td>
                        <td><input type="date" value={service.period_from} onChange={(e) => handleSeaServiceChange(index, 'period_from', e.target.value)} /></td>
                        <td><input type="date" value={service.period_to} onChange={(e) => handleSeaServiceChange(index, 'period_to', e.target.value)} /></td>
                        <td><input type="text" value={service.company} onChange={(e) => handleSeaServiceChange(index, 'company', e.target.value)} /></td>
                        <td><input type="text" value={service.flag} onChange={(e) => handleSeaServiceChange(index, 'flag', e.target.value)} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="sea-service-mobile">
                {formData.sea_service.map((service, index) => (
                  <div key={index} className="sea-service-card">
                    <h3>Vessel {index + 1}</h3>
                    <div className="form-group">
                      <label>Vessel Name</label>
                      <input
                        type="text"
                        placeholder="Enter vessel name"
                        value={service.vessel_name}
                        onChange={(e) => handleSeaServiceChange(index, 'vessel_name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>IMO Number</label>
                      <input
                        type="text"
                        placeholder="Enter IMO number"
                        value={service.imo_number}
                        onChange={(e) => handleSeaServiceChange(index, 'imo_number', e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Engine / Vessel Type</label>
                        <input
                          type="text"
                          value={service.engine_vessel_type}
                          onChange={(e) => handleSeaServiceChange(index, 'engine_vessel_type', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>DWT / kW</label>
                        <input
                          type="text"
                          value={service.dwt_kw}
                          onChange={(e) => handleSeaServiceChange(index, 'dwt_kw', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Rank</label>
                        <input
                          type="text"
                          value={service.rank}
                          onChange={(e) => handleSeaServiceChange(index, 'rank', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Period From</label>
                        <input
                          type="date"
                          value={service.period_from}
                          onChange={(e) => handleSeaServiceChange(index, 'period_from', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Period To</label>
                        <input
                          type="date"
                          value={service.period_to}
                          onChange={(e) => handleSeaServiceChange(index, 'period_to', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          type="text"
                          value={service.company}
                          onChange={(e) => handleSeaServiceChange(index, 'company', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Flag</label>
                        <input
                          type="text"
                          value={service.flag}
                          onChange={(e) => handleSeaServiceChange(index, 'flag', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GDPR Consent */}
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
                  I hereby explicitly consent that my personal data can be captured, processed and stored by the crewing agents and prospective employer as is necessary for the company to offer me employment on board one of their vessels under crewing management. This includes, but is not limited to, sharing my data with owners, charterers, port agents, manning agents, travel agents, marine authorities or other organizations. The prospective employer undertakes to use this information solely in connection with assessing whether to offer me employment, and for no other purpose. In accordance with GDPR, I understand I have rights regarding my data, and can contact the crewing agent at any time to exercise these rights. *
                </span>
              </label>
              {errors.gdpr && <span className="error-message">{errors.gdpr}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '2rem', fontSize: '1.1rem', padding: '1rem' }}
              disabled={uploadingPhoto}
            >
              {uploadingPhoto ? 'Uploading Photo...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
