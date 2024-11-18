import axios from 'axios';

const API_URL = 'http://localhost:7100';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const createReserva = async (reservaData) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axios.post(`${API_URL}/reservas`, reservaData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getUserReservas = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    if (!token) {
      throw new Error('No authentication token');
    }

    const response = await axiosInstance.get('/reservas/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
    throw error.response?.data || error;
  }
};

export const deleteReserva = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    const response = await axiosInstance.delete(`/reservas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};