import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #2980b9;
  }
`;

const SettingsManager = () => {
  const [settings, setSettings] = useState({
    restaurantName: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleSave = () => {
    console.log('Guardando configuración:', settings);
    alert('Configuración guardada');
  };

  return (
    <Container>
      <h2>Configuración del Sitio</h2>
      <Input
        type="text"
        placeholder="Nombre del restaurante"
        value={settings.restaurantName}
        onChange={(e) => setSettings({...settings, restaurantName: e.target.value})}
      />
      <Input
        type="tel"
        placeholder="Teléfono"
        value={settings.phone}
        onChange={(e) => setSettings({...settings, phone: e.target.value})}
      />
      <Input
        type="email"
        placeholder="Email"
        value={settings.email}
        onChange={(e) => setSettings({...settings, email: e.target.value})}
      />
      <Input
        type="text"
        placeholder="Dirección"
        value={settings.address}
        onChange={(e) => setSettings({...settings, address: e.target.value})}
      />
      <Button onClick={handleSave}>Guardar Configuración</Button>
    </Container>
  );
};

export default SettingsManager;