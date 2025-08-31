import React, { useState } from 'react';
import styled from 'styled-components';
import MenuManager from '../../components/admin/MenuManager';
import SettingsManager from '../../components/admin/SettingsManager';
import SocialMediaManager from '../../components/admin/SocialMediaManager';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const TabButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: ${props => props.active ? '#3498db' : 'transparent'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #3498db;
  }
`;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <DashboardContainer>
      <Sidebar>
        <h2>Admin Panel</h2>
        <TabButton 
          active={activeTab === 'menu'} 
          onClick={() => setActiveTab('menu')}
        >
          Menu Management
        </TabButton>
        <TabButton 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        >
          Site Settings
        </TabButton>
        <TabButton 
          active={activeTab === 'social'} 
          onClick={() => setActiveTab('social')}
        >
          Social Media
        </TabButton>
      </Sidebar>
      
      <MainContent>
        {activeTab === 'menu' && <MenuManager />}
        {activeTab === 'settings' && <SettingsManager />}
        {activeTab === 'social' && <SocialMediaManager />}
      </MainContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;