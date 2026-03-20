// API Configuration
// Automatically switch between localhost (development) and production backend

const getApiBaseUrl = () => {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '"https://your-backend.onrender.com"';
  }
  return 'https://backend-58cw.onrender.com';
};

export const API_BASE_URL = getApiBaseUrl();

export const WS_BASE_URL = API_BASE_URL.replace(/^http/, 'ws');

export default API_BASE_URL;
