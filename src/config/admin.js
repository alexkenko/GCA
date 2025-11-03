// Admin configuration
// IMPORTANT: Change this password in production!
// In a real application, use proper authentication with hashed passwords

export const ADMIN_CREDENTIALS = {
  username: 'Capitanio',
  password: 'Steven@Gerrard8'
};

export const isAdminUsername = (username) => {
  return username === ADMIN_CREDENTIALS.username;
};

