import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import '../styles/Pages.css';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [imageErrors, setImageErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const session = storage.getAdminSession();
    if (!session) {
      navigate('/admin/login');
      return;
    }
    loadApplications();
  }, [statusFilter, navigate]);

  const loadApplications = async () => {
    setLoading(true);
    try {
      console.log('Loading applications from Supabase...');
      let apps = await storage.getApplications();
      console.log('Applications loaded:', apps);
      // Debug: Log photo URLs
      apps.forEach(app => {
        if (app.photo_url) {
          console.log(`Application ${app.id} has photo_url:`, app.photo_url);
        } else {
          console.log(`Application ${app.id} has NO photo_url`);
        }
      });
      
      if (statusFilter !== 'all') {
        apps = apps.filter(app => app.status === statusFilter);
      }
      
      setApplications(apps);
    } catch (error) {
      console.error('Error loading applications:', error);
      alert('Error loading applications: ' + (error.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await storage.updateApplication(id, { status: newStatus });
      loadApplications();
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Failed to update application status. Please try again.');
    }
  };

  const handleDelete = async (id, applicantName) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the application from ${applicantName}?\n\nThis action cannot be undone.`
    );
    
    if (!confirmed) return;

    try {
      await storage.deleteApplication(id);
      loadApplications();
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application. Please try again.');
    }
  };

  const handleLogout = () => {
    storage.clearAdminSession();
    navigate('/admin/login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && applications.length === 0) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="luxury-box" style={{ textAlign: 'center', padding: '3rem' }}>
            <p>Loading applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1>Admin Dashboard - Crew Applications</h1>
            <button 
              onClick={handleLogout} 
              className="btn btn-secondary" 
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none'
              }}
            >
              Logout
            </button>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ marginRight: '1rem', fontWeight: 600 }}>Filter by Status:</label>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '2px solid rgba(0, 51, 102, 0.1)' }}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="contacted">Contacted</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
            <span style={{ marginLeft: '1rem', color: '#555' }}>
              Total: {applications.length} application(s)
            </span>
          </div>

          {applications.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#555' }}>
              <p style={{ fontSize: '1.2rem' }}>No applications found.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {applications.map((app) => (
                <div key={app.id} className="luxury-box" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                    <div>
                      <h2 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.5rem' }}>
                        {(app.first_name || app.name) || 'N/A'} {app.surname || ''}
                      </h2>
                      <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        Application ID: {app.application_id || app.id?.slice(-12) || 'N/A'}
                      </p>
                      <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        Submitted: {formatDate(app.created_at)}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          border: '2px solid var(--marine-blue-light)',
                          backgroundColor: 'white',
                          fontWeight: 600
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="contacted">Contacted</option>
                        <option value="hired">Hired</option>
                        <option value="rejected">Rejected</option>
                      </select>
                      <button
                        onClick={() => handleDelete(app.id, `${app.name} ${app.surname}`)}
                        className="btn btn-secondary"
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.9rem'
                        }}
                        title="Delete this application"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* CV Photo */}
                  {(app.photo_url || app.photoUrl) ? (
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem' }}>CV Photo</h3>
                      {imageErrors[app.id] ? (
                        <div style={{ 
                          padding: '2rem', 
                          backgroundColor: '#f8f9fa', 
                          border: '2px dashed #ccc',
                          borderRadius: '12px',
                          color: '#666'
                        }}>
                          <p style={{ margin: 0 }}>⚠️ Photo could not be loaded</p>
                          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>URL: {app.photo_url || app.photoUrl}</p>
                          <a 
                            href={app.photo_url || app.photoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              display: 'inline-block', 
                              marginTop: '0.5rem',
                              color: 'var(--marine-blue)',
                              textDecoration: 'underline'
                            }}
                          >
                            Open in new tab
                          </a>
                        </div>
                      ) : (
                        <img 
                          src={app.photo_url || app.photoUrl} 
                          alt={`${app.first_name || app.name} ${app.surname} - CV Photo`}
                          onError={(e) => {
                            console.error('Image load error for application:', app.id, 'URL:', app.photo_url || app.photoUrl);
                            setImageErrors(prev => ({ ...prev, [app.id]: true }));
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully for application:', app.id, 'URL:', app.photo_url || app.photoUrl);
                          }}
                          style={{
                            maxWidth: '300px',
                            maxHeight: '400px',
                            width: 'auto',
                            height: 'auto',
                            border: '3px solid var(--marine-blue-light)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0, 51, 102, 0.2)',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto'
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <div style={{ marginBottom: '2rem', textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', border: '2px dashed #ccc', borderRadius: '12px', color: '#666' }}>
                      <p style={{ margin: 0 }}>📷 No photo uploaded</p>
                      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>This application was submitted without a CV photo.</p>
                    </div>
                  )}

                  {/* Position Information */}
                  <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '12px' }}>
                    <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--marine-blue-light)', paddingBottom: '0.5rem' }}>
                      Position Information
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                      <div>
                        <strong>Position Applied For:</strong>
                        <p>{app.position_applied_for || app.rank_applied_for || 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Date of Availability:</strong>
                        <p>{app.date_of_availability ? new Date(app.date_of_availability).toLocaleDateString() : 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Last Salary:</strong>
                        <p>{app.last_salary || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {/* General Information */}
                  <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '12px' }}>
                    <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--marine-blue-light)', paddingBottom: '0.5rem' }}>
                      General Information
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                      <div>
                        <strong>First Name:</strong>
                        <p>{app.first_name || app.name || 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Surname:</strong>
                        <p>{app.surname || 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Date of Birth:</strong>
                        <p>{app.date_of_birth ? new Date(app.date_of_birth).toLocaleDateString() : 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Place of Birth:</strong>
                        <p>{app.place_of_birth || 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Nationality:</strong>
                        <p>{app.nationality || 'N/A'}</p>
                      </div>
                      <div>
                        <strong>Mobile Phone:</strong>
                        <p><a href={`tel:${app.mobile_phone || app.phone_number || app.phone}`}>
                          {app.mobile_phone || app.phone_number || app.phone || 'N/A'}
                        </a></p>
                      </div>
                      {app.home_telephone && (
                        <div>
                          <strong>Home Telephone:</strong>
                          <p><a href={`tel:${app.home_telephone}`}>{app.home_telephone}</a></p>
                        </div>
                      )}
                      <div>
                        <strong>Email Address:</strong>
                        <p><a href={`mailto:${app.email_address || app.email}`}>
                          {app.email_address || app.email || 'N/A'}
                        </a></p>
                      </div>
                      {app.home_address && (
                        <div style={{ gridColumn: '1 / -1' }}>
                          <strong>Home Address:</strong>
                          <p>{app.home_address}</p>
                        </div>
                      )}
                      <div>
                        <strong>GDPR Agreed:</strong>
                        <p>{app.gdpr_agreed || app.gdprAgreed ? '✓ Yes' : '✗ No'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Documents/Certificates */}
                  {app.documents && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '12px' }}>
                      <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--marine-blue-light)', paddingBottom: '0.5rem' }}>
                        Documents/Certificates Held
                      </h3>
                      <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {app.documents.passport && (app.documents.passport.document_no || app.documents.passport.place_issued || app.documents.passport.date_issued) && (
                          <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                            <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.75rem' }}>Passport International</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
                              {app.documents.passport.document_no && <div><strong>Document No:</strong> {app.documents.passport.document_no}</div>}
                              {app.documents.passport.place_issued && <div><strong>Place Issued:</strong> {app.documents.passport.place_issued}</div>}
                              {app.documents.passport.date_issued && <div><strong>Date Issued:</strong> {new Date(app.documents.passport.date_issued).toLocaleDateString()}</div>}
                              {app.documents.passport.expiry_date && <div><strong>Expiry Date:</strong> {new Date(app.documents.passport.expiry_date).toLocaleDateString()}</div>}
                            </div>
                          </div>
                        )}
                        
                        {app.documents.us_visa && (app.documents.us_visa.document_no || app.documents.us_visa.place_issued || app.documents.us_visa.date_issued) && (
                          <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                            <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.75rem' }}>US Visa</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
                              {app.documents.us_visa.document_no && <div><strong>Document No:</strong> {app.documents.us_visa.document_no}</div>}
                              {app.documents.us_visa.place_issued && <div><strong>Place Issued:</strong> {app.documents.us_visa.place_issued}</div>}
                              {app.documents.us_visa.date_issued && <div><strong>Date Issued:</strong> {new Date(app.documents.us_visa.date_issued).toLocaleDateString()}</div>}
                              {app.documents.us_visa.expiry_date && <div><strong>Expiry Date:</strong> {new Date(app.documents.us_visa.expiry_date).toLocaleDateString()}</div>}
                            </div>
                          </div>
                        )}
                        
                        {app.documents.seaman_id && (app.documents.seaman_id.document_no || app.documents.seaman_id.place_issued || app.documents.seaman_id.date_issued) && (
                          <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                            <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.75rem' }}>Seaman's Identification Card</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
                              {app.documents.seaman_id.document_no && <div><strong>Document No:</strong> {app.documents.seaman_id.document_no}</div>}
                              {app.documents.seaman_id.place_issued && <div><strong>Place Issued:</strong> {app.documents.seaman_id.place_issued}</div>}
                              {app.documents.seaman_id.date_issued && <div><strong>Date Issued:</strong> {new Date(app.documents.seaman_id.date_issued).toLocaleDateString()}</div>}
                              {app.documents.seaman_id.expiry_date && <div><strong>Expiry Date:</strong> {new Date(app.documents.seaman_id.expiry_date).toLocaleDateString()}</div>}
                            </div>
                          </div>
                        )}
                        
                        {app.documents.national_license && (app.documents.national_license.document_no || app.documents.national_license.place_issued || app.documents.national_license.date_issued) && (
                          <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                            <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.75rem' }}>National License</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
                              {app.documents.national_license.document_no && <div><strong>Document No:</strong> {app.documents.national_license.document_no}</div>}
                              {app.documents.national_license.place_issued && <div><strong>Place Issued:</strong> {app.documents.national_license.place_issued}</div>}
                              {app.documents.national_license.date_issued && <div><strong>Date Issued:</strong> {new Date(app.documents.national_license.date_issued).toLocaleDateString()}</div>}
                              {app.documents.national_license.expiry_date && <div><strong>Expiry Date:</strong> {new Date(app.documents.national_license.expiry_date).toLocaleDateString()}</div>}
                              {app.documents.national_license.class && <div><strong>Class:</strong> {app.documents.national_license.class}</div>}
                            </div>
                          </div>
                        )}
                        
                        {app.documents.endorsement && (app.documents.endorsement.document_no || app.documents.endorsement.place_issued || app.documents.endorsement.date_issued) && (
                          <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                            <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '0.75rem' }}>Endorsement</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.9rem' }}>
                              {app.documents.endorsement.document_no && <div><strong>Document No:</strong> {app.documents.endorsement.document_no}</div>}
                              {app.documents.endorsement.place_issued && <div><strong>Place Issued:</strong> {app.documents.endorsement.place_issued}</div>}
                              {app.documents.endorsement.date_issued && <div><strong>Date Issued:</strong> {new Date(app.documents.endorsement.date_issued).toLocaleDateString()}</div>}
                              {app.documents.endorsement.expiry_date && <div><strong>Expiry Date:</strong> {new Date(app.documents.endorsement.expiry_date).toLocaleDateString()}</div>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Sea Service Data */}
                  {app.sea_service && Array.isArray(app.sea_service) && app.sea_service.some(service => 
                    service.vessel_name || service.imo_number || service.rank || service.company
                  ) && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '12px' }}>
                      <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--marine-blue-light)', paddingBottom: '0.5rem' }}>
                        Last 5 Years Sea Service Data
                      </h3>
                      <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {app.sea_service.map((service, index) => {
                          if (!service.vessel_name && !service.imo_number && !service.rank && !service.company) {
                            return null;
                          }
                          return (
                            <div key={index} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--marine-blue-light)' }}>
                              <h4 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem' }}>Vessel {index + 1}</h4>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.9rem' }}>
                                {service.vessel_name && <div><strong>Vessel Name:</strong> {service.vessel_name}</div>}
                                {service.imo_number && <div><strong>IMO Number:</strong> {service.imo_number}</div>}
                                {service.engine_vessel_type && <div><strong>Engine / Vessel Type:</strong> {service.engine_vessel_type}</div>}
                                {service.dwt_kw && <div><strong>DWT / kW:</strong> {service.dwt_kw}</div>}
                                {service.rank && <div><strong>Rank:</strong> {service.rank}</div>}
                                {service.period_from && <div><strong>Period From:</strong> {new Date(service.period_from).toLocaleDateString()}</div>}
                                {service.period_to && <div><strong>Period To:</strong> {new Date(service.period_to).toLocaleDateString()}</div>}
                                {service.company && <div><strong>Company:</strong> {service.company}</div>}
                                {service.flag && <div><strong>Flag:</strong> {service.flag}</div>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Legacy Experience Fields (if no sea_service data) */}
                  {(app.experience_contracts !== null || app.experience_sea_time_months !== null) && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '12px' }}>
                      <h3 style={{ color: 'var(--marine-blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--marine-blue-light)', paddingBottom: '0.5rem' }}>
                        Experience (Legacy Data)
                      </h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {app.experience_contracts !== null && (
                          <div>
                            <strong>Number of Contracts:</strong>
                            <p>{app.experience_contracts}</p>
                          </div>
                        )}
                        {app.experience_sea_time_months !== null && (
                          <div>
                            <strong>Total Sea Time (Months):</strong>
                            <p>{app.experience_sea_time_months}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {app.admin_notes && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '8px' }}>
                      <strong>Admin Notes:</strong>
                      <p style={{ marginTop: '0.5rem' }}>{app.admin_notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
