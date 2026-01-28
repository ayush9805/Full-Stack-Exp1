import React from 'react';
import { Typography, Paper, Box, Chip, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SetupCarousel = ({ roleData, activeSetup, setActiveSetup }) => {
  
  // 1. DEFINE YOUR BLUE COLOR HERE
  const ACTIVE_COLOR = '#3b82f6'; // TechFleet Blue

  return (
    <div className="pb-4">
      
      {/* Header Info */}
      <div className="mb-4">
        <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 1 }}>
          {roleData.label}
        </Typography>
        <Typography variant="body1" sx={{ color: '#a3a3a3', maxWidth: '600px' }}>
          {roleData.description}
        </Typography>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div 
        className="d-flex gap-4 pb-4"
        style={{ 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        <style>{`
          .d-flex::-webkit-scrollbar { display: none; }
        `}</style>

        {roleData.items.map((item) => {
          const isActive = activeSetup.id === item.id;

          return (
            <div key={item.id} style={{ minWidth: '320px', maxWidth: '340px', scrollSnapAlign: 'start' }}>
              <Paper 
                onClick={() => setActiveSetup(item)}
                elevation={0}
                sx={{
                  bgcolor: '#0a0a0a',
                  // 2. FORCE BLUE BORDER ON ACTIVE
                  border: isActive ? `1px solid ${ACTIVE_COLOR}` : '1px solid #262626',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                  // 3. FORCE BLUE SHADOW ON ACTIVE
                  boxShadow: isActive ? `0 0 20px ${ACTIVE_COLOR}40` : 'none',
                  '&:hover': { 
                    transform: 'translateY(-5px)', 
                    borderColor: isActive ? ACTIVE_COLOR : '#555' 
                  }
                }}
              >
                
                {/* Card Image Area */}
                <Box sx={{ height: '200px', width: '100%', position: 'relative' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Gradient Overlay */}
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 80%)' }} />
                  
                  {/* Price Tag */}
                  <Chip 
                    label={item.price} 
                    size="small"
                    sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'rgba(0,0,0,0.6)', color: 'white', backdropFilter: 'blur(4px)', fontWeight: 700 }} 
                  />
                </Box>

                {/* Card Content */}
                <Box sx={{ p: 3 }}>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                        {item.title}
                      </Typography>
                      {/* Subtitle keeps the category color for variety, or change item.color to ACTIVE_COLOR if you want that blue too */}
                      <Typography variant="caption" sx={{ color: item.color, fontWeight: 600 }}>
                        {item.subtitle}
                      </Typography>
                    </div>
                    {/* 4. FORCE BLUE CHECK ICON */}
                    {isActive ? <CheckCircleIcon sx={{ color: ACTIVE_COLOR }} /> : null}
                  </div>

                  {/* SPECS LIST */}
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {item.specs.slice(0, 5).map((spec, i) => (
                      <Chip 
                        key={i} label={spec} size="small" 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.05)', 
                          color: '#aaa', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          fontSize: '0.65rem',
                          height: '22px'
                        }} 
                      />
                    ))}
                  </div>
                </Box>
              </Paper>
            </div>
          );
        })}
        
        {/* View More Placeholder */}
        <div style={{ minWidth: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <IconButton sx={{ border: '1px solid #333', color: '#666', width: 60, height: 60 }}>
              <ArrowForwardIcon />
           </IconButton>
        </div>

      </div>
    </div>
  );
};

export default SetupCarousel;