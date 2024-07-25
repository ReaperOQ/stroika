import React from 'react';
import { Typography, Box, Container, Button } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#007bff', color: 'white', padding: '50px 0' }}>
      <Container>
        <Typography variant="h2" component="h1">
          Готовые проекты зданий для вашего бизнеса
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <Box>
            <Button variant="contained" color="primary">Построить проект</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
