import React, {useState} from "react";
import "./LandingContent.css";
import Auth from '../../user/pages/Auth';

const LandingContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState([false]);
  
  const isLoggedInHandler = () => {
    setIsLoggedIn (isLoggedIn ? false : true);
  }

  if (isLoggedIn) {
    return (
      <container className="content-container">
        <h1 className="landing-title">Plan your next <br/>group event</h1>
        <p className="landing-content">
          This site is intended for use by groups of friends of all kinds,
        </p>
        <p>
          for determining future events and closely monitoring their important
          events
        </p>
        <div className="button-wrapper">
          <button onClick={isLoggedInHandler} className="button">
            Login
          </button>
        </div>
      </container>
    );
  } else {
    return <Auth />;
  }
};;

export default LandingContent;
