import axios from 'axios';

const API_URL = 'http://localhost:7100';

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
    const response = await axios.get(`${API_URL}/reservas/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};