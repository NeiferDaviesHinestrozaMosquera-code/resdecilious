import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;