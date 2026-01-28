// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X'; // Note: Ensure you have updated MUI or use TwitterIcon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  
  // Reusable Link Component for consistency
  const FooterLink = ({ text, href = "#" }) => (
    <Link 
      href={href} 
      underline="none"
      sx={{ 
        display: 'block', 
        color: '#888', 
        fontSize: '0.9rem', 
        mb: 1.5,
        transition: 'color 0.2s',
        '&:hover': { color: 'white' }
      }}
    >
      {text}
    </Link>
  );

  // Reusable Column Header
  const FooterHeader = ({ text }) => (
    <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
      {text}
    </Typography>
  );

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#0a0a0a', 
        pt: 8, 
        pb: 4, 
        mt: 8,
        borderTop: '1px solid #262626'
      }}
    >
      <div className="container-fluid px-4"> {/* Matches your main layout padding */}
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* COLUMN 1: BRANDING */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.5px', mb: 2 }}>
              TechFleet<span style={{ color: '#3b82f6' }}>.ID</span>
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', maxWidth: '300px', lineHeight: 1.6, mb: 3 }}>
              The premium procurement platform for high-performance engineering teams. 
              Equipping the world's best developers with the world's best hardware.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#666', '&:hover': { color: 'white' } }}><XIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: '#666', '&:hover': { color: 'white' } }}><GitHubIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: '#666', '&:hover': { color: 'white' } }}><LinkedInIcon fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: '#666', '&:hover': { color: 'white' } }}><InstagramIcon fontSize="small" /></IconButton>
            </Box>
          </Grid>

          {/* COLUMN 2: SHOP */}
          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader text="Shop" />
            <FooterLink text="Engineering Laptops" />
            <FooterLink text="Creative Workstations" />
            <FooterLink text="Gaming Rigs" />
            <FooterLink text="Monitors & Accessories" />
            <FooterLink text="Custom Builds" />
          </Grid>

          {/* COLUMN 3: SUPPORT */}
          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader text="Support" />
            <FooterLink text="IT Concierge" />
            <FooterLink text="Warranty Policy" />
            <FooterLink text="Returns & Repairs" />
            <FooterLink text="Enterprise Accounts" />
            <FooterLink text="Track Order" />
          </Grid>

          {/* COLUMN 4: COMPANY */}
          <Grid item xs={6} sm={3} md={2}>
            <FooterHeader text="Company" />
            <FooterLink text="About TechFleet" />
            <FooterLink text="Careers" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
            <FooterLink text="Contact Us" />
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: '#262626' }} />

        {/* BOTTOM BAR */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#444' }}>
            © 2024 TechFleet ID. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
             <Typography variant="caption" sx={{ color: '#444' }}>Jakarta, ID</Typography>
             <Typography variant="caption" sx={{ color: '#444' }}>Singapore, SG</Typography>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;