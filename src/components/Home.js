// // Home.js
// import React from 'react';
// import { Container, Typography } from '@mui/material';

// const Home = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Welcome to My Academic Website
//       </Typography>
//       <Typography variant="body1">
//         I am Professor [Your Name], and this is my personal academic website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
//       </Typography>
//     </Container>
//   );
// };

// export default Home;





// import React from 'react';
// // import './App.css'; // Assuming you have an App.css file for styling
// import '../components/Home.css'
// import DP from '../images/20221208_210902-01-01.jpeg'

// const NavigationBar = () => (
//   <nav>
//     <div className="logo">LOGO</div>
//     <ul className="nav-links">
//       <li><a href="#home">HOME</a></li>
//       <li><a href="#dr-ghosal">Dr. Somnath Ghosal</a></li>
//       <li><a href="#projects">PROJECTS</a></li>
//       <li><a href="#publications">PUBLICATIONS</a></li>
//       <li><a href="#news">NEWS</a></li>
//     </ul>
//   </nav>
// );

// const MainContent = () => (
//   <div className="main-content">
//     <h1>The Ghosal Laboratory</h1>
//     <h2>Rural Geography Research Group</h2>
//     <h3>Policy Planning and Development</h3>
//     <p>Brief details of research fields</p>
//     <div className="dr-ghosal-intro">
//       <img src={DP} alt="Dr. Somnath Ghosal" />
//       <div>
//         <h4>Meet Dr. Somnath Ghosal</h4>
//         <p>Brief Introduction</p>
//         <p>Apart from excellence in academics, Dr. Somnath Ghosal participated in numerous entrepreneurial ventures. <a href="#learn-more">Learn More</a></p>
//       </div>
//     </div>
//   </div>
// );

// const Footer = () => (
//   <footer>
//     <p>Footer Content Here</p>
//   </footer>
// );

// function App() {
//   return (
//     <div className="App">
//       <NavigationBar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="home-container">
      <div className="header-container">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <div className="intro-container">
          <h1>Dr. Somnath Ghosal</h1>
          <p>
            Brief introduction goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <Carousel />
      <div className="other-sections-container">
        <div className="section-container">
          <h2>Meet Dr. Somnath Ghosal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, libero vel ultricies elementum, magna tellus mattis nisl,
            in elementum augue quam eget nisi.
          </p>
          <button>Learn more about his achievements</button>
        </div>
        <div className="section-container">
          <h2>Water Purification</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, libero vel ultricies elementum, magna tellus mattis nisl,
            in elementum augue quam eget nisi.
          </p>
          <img src="water-purification.jpg" alt="Water Purification" />
          <p className="photo-caption">
            CRDIST along with Dr. Somnath Ghosal installed several water
            purifiers ● 00001/10
          </p>
        </div>
        <div className="section-container">
          <h2>Latest News</h2>
          <ul>
            <li>22/03/2022: News 1 goes here</li>
            <li>21/03/2022: News 2 goes here</li>
            <li>20/03/2022: News 3 goes here</li>
          </ul>
        </div>
        <div className="section-container">
          <h2>Research Fields</h2>
          <ul>
            <li>Action Research</li>
            <li>Entrepreneurship</li>
            <li>Rural Geography</li>
            <li>Policy and Planning</li>
            <li>Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;