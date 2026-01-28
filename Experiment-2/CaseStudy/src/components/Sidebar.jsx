import React from 'react';
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
// Icons for Categories
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
// Icons for Extra Sections
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AppleIcon from '@mui/icons-material/Apple'; 
import LaptopMacIcon from '@mui/icons-material/LaptopMac'; // Generic for Dell/others

const Sidebar = ({ roles, activeRole, setActiveRole }) => {
  
  const getIcon = (iconName) => {
    const iconStyle = { fontSize: '1.2rem' };
    switch(iconName) {
      case 'Code': return <CodeRoundedIcon sx={iconStyle} />;
      case 'Brush': return <BrushRoundedIcon sx={iconStyle} />;
      case 'SportsEsports': return <SportsEsportsRoundedIcon sx={iconStyle} />;
      default: return <CodeRoundedIcon sx={iconStyle} />;
    }
  };

  // Reusable Header Style
  const SectionHeader = ({ text }) => (
    <Typography variant="caption" sx={{ 
      color: '#555', 
      fontWeight: 800, 
      letterSpacing: '0.08em', 
      px: 2,
      mb: 1.5, 
      mt: 3,
      display: 'block',
      fontSize: '0.65rem',
      textTransform: 'uppercase'
    }}>
      {text}
    </Typography>
  );

  // Reusable List Item Style for static items
  const StaticItem = ({ icon, text, count }) => (
    <ListItemButton
      disableRipple
      sx={{
        borderRadius: '8px',
        mb: 0.5,
        px: 2,
        py: 0.8,
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.04)' },
      }}
    >
      <ListItemIcon sx={{ color: '#666', minWidth: '32px' }}>
        {icon}
      </ListItemIcon>
      <ListItemText 
        primary={text} 
        primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 500, color: '#999' }}
      />
      {count && <Typography sx={{ color: '#444', fontSize: '0.75rem', fontWeight: 600 }}>{count}</Typography>}
    </ListItemButton>
  );

  return (
    <Box sx={{ 
      pr: 2, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'transparent'
    }}>
      
      {/* --- SECTION 1: CATALOG (Dynamic Roles) --- */}
      <SectionHeader text="Browse Catalog" />

      <List component="nav" sx={{ p: 0 }}>
        {roles && Object.keys(roles).map((key) => {
          const role = roles[key];
          const isActive = activeRole === key;

          return (
            <ListItemButton
              key={key}
              onClick={() => setActiveRole(key)}
              disableRipple
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                px: 2,
                py: 1,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent', // Blue tint when active
                border: isActive ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
                '&:hover': { 
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? '#60a5fa' : '#888', // Blue icon when active
                minWidth: '32px',
                transition: 'color 0.2s'
              }}>
                {getIcon(role.icon)}
              </ListItemIcon>
              
              <ListItemText 
                primary={role.label} 
                primaryTypographyProps={{ 
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? 'white' : '#aaa',
                }}
              />

              {/* Active State Detail: Arrow or Count */}
              {isActive ? (
                 <Chip 
                 label={role.items.length} 
                 size="small" 
                 sx={{ 
                   height: 18, 
                   fontSize: 10, 
                   bgcolor: '#3b82f6', 
                   color: '#fff',
                   fontWeight: 700,
                   borderRadius: '4px'
                 }} 
               />
              ) : (
                <Typography sx={{ color: '#444', fontSize: '0.75rem', fontWeight: 600 }}>
                  {role.items.length}
                </Typography>
              )}
            </ListItemButton>
          );
        })}
      </List>

      {/* --- SECTION 2: STATUS (Visual Detail) --- */}
      <SectionHeader text="Availability" />
      <List sx={{ p: 0 }}>
        <StaticItem 
          icon={<NewReleasesRoundedIcon sx={{ fontSize: '1.1rem' }} />} 
          text="New Arrivals" 
          count="4" 
        />
        <StaticItem 
          icon={<WhatshotRoundedIcon sx={{ fontSize: '1.1rem' }} />} 
          text="Top Deals" 
          count="2" 
        />
        <StaticItem 
          icon={<CheckCircleOutlineRoundedIcon sx={{ fontSize: '1.1rem' }} />} 
          text="Ready to Ship" 
          count="12" 
        />
      </List>

      <Divider sx={{ my: 3, borderColor: '#1f1f1f' }} />

      {/* --- SECTION 3: BRANDS (Visual Detail) --- */}
      <SectionHeader text="Filter by Brand" />
      <List sx={{ p: 0 }}>
        <StaticItem icon={<AppleIcon sx={{ fontSize: '1.1rem' }} />} text="Apple" />
        <StaticItem icon={<LaptopMacIcon sx={{ fontSize: '1.1rem' }} />} text="Dell" />
        <StaticItem icon={<SportsEsportsRoundedIcon sx={{ fontSize: '1.1rem' }} />} text="Razer" />
        <StaticItem icon={<CodeRoundedIcon sx={{ fontSize: '1.1rem' }} />} text="Lenovo" />
      </List>

      {/* --- FOOTER: Support Card --- */}
      <Box sx={{ 
        mt: 'auto', 
        mb: 2,
        p: 2, 
        borderRadius: '12px', 
        border: '1px solid #262626',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        mx: 0
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
          <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, fontSize: '0.8rem' }}>
            IT Concierge
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: '#888', lineHeight: 1.4, display: 'block' }}>
          Need a custom config? We are online.
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: '#3b82f6', 
            fontWeight: 600, 
            mt: 1, 
            display: 'block', 
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Start Chat →
        </Typography>
      </Box>

    </Box>
  );
};

export default Sidebar;