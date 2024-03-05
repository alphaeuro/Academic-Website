//Home ka code yaha edit karna
//sir  ki photo "images" folder ke under mil jayega


import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="home-container">
      <div className="header-container">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <div className="intro-container">
          <h1>Dr. Somnath Ghosal</h1>
          <p>
            Brief introduction goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
      <div className="other-sections-container">
        <div className="section-container">
          <h2>Meet Dr. Somnath Ghosal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, libero vel ultricies elementum, magna tellus mattis nisl,
            in elementum augue quam eget nisi.
          </p>
          <button>Learn more about his achievements</button>
        </div>
        <div className="section-container">
          <h2>Water Purification</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, libero vel ultricies elementum, magna tellus mattis nisl,
            in elementum augue quam eget nisi.
          </p>
          <img src="water-purification.jpg" alt="Water Purification" />
          <p className="photo-caption">
            CRDIST along with Dr. Somnath Ghosal installed several water
            purifiers ● 00001/10
          </p>
        </div>
        <div className="section-container">
          <h2>Latest News</h2>
          <ul>
            <li>22/03/2022: News 1 goes here</li>
            <li>21/03/2022: News 2 goes here</li>
            <li>20/03/2022: News 3 goes here</li>
          </ul>
        </div>
        <div className="section-container">
          <h2>Research Fields</h2>
          <ul>
            <li>Action Research</li>
            <li>Entrepreneurship</li>
            <li>Rural Geography</li>
            <li>Policy and Planning</li>
            <li>Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;