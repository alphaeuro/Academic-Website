import React, { useState } from 'react';

import './Home.css'; // Make sure the CSS file is correctly linked
import logoImage from '../images/image.png';
import profileImage from '../images/profilepic.jpeg'
// adding carousel:
// URLs or import statements for your images
const carouselImages = [
  '../images/c1.jpg',
  '../images/c2.jpg',
  '../images/c3.jpg',
  '../images/c4.jpg',
  '../images/c5.jpg',
];


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
          <h1>Rural Geography Research Group public Policy, Planning, and Development</h1>
          <p>The research group primarily focuses on Community participation in research, Science and public policy integration, Sustainable regional planning, Skill development for livelihoods, Rural infrastructure improvement, Social forestry and entrepreneurship</p>
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
        <p>Dr. Somnath Ghosal is an Assistant Professor at the Centre for Rural  Development and Innovative Sustainable Technology (CRDIST) at the Indian  Institute of Technology Kharagpur. With a robust background in  Environment and Society (Human Geography), Dr. Ghosal's research  primarily focuses on bridging the gap between science and societal needs  through innovative, sustainable development strategies. His work  encompasses a wide range of areas, including community participation in  research, integrating science with public policy, and spearheading  initiatives in sustainable regional planning. Dr. Ghosal is deeply  committed to improving rural infrastructure, promoting skill development  for livelihood generation, and advocating for social forestry and green  urban planning. His dedication to environmental conservation and  development project design highlights his commitment to using academic  research for societal benefit. Learn More...</p>
        </div>
        <div className="image-container2">
          <img src={profileImage} alt="Logo" className="home-image" />
        </div>
        
      </div>
      
      {/* More sections can be added here following the same pattern */}
    </div>
  );
};

export default Home;
