import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';

const reviews = [
  { name: 'Анна Иванова', text: 'Отзыв от Анны Ивановой.', image: '/path/to/image1.jpg' },
  { name: 'Сергей Петров', text: 'Отзыв от Сергея Петрова.', image: '/path/to/image2.jpg' },
];

const CustomerReviews: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#007bff', color: 'white', padding: '50px 0' }}>
      <Container>
        <Typography variant="h4">Отзывы заказчиков</Typography>
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ padding: '20px' }}>
                <img src={review.image} alt={review.name} width="100" height="100" />
                <Typography variant="h6">{review.name}</Typography>
                <Typography>{review.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerReviews;
