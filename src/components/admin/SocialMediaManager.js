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

const SocialMediaManager = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: ''
  });

  const handleSave = () => {
    console.log('Guardando enlaces sociales:', socialLinks);
    alert('Enlaces sociales guardados');
  };

  return (
    <Container>
      <h2>Redes Sociales</h2>
      <Input
        type="url"
        placeholder="Facebook URL"
        value={socialLinks.facebook}
        onChange={(e) => setSocialLinks({...socialLinks, facebook: e.target.value})}
      />
      <Input
        type="url"
        placeholder="Instagram URL"
        value={socialLinks.instagram}
        onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
      />
      <Input
        type="url"
        placeholder="Twitter URL"
        value={socialLinks.twitter}
        onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
      />
      <Input
        type="tel"
        placeholder="WhatsApp (ej: +1234567890)"
        value={socialLinks.whatsapp}
        onChange={(e) => setSocialLinks({...socialLinks, whatsapp: e.target.value})}
      />
      <Button onClick={handleSave}>Guardar Redes Sociales</Button>
    </Container>
  );
};

export default SocialMediaManager;