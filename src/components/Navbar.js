// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => { 

  function handleClick() {
    console.log('You clicked me!');
  }
  return (
    <div className="header">
    <div className="container">
      <div className="logo"><a href="#"></a></div>
        <div className='nav'>
          <Button component={Link} to="/home"  >
            Home
          </Button>
          <Button component={Link} to="/about"  >
            About
          </Button>
          <Button component={Link} to="/news"  >
            News
          </Button>
          <Button component={Link} to="/projects" >
            Research
          </Button>
          <Button component={Link} to="/publications" >
            Publications
          </Button>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
//

