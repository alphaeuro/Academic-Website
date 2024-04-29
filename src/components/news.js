import React from 'react';
import './news.css'; // Import CSS file for styling
import News1 from "../images/news1.jpeg"
import News2 from "../images/News2.png"
import News3 from "../images/News3.png"
import News4 from "../images/News4.jpeg"
import News5 from "../images/News5.jpeg"
import News6 from "../images/News6.jpeg"
// import News7 from "../images/News7.jpeg"
// import News8 from "../images/News8.png"

const News = () => {
  // Array of newspaper cutting image URLs
  const newspaperCuttings = [
    News1,
    News2,
    News3,
    News4,
    News5,
    News6
  ];

  return (
    <div className="newspaper-cuttings-container">
      {newspaperCuttings.map((cutting, index) => (
        <img key={index} src={cutting} alt={`Newspaper cutting ${index + 1}`} className="newspaper-cutting" />
      ))}
    </div>
  );
};

export default News;
