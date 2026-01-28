import React from 'react';
import { Typography, Box, Container, Paper, Chip, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

// --- Import Swiper React components ---
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const Customizer = ({ 
  productData, 
  selectedStyleIndex, 
  setSelectedStyleIndex, 
  selectedColorIndex, 
  setSelectedColorIndex 
}) => {

  return (
    <Box component="section" sx={{ py: 15, bgcolor: '#020c1b' }}>
      <Container maxWidth="lg">
        
        {/* Section Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="end" sx={{ mb: 6 }}>
          <Box>
            <Typography variant="overline" color="primary" fontWeight={700}>
              Available Packages
            </Typography>
            <Typography variant="h3" fontWeight={800} color="white">
              Select your role.
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
            {/* FIX 1: Wrapped text in curly braces and quotes to handle < and > symbols */}
            {'< - Drag to explore - >'}
          </Typography>
        </Stack>


        {/* --- SWIPER CAROUSEL --- */}
        <Box sx={{ mb: 8 }}>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          breakpoints={{
            640: { slidesPerView: 2.2, centeredSlides: false },
            1024: { slidesPerView: 3.2, centeredSlides: false },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ paddingBottom: '50px' }}
        >
          {productData.map((prod, index) => {
            const isSelected = selectedStyleIndex === index;
            return (
            <SwiperSlide key={prod.id}>
              <Paper 
                elevation={isSelected ? 24 : 4}
                onClick={() => {
                    setSelectedStyleIndex(index);
                    setSelectedColorIndex(0);
                }}
                sx={{ 
                  borderRadius: 6,
                  overflow: 'hidden',
                  height: '450px',
                  position: 'relative',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #64ffda' : '2px solid transparent',
                  transition: 'all 0.3s ease',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {/* Background Image */}
                <img 
                  src={prod.baseImage} 
                  alt={prod.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isSelected ? 'none' : 'grayscale(40%) brightness(0.8)' }}
                />
                
                {/* Dark Overlay Gradient */}
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,25,47,0.9) 0%, rgba(0,0,0,0) 60%)' }} />
                
                {/* Top Right Pill Tag */}
                <Chip 
                  label={prod.id.toUpperCase() + " TIER"} 
                  sx={{ 
                    position: 'absolute', top: 20, right: 20, 
                    bgcolor: 'rgba(10, 25, 47, 0.8)', 
                    color: isSelected ? 'primary.main' : 'white',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }} 
                />

                {/* Bottom Text Content */}
                <Box sx={{ position: 'absolute', bottom: 30, left: 30, right: 30 }}>
                   <Typography variant="h5" color="white" fontWeight={800}>
                    {prod.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {prod.tagline}
                   </Typography>
                </Box>
              </Paper>
            </SwiperSlide>
          )})}
        </Swiper>
        </Box>


        {/* Step 2: Choose Color Theme */}
        <Paper sx={{ p: 5, bgcolor: 'background.paper', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
          <Typography variant="h5" fontWeight={800} color="white" gutterBottom>
            Customize Theme
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Select the aesthetic for the <strong>{productData[selectedStyleIndex].name}</strong>.
          </Typography>

          <Stack direction="row" spacing={4} flexWrap="wrap">
            {productData[selectedStyleIndex].colors.map((color, index) => {
              // FIX 2: Removed space in variable name (is SelectedColor -> isSelectedColor)
              const isSelectedColor = selectedColorIndex === index;
              
              return (
              <Stack 
                key={color.name} 
                alignItems="center"
                onClick={() => setSelectedColorIndex(index)}
                sx={{ 
                  cursor: 'pointer',
                  opacity: isSelectedColor ? 1 : 0.5,
                  transform: isSelectedColor ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Box 
                  sx={{ 
                    width: 70, height: 70, borderRadius: '50%', 
                    bgcolor: color.hex,
                    border: isSelectedColor ? '3px solid #64ffda' : '3px solid rgba(255,255,255,0.1)',
                    boxShadow: isSelectedColor ? '0 0 20px rgba(100, 255, 218, 0.4)' : 'none',
                    mb: 2,
                    display: 'grid', placeItems: 'center'
                  }}
                >
                  {isSelectedColor && (
                    <CircleIcon sx={{ color: '#64ffda', fontSize: 16, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }} />
                  )}
                </Box>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: 'white' }}>
                  {color.name}
                </Typography>
              </Stack>
            )})}
          </Stack>
        </Paper>

      </Container>
    </Box>
  );
};

export default Customizer;