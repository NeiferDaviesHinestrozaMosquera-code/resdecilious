import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Implementar lógica de login con Firebase
    console.log('Login:', email, password);
    return Promise.resolve();
  };

  const logout = async () => {
    // Implementar lógica de logout
    console.log('Logout');
    return Promise.resolve();
  };

  useEffect(() => {
    // Simular carga inicial
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};