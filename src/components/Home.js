// Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom  style={{ marginTop: '10px' ,  fontFamily: 'Montserrat, sans-serif' , textDecoration: 'underline' , fontWeight: 'bold'}} >
        The Ghosal Laboratory
      </Typography>
      <Typography variant="h5" gutterBottom  style={{ marginTop: '10px' ,  fontFamily: 'Montserrat, sans-serif', textDecoration: 'underline' , fontWeight: 'semibold'}}>
       Rural geography research group
      </Typography>
      <Typography variant="h5" gutterBottom  style={{ marginTop: '10px' ,  fontFamily: 'Montserrat, sans-serif' , textDecoration: 'underline' , fontWeight: 'semibold'}}>
       policy, planning and development
      </Typography>
      <Typography variant="h7" gutterBottom  style={{ marginTop: '10px' ,  fontFamily: 'Montserrat, sans-serif' , fontSize: '15px' , fontWeight: 'bold'}}>
       Research Areas:<br />
      </Typography>
      <Typography variant="body" gutterBottom style={{ marginTop: '10px' ,  fontFamily: 'Montserrat, sans-serif' , fontSize: '13px' , }}>
      •Rural Development and Regional Planning <br />
      •Ethnographic and Qualitative Research <br />
      •Social Forestry for Entrepreneurship <br />
      •Rural Water, Health, & Education <br />
      •Public Policy for Science & Society
      </Typography>


    </Container>
  );
};

export default Home;
