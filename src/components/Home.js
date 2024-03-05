//Home ka code yaha edit karna
//sir  ki photo "images" folder ke under mil jayega


// import React, { useState } from "react";
// import "./Home.css";

// const Home = () => {
//   const [currentTab, setCurrentTab] = useState("home");

//   return (
//     <div className="home-container">
//       <div className="header-container">
//         <div className="logo-container">
//           <img src="logo.png" alt="Logo" className="logo" />
//         </div>
//         <div className="intro-container">
//           <h1>Dr. Somnath Ghosal</h1>
//           <p>
//           Assistant Professor at the Centre for Rural Development and Innovative Sustainable Technology (CRDIST), <br />Indian Institute of Technology, Kharagpur. Dr. Ghosal is a dedicated educator and researcher with a 
//           passion<br /> for fostering sustainable development and community empowerment. </p>
//         </div>
//       </div>
//       <div className="logo-container">
//           {/* Add the image */}
//           <img src="./images./20221208_210902-01-01.jpeg" alt="Professor" className="professor-image" />
//         </div> 
//       <div className="other-sections-container">
//         <div className="section-container">
//           <h2 className="text-top-right">Meet Dr. Somnath Ghosal</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//             tempor, libero vel ultricies elementum, magna tellus mattis nisl,
//             in elementum augue quam eget nisi.
//           </p>
//           <button>Learn more about his achievements</button>
//         </div>
//         <div className="section-container">
//           <h2>Water Purification</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//             tempor, libero vel ultricies elementum, magna tellus mattis nisl,
//             in elementum augue quam eget nisi.
//           </p>
//           <img src="water-purification.jpg" alt="Water Purification" />
//           <p className="photo-caption">
//             CRDIST along with Dr. Somnath Ghosal installed several water
//             purifiers ● 00001/10
//           </p>
//         </div>
//         <div className="section-container">
//           <h2>Latest News</h2>
//           <ul>
//             <li>22/03/2022: News 1 goes here</li>
//             <li>21/03/2022: News 2 goes here</li>
//             <li>20/03/2022: News 3 goes here</li>
//           </ul>
//         </div>
//         <div className="section-container">
//           <h2>Research Fields</h2>
//           <ul>
//             <li>Action Research</li>
//             <li>Entrepreneurship</li>
//             <li>Rural Geography</li>
//             <li>Policy and Planning</li>
//             <li>Development</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "./Home.css";
import { Container, Typography } from "@mui/material";
import Logo from "../images/image.png"

const Home = () => {
  return (
    <div className="home-container" >
      <div className="header-container">
        {/* Image added here */}
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo-image" />
        </div>
        <div className="intro-container">
          <h1 style={{ textAlign: 'center', marginRight: '20px', marginTop: '20px' }}>The Ghosal Lab</h1>
          <h4 style={{ textAlign: 'right', marginRight: '20px', marginTop: '20px' }}>
         Rural geography Research group policy, planning and development
          </h4>
        </div>
      </div>
      {/* <div className="other-sections-container">
        <Container>
          <Typography variant="h3" gutterBottom>
            Research Interests
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ol>
              <li>Action Research with Community Participation</li>
              <li>Science, Society, and Public Policy</li>
              <li>Regional Planning and Public Policy</li>
              <li>Skill Development for Livelihood Generation</li>
            </ol>
          </Typography>
          <Typography variant="h3" gutterBottom>
            Academic Work Experience
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ol>
              <li>2016 – Present: Assistant Professor, IIT Kharagpur</li>
            </ol>
          </Typography>
        </Container>
      </div> */}
    </div>
  );
};

export default Home;
