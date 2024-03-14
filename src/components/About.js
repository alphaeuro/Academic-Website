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
        <h1>Education</h1>
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
      {/* Experience section below */}
      <div className="experience-section">
        <h1>Experience</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2008 - 2010</div>
            <div className="timeline-content">
              <p>Graduate level teaching assistant and demonstrator, School of Geography, University of Nottingham, UK</p>
            </div>
          </div>
          <div className="timeline-item">
          <div className="timeline-date">2010 - 2013</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Assistant Professor in Geography, University of Nottingham, UK</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2013 - 2014</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Fellow, Interdisciplinary Doctoral Fellowship, The Graduate School, University of Minnesota</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2015 - 2016</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Research Fellow, Renmin University of China, Beijing</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2016 - Present</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Assistant Professor, Indian Institute of Technology Kharagpur</p>
            </div>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>
      {/* Responsibilities section below */}
      <div className="responsibilities-section">
        <h3>During his ventures, Dr. Somnath Ghosal also received various positions of responsibility . . .</h3>
        <div className="responsibilities-container">
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src="https://via.placeholder.com/150" alt="Responsibility 1" />
              {/* <div className="responsibility-date">September 2023 - December 2023</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 1</h3> */}
              <h4>September 2023 - December 2023</h4>
              <p>Resource Person, upskilling Leadership Qualities of Sabhapaties for Rural Transformation and Modern Agricultural Practices, Department of Panchayats and Rural Development, Govt. of West Bengal.</p>
            </div>
          </div>
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src="https://via.placeholder.com/150" alt="Responsibility 2" />
              {/* <div className="responsibility-date">2017-2019</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 2</h3> */}
              <h4>2017-2019</h4>
              <p>Member, National Level Monitoring Programme, Ministry of Rural Development, Government of India.</p>
            </div>
          </div>
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src="https://via.placeholder.com/150" alt="Responsibility 3" />
              {/* <div className="responsibility-date">April 2010 - June 2010</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 3</h3> */}
              <h4>April 2010 - June 2010</h4>
              <p>Research Assistant for GIS4EU project, Centre for Geospatial Science (CGS), University of Nottingham, UK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

