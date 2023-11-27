import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Replace with your Django API URL
    withCredentials: true,
});

export const login = async (credentials) => {
    try {
        const response = await api.post('api/login/', credentials); // Replace with your login endpoint
        return response.data;
    } catch (error) {
        throw error;
    }
};
