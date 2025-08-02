import React, { useState, useEffect } from 'react';
import './App.css';
import NewsSection from './components/NewsSection';
import WeatherSection from './components/WeatherSection';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        {error && <div className="error">{error}</div>}
        <div className="dashboard-grid">
          <NewsSection />
          <WeatherSection />
        </div>
      </div>
    </div>
  );
}

export default App; 