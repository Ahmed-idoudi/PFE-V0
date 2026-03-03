import axios from 'axios';

// NOTE: Replace with your machine's IP address if testing on a physical device,
// OR leave as localhost/10.0.2.2 if testing on Android Emulator
const API_BASE_URL = 'http://192.168.1.12:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
});

export const fetchTrains = async () => {
    try {
        const response = await api.get('/trains');
        return response.data;
    } catch (error) {
        console.error('Error fetching trains from API', error);
        throw error;
    }
};

export default api;
