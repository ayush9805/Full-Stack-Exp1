// src/components/Dashboard.jsx
import React from 'react';
import { Typography, Paper, Box, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Make sure these icons are installed: npm install @mui/icons-material
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Dashboard = ({ packages, activePkg, setActivePkg }) => {
  
  const getIcon = (id) => {
    switch(id) {
      case 'dev': return <CodeIcon />;
      case 'design': return <BrushIcon />;
      case 'exec': return <BusinessCenterIcon />;
      case 'game': return <SportsEsportsIcon />;
      default: return <CodeIcon />;
    }
  };

  return (
    <div className="pb-5">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
           <Typography variant="overline" sx={{ color: '#666', fontWeight: 700, letterSpacing: 1 }}>
             CATALOG
           </Typography>
           <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
             Available Configurations
           </Typography>
        </div>
        <Typography variant="body2" className="text-secondary d-none d-md-block">
          Select a card to view full details above.
        </Typography>
      </div>

      {/* Grid */}
      <div className="row g-4"> 
        {packages.map((pkg, index) => {
          const isActive = activePkg === index;
          
          return (
            <div className="col-12 col-md-6 col-xl-3" key={pkg.id}>
              <Paper 
                onClick={() => setActivePkg(index)}
                elevation={0}
                sx={{
                  height: '100%',
                  bgcolor: '#0a0a0a',
                  border: isActive ? `1px solid ${pkg.color}` : '1px solid #262626',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    borderColor: isActive ? pkg.color : '#555',
                    boxShadow: `0 10px 40px -10px ${pkg.color}33`
                  }
                }}
              >
                
                {/* Header */}
                <div className="p-4 d-flex justify-content-between align-items-start">
                  <div className="d-flex gap-3 align-items-center">
                    <Box sx={{ 
                      p: 1, 
                      borderRadius: '10px', 
                      bgcolor: isActive ? pkg.color : 'rgba(255,255,255,0.05)',
                      color: isActive ? 'white' : '#888',
                      display: 'flex'
                    }}>
                      {getIcon(pkg.id)}
                    </Box>
                    <div>
                      <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, color: 'white' }}>
                        {pkg.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666' }}>
                        {pkg.price}
                      </Typography>
                    </div>
                  </div>
                  
                  {isActive && <CheckCircleIcon sx={{ color: pkg.color, fontSize: 20 }} />}
                </div>

                {/* Visual */}
                <Box sx={{ height: '180px', width: '100%', position: 'relative', my: 1 }}>
                   <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    style={{ 
                      width: '60%', height: '100%', objectFit: 'cover', 
                      position: 'absolute', right: '-10%', top: 0,
                      transform: 'skewX(-10deg)', borderRadius: '12px',
                      opacity: 0.8, filter: isActive ? 'none' : 'grayscale(100%)'
                    }} 
                   />
                   <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, #0a0a0a 40%, transparent 100%)` }} />
                </Box>

                {/* Specs - THIS IS WHERE IT WAS CRASHING BEFORE */}
                <div className="p-4 pt-0">
                  <Typography variant="body2" sx={{ color: '#888', mb: 2, height: '40px', overflow: 'hidden' }}>
                    {pkg.description ? pkg.description.substring(0, 60) + "..." : "Details available"}
                  </Typography>

                  <div className="d-flex flex-wrap gap-2">
                    {/* Safe check: ensure specs exists before mapping */}
                    {pkg.specs && pkg.specs.map((spec, i) => (
                      <Chip 
                        key={i} 
                        label={spec} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.05)', 
                          color: '#a3a3a3', 
                          border: '1px solid #333',
                          fontSize: '0.7rem',
                          height: '24px'
                        }} 
                      />
                    ))}
                  </div>
                </div>

              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;