import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';

const teamMembers = [
  { name: 'Сергей Калабин', role: 'Финансист', image: '/path/to/image.jpg', description: 'Описание Сергея Калабина.' },
];

const Team: React.FC = () => {
  return (
    <Container>
      <Box sx={{ margin: '50px 0' }}>
        <Typography variant="h4">Команда</Typography>
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ padding: '20px' }}>
                <img src={member.image} alt={member.name} width="100" height="100" />
                <Typography variant="h6">{member.name}</Typography>
                <Typography>{member.role}</Typography>
                <Typography>{member.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Team;
