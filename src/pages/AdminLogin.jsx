import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import { ADMIN_CREDENTIALS, isAdminEmail } from '../config/admin';
import '../styles/Pages.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const session = storage.getAdminSession();
    if (session) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple authentication
    setTimeout(() => {
      if (!isAdminEmail(email)) {
        setError('Invalid email address.');
        setLoading(false);
        return;
      }

      if (password !== ADMIN_CREDENTIALS.password) {
        setError('Invalid password.');
        setLoading(false);
        return;
      }

      // Set session
      storage.setAdminSession(email);
      
      // Redirect to dashboard
      navigate('/admin/dashboard');
    }, 500); // Small delay for UX
  };

  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container" style={{ maxWidth: '500px' }}>
        <div className="luxury-box">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h1>
          
          <form onSubmit={handleSubmit} className="application-form">
            {error && (
              <div style={{ 
                padding: '1rem', 
                marginBottom: '1.5rem', 
                backgroundColor: '#fee', 
                color: '#c33', 
                borderRadius: '8px',
                border: '2px solid #c33'
              }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@gcagency.ge"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem', padding: '1rem' }}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--marine-blue-pale)', borderRadius: '8px', fontSize: '0.9rem', color: '#555' }}>
            <strong>Note:</strong> This page is not linked in the public navigation. Only administrators have access.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
