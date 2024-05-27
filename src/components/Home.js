import React, { useState } from 'react';

import './Home.css'; // Make sure the CSS file is correctly linked
import logoImage from '../images/image.png';
import profileImage from '../images/profilepic.jpeg'
import YouTubeSection from './youtubesection';
import ContactSection from './contact';
// Importing carousel images
import c2 from '../images/c2.JPG';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';


const carouselImages = [c2, c3, c4];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="home-container">
      <div className="image-and-text-container1">
        {/* Assuming you have an appropriate image, replace 'hero_image_url' */}
        <div className="image-container1">
          <img src={logoImage} alt="Logo" className="home-image" />
        </div>
        <div className="text-container1" >
          <h1>Rural Geography Research Group - Public Policy, Planning, and Development</h1>
          <br></br>
          <h3>The research group primarily focuses on - </h3>
          <ul>
          <li>Community Participation Action Research</li>
          <li>Science and Public Policy Integration</li>
          <li>Skill Development for Livelihood Generation</li>
          <li>Rural Infrastructure Planning and Development</li>
          <li>Social Forestry and Natural Resource Based Entrepreneurship</li>
          </ul>
        </div>
      </div>

      {/* Placeholder for additional sections */}
      {/* Example: An overview of Dr. Ghosal's work */}
      {/* adding the carousel below */}
      <div className="carousel-container">
        <div className="carousel">
          <img src={carouselImages[currentImage]} alt="Images" className="carousel-image" />
        </div>
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>

      <div className="image-and-text-container2">
        {/* Assuming you have an appropriate image, replace 'hero_image_url' */}
        <div className="text-container2">
          <h1>Meet Dr. Somnath Ghosal</h1>
        <p>With a robust background in Environment and Society (Human Geography), Dr. Somnath Ghosal's research primarily focuses on bridging the gap between applied science, technology, and societal needs through innovative, sustainable development strategies. His work encompasses a wide range of areas, including community overt participation in action research, integrating science with public policy, and spearheading initiatives in sustainable regional planning. Dr. Ghosal is deeply committed to improving rural infrastructures, promoting skill development for livelihood generation, and advocating for social forestry and green urban planning. His dedication to environmental conservation and regional planning development projects design highlights his commitment to using academic research for societal benefit.<br></br><br></br><a href="/About" >Learn More...</a></p>
        </div>
        <div className="image-container2">
          <img src={profileImage} alt="Logo" className="home-image" />
        </div>
        
      </div>
      <h2 style={{ textDecoration: 'underline' }}>More About Our Participatory Action Research Projects</h2>
      <YouTubeSection />
      <ContactSection />
      
      {/* More sections can be added here following the same pattern */}
    </div>
  );
};

export default Home;


