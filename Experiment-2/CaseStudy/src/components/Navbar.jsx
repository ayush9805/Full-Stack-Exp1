// src/components/Navbar.jsx
import React from 'react';
import { Typography, Button, Chip, Avatar, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Icon for dropdowns

const Navbar = () => {
  return (
    // OUTER CONTAINER: This creates the "Floating" effect (mt-3)
    <div className="container mt-4 mb-4">
      
      {/* INNER BAR: The actual visual navbar (Black, Rounded, Bordered) */}
      <div 
        className="d-flex justify-content-between align-items-center px-4 py-2"
        style={{
          backgroundColor: '#0a0a0a', // Deep black like Raycast
          border: '1px solid #262626',
          borderRadius: '16px', // Rounded corners
          backdropFilter: 'blur(10px)', // Subtle glass effect
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}
      >
        
        {/* LEFT: Brand Logo */}
        <div className="d-flex align-items-center">
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.5px', mr: 4 }}>
             TechFleet<span style={{ color: '#3b82f6' }}>.ID</span>
          </Typography>
        </div>

        {/* CENTER: Navigation Links (Updated for E-Commerce) */}
        <div className="d-none d-md-flex gap-1">
          {['Shop', 'Deals', 'Orders', 'Support'].map((item) => (
            <Button 
              key={item}
              variant="text" 
              size="small"
              sx={{ 
                color: '#a3a3a3', 
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '0.9rem',
                '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* RIGHT: Actions & User Profile */}
        <div className="d-flex align-items-center gap-3">
          
          {/* "Budget" Pill -> Could be "Balance" or "Cart" */}
          <Chip 
            label="Balance: $5,000" 
            variant="outlined"
            size="small"
            className="d-none d-sm-flex"
            sx={{ 
              color: '#fff', 
              borderColor: '#333', 
              backgroundColor: 'rgba(255,255,255,0.05)',
              fontWeight: 600
            }} 
          />

          {/* User Menu Button */}
          <Button
            variant="contained"
            size="small"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: '20px', // Pill shape button
              padding: '6px 16px',
              '&:hover': { backgroundColor: '#e5e5e5' }
            }}
          >
            Ayush
          </Button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;