// Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to My Academic Website
      </Typography>
      <Typography variant="body1">
        I am Professor [Your Name], and this is my personal academic website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      </Typography>
    </Container>
  );
};

export default Home;
