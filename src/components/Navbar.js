// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';



const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#008080', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' , justifyContent: 'space-between' , height: '50px' }}>
      <Toolbar sx={{ padding: '0 1rem', display: 'flex', alignItems: 'right', justifyContent: 'flex-end' }}>
      <Typography variant="h6" component="div" sx={{ display: 'flex', top: '-100px' }} style={{ fontFamily: 'Montserrat, sans-serif' }}>
        </Typography>
        <Button color="inherit" sx={{ marginRight: '1rem', '&:hover': { backgroundColor: '#20b2aa' } }} >Home</Button>
        <Button color="inherit" sx={{ marginRight: '1rem', '&:hover': { backgroundColor: '#20b2aa' } }}>Dr. Somnath Ghosal</Button>
        <Button color="inherit" sx={{ marginRight: '1rem', '&:hover': { backgroundColor: '#20b2aa' } }}>Projects</Button>
        <Button color="inherit" sx={{ marginRight: '1rem', '&:hover': { backgroundColor: '#20b2aa' } }}>Publications</Button>
        <Button color="inherit" sx={{ marginRight: '1rem', '&:hover': { backgroundColor: '#20b2aa' } }}>News</Button>            
      </Toolbar>
    </AppBar>
  );
};

document.getElementById("newsButton").addEventListener("click", function(event) {
  // Prevent the default behavior of the anchor tag (i.e., following the href)
  event.preventDefault();

  // Redirect to the news.js file
  window.location.href = "src\components\news";
});



export default Navbar;
