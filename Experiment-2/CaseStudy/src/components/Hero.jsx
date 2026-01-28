// src/components/Hero.jsx
import React from 'react';
import { Box, Typography, Button, Chip, Fade } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; // New Icon for Buy

const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <Fade in={true} timeout={500} key={data.id}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' }, 
        alignItems: 'center', 
        justifyContent: 'space-between',
        minHeight: '400px',
        position: 'relative',
        overflow: 'hidden',
        gap: 4,
        py: 4
      }}>

        {/* --- LEFT: TEXT CONTENT --- */}
        <Box sx={{ flex: 1, zIndex: 2, maxWidth: '650px' }}>
          
          <Chip 
            icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important' }} />} 
            label="In Stock & Ready" 
            size="small"
            sx={{ 
              mb: 3, 
              bgcolor: 'rgba(59, 130, 246, 0.1)', 
              color: '#60a5fa', 
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontWeight: 600,
              fontSize: '0.75rem'
            }} 
          />

          <Typography variant="h2" sx={{ 
            fontWeight: 800, 
            color: 'white', 
            lineHeight: 1.1, 
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            letterSpacing: '-0.02em'
          }}>
            {data.title}
          </Typography>

          <Typography variant="h5" sx={{ 
            color: data.color || '#a3a3a3', 
            mb: 3, 
            fontWeight: 500 
          }}>
            {data.subtitle}
          </Typography>

          {/* DYNAMIC DESCRIPTION (Replaces the SOC2 text) */}
          <Typography variant="body1" sx={{ color: '#aaa', mb: 4, lineHeight: 1.6, maxWidth: '90%', fontSize: '1.1rem' }}>
            {data.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {/* BUY BUTTON */}
            <Button 
              variant="contained" 
              size="large"
              endIcon={<ShoppingBagIcon />}
              sx={{ 
                bgcolor: 'white', 
                color: 'black', 
                fontWeight: 800, 
                px: 5, 
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { bgcolor: '#e5e5e5' }
              }}
            >
              Buy
            </Button>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, ml: 2 }}>
              {data.price}
            </Typography>
          </Box>
        </Box>

        {/* --- RIGHT: GIANT IMAGE --- */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          position: 'relative',
          width: '100%'
        }}>
          {/* Background Glow */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: `radial-gradient(circle, ${data.color}33 0%, transparent 70%)`,
            filter: 'blur(50px)',
            zIndex: 0
          }} />

          {/* Hero Image */}
          <Box 
            component="img"
            src={data.image}
            alt={data.title}
            sx={{
              width: '100%',
              maxWidth: '650px',
              height: 'auto',
              objectFit: 'contain',
              zIndex: 1,
              transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
              transition: 'transform 0.5s ease-out',
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
              '&:hover': {
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg) scale(1.02)'
              }
            }}
          />
        </Box>

      </Box>
    </Fade>
  );
};

export default Hero;