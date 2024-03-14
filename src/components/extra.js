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
        <div className="education-container"><div className="education-item">
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
      {/* Experience section below */}
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Position 1</h3>
              <p>Description of position 1</p>
            </div>
            <div className="timeline-date">2008 - 2012</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Position 2</h3>
              <p>Description of position 2</p>
            </div>
            <div className="timeline-date">2013 - 2016</div>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>
      {/* Responsibilities section below */}
      <div className="responsibilities-section">
        <h2>Responsibilities</h2>
        <div className="responsibilities-container">
          <div className="responsibility-item">
            <img src="https://via.placeholder.com/150" alt="Responsibility 1" />
            <div className="responsibility-details">
              <h3>Responsibility 1</h3>
              <p>Description of responsibility 1</p>
            </div>
            <div className="responsibility-date">Date 1</div>
          </div>
          <div className="responsibility-item">
            <img src="https://via.placeholder.com/150" alt="Responsibility 2" />
            <div className="responsibility-details">
              <h3>Responsibility 2</h3>
              <p>Description of responsibility 2</p>
            </div>
            <div className="responsibility-date">Date 2</div>
          </div>
          <div className="responsibility-item">
            <img src="https://via.placeholder.com/150" alt="Responsibility 3" />
            <div className="responsibility-details">
              <h3>Responsibility 3</h3>
              <p>Description of responsibility 3</p>
            </div>
            <div className="responsibility-date">Date 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;