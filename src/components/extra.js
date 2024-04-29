import React from 'react';
import './news.css';
import News1 from "../images/news1.jpeg"

// Sample data with placeholders for images
const newsArticles = [
  {
    title: "IIT Kharagpur helps in tribal villages",
    summary: "CRDIST, IIT Kharagpur installs low-cost purified drinking water systems in two tribal villages",
    link: "#",
    image: News1
  },
  {
    title: "Advancements in Renewable Energy",
    summary: "Discover how new technologies are shaping the future of renewable energy across the globe.",
    link: "#",
    image: "renewable-energy.jpg"
  },
  {
    title: "The Rise of Artificial Intelligence",
    summary: "Understanding the impact of AI on automation and daily human interactions.",
    link: "#",
    image: "artificial-intelligence.jpg"
  },
  {
    title: "Breakthroughs in Biotechnology",
    summary: "Examining recent innovations in biotechnology that are revolutionizing healthcare.",
    link: "#",
    image: "biotechnology.jpg"
  },
];

const News = () => {
  return (
    <div className="news-container">
      {newsArticles.map((article, index) => (
        <a key={index} href={article.link} className="news-article">
          <div className="news-image" style={{ backgroundImage: `url(${article.image})` }}></div>
          <div className="news-text">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;