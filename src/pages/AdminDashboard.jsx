import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import '../styles/Pages.css';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    loadApplications();
  }, [statusFilter]);

  const checkAuth = () => {
    const session = storage.getAdminSession();
    if (!session) {
      navigate('/admin/login');
    }
  };

  const loadApplications = () => {
    setLoading(true);
    let apps = storage.getApplications();
    
    if (statusFilter !== 'all') {
      apps = apps.filter(app => app.status === statusFilter);
    }
    
    // Sort by most recent
    apps.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    setApplications(apps);
    setLoading(false);
  };

  const handleStatusChange = (id, newStatus) => {
    storage.updateApplication(id, { status: newStatus });
    loadApplications();
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
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
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
                        {app.name} {app.surname}
                      </h2>
                      <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        Application ID: {app.application_id || app.id.slice(-12)}
                      </p>
                      <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        Submitted: {formatDate(app.created_at)}
                      </p>
                    </div>
                    <div>
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
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <strong>Rank Applied For:</strong>
                      <p>{app.rank_applied_for || app.rank}</p>
                    </div>
                    <div>
                      <strong>Experience (Contracts):</strong>
                      <p>{app.experience_contracts || app.contracts}</p>
                    </div>
                    <div>
                      <strong>Total Sea Time (Months):</strong>
                      <p>{app.experience_sea_time_months || app.seaTime}</p>
                    </div>
                    <div>
                      <strong>Phone:</strong>
                      <p><a href={`tel:${app.phone_number || app.phone}`}>{app.phone_number || app.phone}</a></p>
                    </div>
                    <div>
                      <strong>Email:</strong>
                      <p><a href={`mailto:${app.email_address || app.email}`}>{app.email_address || app.email}</a></p>
                    </div>
                    <div>
                      <strong>GDPR Agreed:</strong>
                      <p>{app.gdpr_agreed || app.gdprAgreed ? '✓ Yes' : '✗ No'}</p>
                    </div>
                  </div>

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
