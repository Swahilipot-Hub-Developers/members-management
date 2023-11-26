import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('https://codeschris.pythonanywhere.com/api/login/', credentials, {
                withCredentials: true,
            });
      
            if (response.status === 200) {
                const userData = response.data;
                setUser(userData);
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('https://codeschris.pythonanywhere.com/api/logout/', null, {
                withCredentials: true,
            });
    
            setUser(null);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;
