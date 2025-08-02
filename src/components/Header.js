import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-title">
            <h1>News & Weather Dashboard</h1>
            <p>Stay informed with real-time updates</p>
          </div>
          <div className="header-time">
            <span>{new Date().toLocaleDateString()}</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 