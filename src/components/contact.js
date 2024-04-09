import React from 'react';
import './contact.css';
import backgroundImg from '../images/forest.webp';

const ContactSection = () => {
  return (
    <div className="contact-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>To get in touch, please use the following:</p>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91 (0) 3222 283394</p>
          <p><strong>Email:</strong> <a href="mailto:somnath@iitkgp.ac.in">somnath@iitkgp.ac.in</a></p>
          <p><strong>Website:</strong> <a href="https://sites.google.com/view/somnathghosal" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="IIT Kharagpur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.659504612545!2d87.85497541541765!3d22.314927285319036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4c0000000001%3A0xed3460f2b2b8e5d6!2sIndian+Institute+of+Technology+Kharagpur!5e0!3m2!1sen!2sin!4v1527838912324"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
