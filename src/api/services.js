import axiosInstance from './axiosInstance'

// Auth Services
export const authService = {
  login: (email, password) => axiosInstance.post('/auth/login', { email, password }),
  register: (userData) => axiosInstance.post('/auth/register', userData),
  logout: () => axiosInstance.post('/auth/logout')
}

// Farmer Services
export const farmerService = {
  getDashboard: () => axiosInstance.get('/farmer/dashboard'),
  getCrops: () => axiosInstance.get('/farmer/crops'),
  reportIssue: (data) => axiosInstance.post('/farmer/report-issue', data),
  getAlerts: () => axiosInstance.get('/farmer/alerts')
}

// Agronomist Services
export const agronomistService = {
  getDashboard: () => axiosInstance.get('/agronomist/dashboard'),
  getAppointmentRequests: () => axiosInstance.get('/agronomist/appointments/pending'),
  getReports: () => axiosInstance.get('/agronomist/reports'),
  submitReport: (data) => axiosInstance.post('/agronomist/reports', data)
}

// Buyer Services
export const buyerService = {
  getMarketplace: () => axiosInstance.get('/buyer/marketplace'),
  searchProducts: (query) => axiosInstance.get('/buyer/search', { params: { q: query } }),
  placeOrder: (data) => axiosInstance.post('/buyer/orders', data)
}

// Cooperative Services
export const cooperativeService = {
  getDashboard: () => axiosInstance.get('/coop/dashboard'),
  getMembers: () => axiosInstance.get('/coop/members'),
  getSales: () => axiosInstance.get('/coop/sales')
}

// Market/General Services
export const marketService = {
  getMarketData: () => axiosInstance.get('/market/data'),
  getPrices: () => axiosInstance.get('/market/prices'),
  getFeaturedProducts: () => axiosInstance.get('/market/featured')
}

// Admin Services
export const adminService = {
  getDashboard: () => axiosInstance.get('/admin/dashboard'),
  getAllUsers: () => axiosInstance.get('/admin/users'),
  getSystemStats: () => axiosInstance.get('/admin/system-stats')
}
