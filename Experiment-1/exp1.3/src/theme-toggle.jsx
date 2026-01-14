import React, { useState, useEffect } from 'react';
import './App.css';

const ThemeToggle = () => {
  // 1. Use state to track theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Change styles dynamically by toggling a data-attribute
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    
      
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;