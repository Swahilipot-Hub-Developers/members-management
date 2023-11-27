import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated on initial load
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/', { withCredentials: true });
        const userData = response.data;
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', credentials, { withCredentials: true });
      const userData = response.data;
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout/', null, { withCredentials: true });
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const contextValue = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

