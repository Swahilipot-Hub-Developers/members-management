import axios from 'axios';

const api = axios.create({
    baseURL: 'https://codeschris.pythonanywhere.com/', // Replace with your Django API URL
    withCredentials: true,
});

export const getCSRFToken = async () => {
    try {
        const response = await api.get('api/csrf-token/'); // Replace with your CSRF token endpoint
        return response.data.csrfToken;
    } catch (error) {
        console.error('Failed to fetch CSRF token', error);
        throw error;
    }
};


export const login = async (credentials) => {
    try {
        const csrfToken = await getCSRFToken();
        credentials.csrfmiddlewaretoken = csrfToken;

        const response = await api.post('api/login/', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};
