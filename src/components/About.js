import React from 'react';
import './About.css';
import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons from Font Awesome library
import Msc from '../images/MSc2005.jpg'
import ma from '../images/visva2005.JPG'
import Phd from '../images/PhD2010.jpg'
import Profile from '../images/aboutpic.jpg'
import US10 from "../images/US 2010.jpg"
import ISSC from "../images/46 ISSC.jpg"
import Canada from "../images/Canada 2019.jpg"
import China from "../images/China 2012.jpg"
import ICPP4 from "../images/ICPP4 2019.jpg"
import IISF from "../images/IISF 2022.jpg"
import Indonesia from "../images/Indonesia 2011.jpg"
import IWIS from "../images/IWIS 2019.jpg"
import Najin from "../images/Najin 2015.jpg"
import Netherlands from "../images/Netherlands 2013 -2.jpg"
import Roman from "../images/Romanian Academy of Science 2017.jpg"
import Royal from "../images/Royal Holloway 2018.jpg"
import Seoul1 from "../images/Seoul National Uni 2016 - 2.jpg"
import Seoul2 from "../images/Seoul2.jpg"
import Seoul3 from "../images/glory.jpg"
import Seoul4 from "../images/copyright.jpg"
import Tech4Seva from "../images/Tech4Seva 2019.jpg"
import US from "../images/US 2010 -2.jpg"
const About = () => {
  return (
    <div className="about-container">
      {/* Container for the image and text side by side */}
      <div className="image-and-text-container">
        <div className="image-container">
          <img src={Profile} alt="Somnath Ghosal" className="about-image" />
        </div>
        <div className="text-container">
          <h1>Dr Somnath Ghosal</h1>
          <h4>Assistant Professor<br/>Centre for Rural Development & Innovative Sustainable Technology<br/>IIT Kharagpur</h4>
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
            <img src = {Msc} alt="Education 1" />
            <p>MA in Geography<br></br> Visva-Bharati University, India <br></br> 2005</p>
            {/* <p>2005</p> */}
          </div>
          <div className="education-item">
            <img src={ma} alt="Education 2" />
            <p>MSc in Human Geography School of Geography<br></br> University of Nottingham, UK <br></br> 2006</p>
            {/* <p>2006</p> */}
          </div>
          <div className="education-item">
            <img src={Phd} alt="Education 3" />
            <p>PhD in Environment & Society School of Geography<br></br>University of Nottingham, UK<br></br>2010</p>
            {/* <p>2010</p> */}
          </div>
        </div>
      </div>
      {/* Experience section below */}
      <div className="experience-section">
        <h1>Experience</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date" style={{ fontWeight: 'bold' }}>2008 - 2010</div>
            <div className="timeline-content">
              <p>Graduate Level Teaching Assistant and Demonstrator School of Geography<br></br> University of Nottingham, UK</p>
            </div>
          </div>
          <div className="timeline-item">
          <div className="timeline-date" style={{ fontWeight: 'bold' }}>2010 - 2013</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Assistant Professor in Geography <br></br>CSSS Calcutta</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date" style={{ fontWeight: 'bold' }}>2013 - 2014</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Fellow <br></br> IDF Gurugram</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date" style={{ fontWeight: 'bold' }}>2015 - 2016</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Research Fellow <br></br>Renmin University of China, Beijing</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date" style={{ fontWeight: 'bold' }}>2016 - Present</div>
            <div className="timeline-content">
              {/* <h3>Position 2</h3> */}
              <p>Assistant Professor<br></br> Indian Institute of Technology Kharagpur</p>
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
              <img src={IWIS} alt="Responsibility 1" />
              {/* <div className="responsibility-date">September 2023 - December 2023</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 1</h3> */}
              <h4>September 2023 - December 2023</h4>
              <p>Resource Person - Upskilling Leadership Qualities of Sabhapaties for Rural Transformation and Modern Agricultural Practices<br></br> Department of Panchayats and Rural Development, Govt. of West Bengal.</p>
            </div>
          </div>
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src={Tech4Seva} alt="Responsibility 2" />
              {/* <div className="responsibility-date">2017-2019</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 2</h3> */}
              <h4>2017-2019</h4>
              <p>Member - National Level Monitoring Programme<br></br> Ministry of Rural Development, Government of India.</p>
            </div>
          </div>
          <div className="responsibility-item">
            <div className="responsibility-image-container">
              <img src={US10} alt="Responsibility 3" />
              {/* <div className="responsibility-date">April 2010 - June 2010</div> */}
            </div>
            <div className="responsibility-details">
              {/* <h3>Responsibility 3</h3> */}
              <h4>April 2010 - June 2010</h4>
              <p>Research Assistant for GIS4EU project<br></br>Centre for Geospatial Science (CGS), University of Nottingham, UK.</p>
            </div>
          </div>
        </div>
      </div>
      {/*Awards and Honours section below */}
      <div className='awards-section'>
        <h1>Awards & Honours</h1>
        <div className="awards-container">
          <div className="award-item">
            <img src={Seoul2} alt="Award 1" />
            <p>Outstation Chairman for Rural Technology, Social Organizations, and Rural Development Thematic Panel of the 47th Indian Social Science Congress<br></br>2023</p>
          </div>
          <div className="award-item">
            <img src={ISSC} alt="Award 2" />
            <p>Outstation Chairman for Rural Technology, Social Organizations, and Rural Development Thematic Panel of the 46th Indian Social Science Congress <br></br>2022</p>
          </div>
          <div className="award-item">
            <img src={Seoul1} alt="Award 3" />
            <p>Patent Filed on Low-Cost Drinking Water Filtration System <br></br>2021</p>
          </div>
          <div className="award-item">
            <img src={Seoul4} alt="Award 4" />
            <p>Copy Right Certificate for Designing Purified Drinking Water Distribution at Nominal Cost<br></br>2018</p>
          </div>
          <div className="award-item">
            <img src={Seoul3} alt="Award 5" />
            <p>Glory of India Award <br></br>2013</p>
          </div>
        </div>
      </div>
      {/* Courses Offered section below */}
      <div className="courses-section">
        <h1>UG & PG Courses Offered</h1>
        <div className="courses-container">
          <div className="course-item">
            <p>1. Fundamentals of Rural Innovation (RD30005)</p>
          </div>
          <div className="course-item">
            <p>2. Participatory Rural Appraisal (RD61001)</p>
          </div>
          <div className="course-item">
            <p>3. Natural Resource Management: Science, Technology, and Policy</p>
          </div>
          <div className="course-item">
            <p>4. Rural Development: Concept, Strategies, and Experiences</p>
          </div>
          <div className="course-item">
            <p>5. Transfer and Management of Rural Technology (RD30002)</p>
          </div>
          <div className="course-item">
            <p>6. Financing Infrastructure Projects (ID60003)</p>
          </div>
          <div className="course-item">
            <p>7. Sustainable Green Urban Planning</p>
          </div>
          <div className="course-item">
            <p>8. Social Research Methodologies (Qualitative): Questionnaire Survey, Interviews, Focus Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

