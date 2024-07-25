import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#007bff', color: 'white', padding: '20px 0' }}>
      <Container>
        <Typography variant="body1">
          Адрес: г. Москва, ул. Красная, д. 5
        </Typography>
        <Typography variant="body1">
          Телефон: +7 (912) 999-99-99
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
