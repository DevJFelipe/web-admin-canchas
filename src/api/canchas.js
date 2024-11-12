import axios from 'axios';

const API_URL = process.env.REACT_APP_API_CANCHAS || 'http://localhost:7100';

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

// Get all canchas
export const getCanchas = async () => {
    console.log('API_URL:', API_URL);
    try {
        const response = await axios.get('/canchas');
        return response.data;
    } catch (error) {
        console.error('Error getting canchas:', error);
        throw error;
    }
};

// Get single cancha by ID
export const getCanchaById = async (id) => {
    try {
        const response = await axios.get(`/canchas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting cancha:', error);
        throw error;
    }
};

// Create new cancha
export const createCancha = async (canchaData) => {
    try {
        const response = await axios.post('/canchas', canchaData);
        return response.data;
    } catch (error) {
        console.error('Error creating cancha:', error);
        throw error;
    }
};

// Update cancha
export const updateCancha = async (id, canchaData) => {
    try {
        const response = await axios.put(`/canchas/${id}`, canchaData);
        return response.data;
    } catch (error) {
        console.error('Error updating cancha:', error);
        throw error;
    }
};

// Delete cancha
export const deleteCancha = async (id) => {
    try {
        const response = await axios.delete(`/canchas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting cancha:', error);
        throw error;
    }
};