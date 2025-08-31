import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import LoadingScreen from './components/ui/LoadingScreen';
import { SmoothScrollProvider } from './contexts/SmoothScrollContext';
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <SmoothScrollProvider>
          <Router>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                </Route>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
              </Routes>
            </Suspense>
          </Router>
        </SmoothScrollProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;