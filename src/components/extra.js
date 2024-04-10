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
          <h1>Dr Somnath Ghosal</h1>
          <h4>Assistant Professor
            <br />
            Centre for Rural Development in Innovative & Sustainable Technology, IIT Kharagpur</h4>
          <div className="contact-icons">
            <a href="tel:+91(0)3222283894" className="icon-link"><FaPhone /> </a>
            <a href="mailto:drsomnathghosal@gmail.com" className="icon-link"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      {/* Education section below */}
      <div className="education-section">
        <h1>Education</h1>
        <div className="education-container">
          <div className="education-item">
            <img src="https://via.placeholder.com/150" alt="Education 1" />
            <p>MA in Geography,<br></br> Visva-Bharati University, India <br></br> 2005</p>
          </div>
          <div className="education-item">
            <img src="https://via.placeholder.com/150" alt="Education 2" />
            <p>MSc in Human Geography, School of Geography, University of Nottingham, UK <br></br> 2006</p>
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
              <p>Assistant Professor in Geography, University of Nottingham, UK</p>
            </div>
          </div>
        </div>
      </div>
      {/* Responsibilities section below */}
      <div className="responsibilities-section">
        <h3>During his ventures, Dr. Somnath Ghosal also received various positions of responsibility . . .</h3>
        <div className="responsibilities-container">
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src="https://via.placeholder.com/150" alt="Responsibility 1" />
            </div>
            <div className="responsibility-details">
              <h4>September 2023 - December 2023</h4>
              <p>Resource Person, upskilling Leadership Qualities of Sabhapaties for Rural Transformation and Modern Agricultural Practices, Department of Panchayats and Rural Development, Govt. of West Bengal.</p>
            </div>
          </div>
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src="https://via.placeholder.com/150" alt="Responsibility 2" />
            </div>
            <div className="responsibility-details">
              <h4>2017-2019</h4>
              <p>Member, National Level Monitoring Programme, Ministry of Rural Development, Government of India.</p>
            </div>
          </div>
        </div>
      </div>
      {/*Awards and Honours section below */}
      <div className='awards-section'>
        <h1>Awards and Honours</h1>
        <div className="awards-container">
          <div className="award-item">
            <img src="https://via.placeholder.com/150" alt="Award 1" />
            <p>Award 1 description goes here.</p>
          </div>
          <div className="award-item">
            <img src="https://via.placeholder.com/150" alt="Award 2" />
            <p>Award 2 description goes here.</p>
          </div>
          <div className="award-item">
            <img src="https://via.placeholder.com/150" alt="Award 3" />
            <p>Award 3 description goes here.</p>
          </div>
          <div className="award-item">
            <img src="https://via.placeholder.com/150" alt="Award 4" />
            <p>Award 4 description goes here.</p>
          </div>
          <div className="award-item">
            <img src="https://via.placeholder.com/150" alt="Award 5" />
            <p>Award 5 description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

