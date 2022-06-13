import React from "react";
import './Landing.css';
import Video from '../../video/video.mp4';
import LandingContent from '../components/LandingContent';

const Landing = () => {
  return (
    <container className="landing-container">
      <div className="landing-background">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          src={Video}
          type="video/m4"
        />
      </div>
      <LandingContent />
    </container>
  );
};

export default Landing;
