import axios from 'axios';

const API_URL = process.env.REACT_APP_API_CANCHAS || 'http://localhost:7100';

// Función para obtener el token del localStorage
const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.token;
};

// Configurar axios con interceptor para incluir el token
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Get all canchas
export const getCanchas = async () => {
  try {
    const response = await axiosInstance.get('/canchas');
    return response.data;
  } catch (error) {
    console.error('Error getting canchas:', error);
    throw error;
  }
};

// Get single cancha by ID
export const getCanchaById = async (id) => {
  try {
    const response = await axiosInstance.get(`/canchas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting cancha:', error);
    throw error;
  }
};

// Create new cancha
export const createCancha = async (canchaData) => {
  try {
    const response = await axiosInstance.post('/canchas', canchaData);
    return response.data;
  } catch (error) {
    console.error('Error creating cancha:', error);
    throw error;
  }
};

// Update cancha
export const updateCancha = async (id, canchaData) => {
  try {
    const response = await axiosInstance.put(`/canchas/${id}`, canchaData);
    return response.data;
  } catch (error) {
    console.error('Error updating cancha:', error);
    throw error;
  }
};

// Delete cancha
export const deleteCancha = async (id) => {
  try {
    const response = await axiosInstance.delete(`/canchas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting cancha:', error);
    throw error;
  }
};