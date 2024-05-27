// Footer.js
import React from 'react';
import './contact.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          
          <h4>Exploring innovative ideas and disseminating through technology transfer, adoption and diffusion to create a sustainable future.</h4>
        </div>
        <div className="footer-section contact">
          <h2 style={{ textDecoration: 'underline' }}>Contact</h2>
          <p>Phone: +91 (0) 3222 283894</p>
          <p>Email: <a href="mailto:drsomnathghosal@gmail.com">drsomnathghosal@gmail.com</a></p>
          <p>Website: <a href="/">www.somnathghosal.com</a></p>
        </div>
        <div className="footer-section newsletter">
          
        </div>
      </div>
      <div className="footer-bottom">
        
      </div>
    </footer>
  );
};

export default Footer;
