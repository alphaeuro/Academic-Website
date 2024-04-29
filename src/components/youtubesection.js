import React from 'react';
import './youtubesection.css'; 

const youtubeVideos = [
  {
    title: 'Portable Water Facility Development for Rural School',
    thumbnail: 'https://i.ytimg.com/an_webp/tt47Ut0a_Ls/mqdefault_6s.webp?du=3000&sqp=CI7lvbEG&rs=AOn4CLASwTVW2dFwir4HNuXHbnvPc24Teg',
    videoUrl: 'https://youtu.be/tt47Ut0a_Ls?si=0iDIyXUeOpEYxDEh',
  },
  {
    title: 'Blue Treasures: Water For Commons',
    thumbnail: 'https://i.ytimg.com/an_webp/jxcya1O4HD8/mqdefault_6s.webp?du=3000&sqp=CI62vbEG&rs=AOn4CLDTfQWg63VpScWJFuHwvEySUVs6gA',
    videoUrl: 'https://youtu.be/jxcya1O4HD8?si=lZoPUvDQPS7beghd',
  },
  {
    title: 'Mission for Girls Toilet Facility Development in Rural Schools',
    thumbnail: 'https://i.ytimg.com/an_webp/a2f5CUvAdaQ/mqdefault_6s.webp?du=3000&sqp=CPDEvbEG&rs=AOn4CLDGqxTjocfL_BRA4HQgqw6s_vZV0Q',
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
