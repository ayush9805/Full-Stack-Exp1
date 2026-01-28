// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SetupCarousel from './components/SetupCarousel';
import Footer from './components/Footer'; // <--- IMPORT THIS
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ROLE_DATA } from './data';

const theme = createTheme({
  typography: { fontFamily: '"Inter", sans-serif' },
  palette: { mode: 'dark' }
});

function App() {
  const [activeRoleKey, setActiveRoleKey] = useState('engineering');
  const [activeSetup, setActiveSetup] = useState(ROLE_DATA['engineering'].items[0]);

  useEffect(() => {
    if (ROLE_DATA[activeRoleKey]) {
      setActiveSetup(ROLE_DATA[activeRoleKey].items[0]);
    }
  }, [activeRoleKey]);

  return (
    <ThemeProvider theme={theme}>
      <div className="container-fluid p-0" style={{ maxWidth: '1600px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <Navbar />

        {/* BOOTSTRAP GRID */}
        <div className="container-fluid mt-4 flex-grow-1">
          <div className="row h-100">
            
            {/* SIDEBAR */}
            <div className="col-12 col-md-2 d-none d-md-block border-end border-secondary">
              <Sidebar 
                roles={ROLE_DATA} 
                activeRole={activeRoleKey} 
                setActiveRole={setActiveRoleKey} 
              />
            </div>

            {/* MAIN CONTENT */}
            <div className="col-12 col-md-10 d-flex flex-column gap-5">
              
              {/* 1. HERO */}
              <div>
                 <Hero data={activeSetup} />
              </div>

              {/* 2. CAROUSEL */}
              <div>
                <SetupCarousel 
                  roleData={ROLE_DATA[activeRoleKey]}
                  activeSetup={activeSetup}
                  setActiveSetup={setActiveSetup}
                />
              </div>

              {/* 3. FOOTER (Added Here) */}
              <Footer />

            </div>

          </div>
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;