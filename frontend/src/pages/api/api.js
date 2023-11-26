import axios from 'axios';
import Cookies from 'js-cookie';

const getCsrfToken = () => {
    return Cookies.get('csrftoken');  // Use the correct cookie name
};

const csrfToken = getCsrfToken();

const axiosInstance = axios.create({
    baseURL: 'https://codeschris.pythonanywhere.com/',
    headers: {
        'X-CSRFToken': csrfToken,
    },
    withCredentials: true, 
});

export const login = async (credentials) => {
    try {
        const response = await axiosInstance.post('https://codeschris.pythonanywhere.com/api/login/', credentials, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('Login Error:', error);
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const response = await axiosInstance.post('https://codeschris.pythonanywhere.com/api/logout/');  // Use the complete URL
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error.response.data;
    }
};