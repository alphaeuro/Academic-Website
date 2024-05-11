import React from 'react';
import './youtubesection.css'; 
import Drinkingwater from '../images/drinkwat.webp';
import Girlstoiletimage from '../images/girlstoilet.webp';
import Bluetreasuresimage from '../images/bluetreas.webp';

const youtubeVideos = [
  {
    title: 'Potable Water Facility Development for Rural Areas',
    thumbnail: Drinkingwater,
    videoUrl: 'https://youtu.be/tt47Ut0a_Ls?si=0iDIyXUeOpEYxDEh',
  },
  {
    title: 'Blue Treasures: Water For Commons',
    thumbnail: Girlstoiletimage,
    videoUrl: 'https://youtu.be/jxcya1O4HD8?si=lZoPUvDQPS7beghd',
  },
  {
    title: 'Mission for Girls Toilet Facility Development in Rural Areas',
    thumbnail: Bluetreasuresimage,
    videoUrl: 'https://youtu.be/a2f5CUvAdaQ?si=aZCHxkgYNologAwe',
  },
];


const YouTubeSection = () => {
  return (
    <div className="youtube-section">
      {youtubeVideos.map((video, index) => (
        <a key={index} href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="youtube-item">
          <div className="youtube-thumbnail-container">
            <img src={video.thumbnail} alt={video.title} className="youtube-thumbnail" />
          </div>
          <h3>{video.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default YouTubeSection;
