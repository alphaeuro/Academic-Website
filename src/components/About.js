import React from 'react';
import './About.css';
import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons from Font Awesome library

const About = () => {
  return (
    <div className="about-container">
      {/* Container for the image and text side by side */}
      <div className="image-and-text-container">
        <div className="image-container">
          <img src="https://source.unsplash.com/NXiIVnzBwZ8" alt="Jane Writer" className="about-image" />
        </div>
        <div className="text-container">
          <h1>Dr Somnath Ghoshal</h1>
          <h4>Assistant Professor
            <br />
            Centre for Rural Development in Innovative & Sustainable Technology, IIT Kharagpur</h4>
          <div className="contact-icons">
            <a href="tel:+91(0)3222283894" className="icon-link"><FaPhone /> </a>
            <a href="mailto:drsomnathghosal@gmail.com" className="icon-link"><FaEnvelope /></a>
            <a href="https://www.youtube.com/@somnathghosal8947" className="icon-link"><FaYoutube /></a>
            <a href="https://twitter.com/SomnathGhosal13" className="icon-link"><FaTwitter /></a>
            <a href="https://www.facebook.com/drsomnathghosal" className="icon-link"><FaFacebook /></a>
          </div>
        </div>
      </div>
      {/* Education section below */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-item">
            <img src="https://via.placeholder.com/150" alt="Education 1" />
            <p>MA in Geography,<br></br> Visva-Bharati University, India</p>
            <p>2005</p>
          </div>
          <div className="education-item">
            <img src="https://via.placeholder.com/150" alt="Education 2" />
            <p>MSc in Human Geography, School of Geography, University of Nottingham, UK</p>
            <p>2006</p>
          </div>
          <div className="education-item">
            <img src="https://via.placeholder.com/150" alt="Education 3" />
            <p>PhD in Environment & Society, School of Geography, University of Nottingham, UK</p>
            <p>2010</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;