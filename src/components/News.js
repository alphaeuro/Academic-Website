import React from "react";
import "./Home.css";

const News = () => {
  // Array of newspaper cutting image URLs
  const newspaperCuttings = [
    News1,
    News2,
    News3,
    News4,
    News5,
    News6,
    News7,
  ];

  return (
    <div className="home-container">
      <h1>Dr. Somnath Ghosal</h1>
      <h2>News</h2>
      <p>
        Brief introduction goes here. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      {newspaperCuttings.map((cutting, index) => (
        <img key={index} src={cutting} alt={`News ${index + 1}`} />
      ))}
    </div>
  );
};

export default News;
