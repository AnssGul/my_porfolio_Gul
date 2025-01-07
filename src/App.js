import React, { useState } from 'react'; // Import useState from React
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Removed unused 'Router'
import Home from './pages/home/home'; // Ensure the correct path is used for Home
import Bio from './pages/bio'; // Uncomment this if you're using the Bio component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        transition: 'all 0.3s ease',
        minHeight: '100vh',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          />
          {/* Uncomment the line below if the Bio component is available */}
          <Route path="/bio" element={<Bio isDarkMode={isDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


