import React from 'react';
import { Typography, Box, Container, Grid, Button } from '@mui/material';

const works = [
  { title: 'Ферма в селе Бурьяново', image: '/path/to/image1.jpg' },
  { title: 'Ферма в селе Бурьяново', image: '/path/to/image2.jpg' },
];

const OurWorks: React.FC = () => {
  return (
    <Container>
      <Box sx={{ margin: '50px 0' }}>
        <Typography variant="h4">Наши работы</Typography>
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          {works.map((work, index) => (
            <Grid item xs={12} md={6} key={index}>
              <img src={work.image} alt={work.title} width="100%" />
              <Typography variant="h6">{work.title}</Typography>
              <Button variant="contained" color="primary">Подробнее</Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurWorks;
