import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://codeschris.pythonanywhere.com/',
    withCredentials: true, 
});

export const login = async (credentials) => {
    try {
        const response = await axios.post('https://codeschris.pythonanywhere.com/api/login/', credentials, {
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
      const response = await instance.post('api/logout/');
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error);
      throw error.response.data;
    }
  };