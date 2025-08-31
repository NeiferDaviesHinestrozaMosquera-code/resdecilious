import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  background: #34495e;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <h1>ResDelicious</h1>
        <p>Tu restaurante favorito</p>
      </Header>
      
      <Main>
        <Outlet />
      </Main>
      
      <Footer>
        <p>&copy; 2025 ResDelicious. Todos los derechos reservados.</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;