import React from 'react';
import '../styles/Banner.css'; // Create corresponding CSS file


const Banner = () => {
  return (
    <div className="banner" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlockEnd: 20 }}>
      <div className="banner-content">
        <h1>Join your Colleagues, Classmates, and Friends on Nexus</h1>
        <button className="get-started-button">Get started</button>
      </div>
    </div>
  );
};

export default Banner;
