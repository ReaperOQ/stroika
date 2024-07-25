import React from 'react';
import { Typography, Box, Container, Grid, Button } from '@mui/material';

const ProjectComposition: React.FC = () => {
  return (
    <Container>
      <Box sx={{ margin: '50px 0' }}>
        <Typography variant="h4">Состав проекта</Typography>
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Комплект чертежей КМ</Typography>
            <Typography>Детальное описание комплекта чертежей.</Typography>
            <Button variant="contained" color="primary">Посмотреть пример</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/path/to/image.jpg" alt="Проект" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectComposition;
