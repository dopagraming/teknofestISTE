import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export const joinAPI = {
  submit: (data) => api.post('/api/join', data),
  getAll: () => api.get('/api/join'),
  updateStatus: (id, status) => api.patch(`/api/join/${id}`, { status })
};

export const projectAPI = {
  getAll: () => api.get('/api/projects'),
  create: (data) => api.post('/api/projects', data),
  update: (id, data) => api.put(`/api/projects/${id}`, data),
  delete: (id) => api.delete(`/api/projects/${id}`)
};

export const teamAPI = {
  getAll: () => api.get('/api/team'),
  create: (data) => api.post('/api/team', data),
  update: (id, data) => api.put(`/api/team/${id}`, data),
  delete: (id) => api.delete(`/api/team/${id}`)
};

export const eventAPI = {
  getAll: () => api.get('/api/events'),
  create: (data) => api.post('/api/events', data),
  update: (id, data) => api.put(`/api/events/${id}`, data),
  delete: (id) => api.delete(`/api/events/${id}`)
};

export const galleryAPI = {
  getAll: () => api.get('/api/gallery'),
  upload: (data) => api.post('/api/gallery', data),
  delete: (id) => api.delete(`/api/gallery/${id}`)
};

export const contactAPI = {
  submit: (data) => api.post('/api/contact', data),
  getAll: () => api.get('/api/contact'),
  updateStatus: (id, status) => api.patch(`/api/contact/${id}`, { status }),
  delete: (id) => api.delete(`/api/contact/${id}`)
};

export const settingsAPI = {
  get: () => api.get('/api/settings'),
  update: (data) => api.put('/api/settings', data)
};

export const authAPI = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  verify: () => api.get('/api/auth/verify')
};

export default api;