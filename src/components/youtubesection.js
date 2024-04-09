import React from 'react';
import './youtubesection.css'; 

const youtubeVideos = [
  {
    title: 'Potable Water Facility Development for Rural School',
    thumbnail: 'https://i.ytimg.com/an_webp/tt47Ut0a_Ls/mqdefault_6s.webp?du=3000&sqp=CKWc07AG&rs=AOn4CLBa7TbU9DKc8s9fqqYPuKgEoctRlQ',
    videoUrl: 'https://youtu.be/tt47Ut0a_Ls?si=0iDIyXUeOpEYxDEh',
  },
  {
    title: 'Blue Treasures: Water For Commons',
    thumbnail: 'https://i.ytimg.com/an_webp/jxcya1O4HD8/mqdefault_6s.webp?du=3000&sqp=CKT80rAG&rs=AOn4CLDaHMmGfbR8zXf7z674FsYzNIMcVQ',
    videoUrl: 'https://youtu.be/jxcya1O4HD8?si=lZoPUvDQPS7beghd',
  },
  {
    title: 'Mission for Girls Toilet Facility Development in Rural Schools',
    thumbnail: 'https://i.ytimg.com/an_webp/a2f5CUvAdaQ/mqdefault_6s.webp?du=3000&sqp=COCT07AG&rs=AOn4CLBeMMzSdaYCoyc9ZbAVaZ7l7ea66g',
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
