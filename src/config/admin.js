// Admin configuration
// IMPORTANT: Change this password in production!
// In a real application, use proper authentication with hashed passwords

export const ADMIN_CREDENTIALS = {
  email: 'admin@gcagency.ge',
  // Default password - CHANGE THIS IN PRODUCTION!
  password: 'admin123' // You should change this to a secure password
};

export const isAdminEmail = (email) => {
  return email === ADMIN_CREDENTIALS.email;
};

