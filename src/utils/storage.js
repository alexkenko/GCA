// Simple storage utility for applications
// In production, replace with API calls to your backend

const STORAGE_KEY = 'crew_applications';
const ADMIN_STORAGE_KEY = 'admin_session';

export const storage = {
  // Application storage
  saveApplication: (application) => {
    const applications = storage.getApplications();
    const newApplication = {
      ...application,
      id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      created_at: new Date().toISOString(),
      status: 'pending'
    };
    applications.push(newApplication);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    return newApplication;
  },

  getApplications: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  updateApplication: (id, updates) => {
    const applications = storage.getApplications();
    const index = applications.findIndex(app => app.id === id);
    if (index !== -1) {
      applications[index] = {
        ...applications[index],
        ...updates,
        updated_at: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
      return applications[index];
    }
    return null;
  },

  // Admin session
  setAdminSession: (email) => {
    const session = {
      email,
      loginTime: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));
  },

  getAdminSession: () => {
    const data = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!data) return null;
    
    const session = JSON.parse(data);
    if (new Date(session.expiresAt) < new Date()) {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      return null;
    }
    return session;
  },

  clearAdminSession: () => {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  }
};

