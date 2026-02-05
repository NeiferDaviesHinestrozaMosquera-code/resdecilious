import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/ui/LoadingScreen';
import './App.css';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;