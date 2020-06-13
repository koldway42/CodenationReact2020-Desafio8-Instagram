import React, { useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {

  const [watchedPercent, setWatchedPercent] = useState(0)

  function handleWatchedPercent(e) {
    setWatchedPercent((e.target.currentTime * 100 / e.target.duration).toFixed(2))
  }

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={"/users/" + user.username} className="user__thumb">
              <img src={user.avatar} alt={user.username}/>
            </Link>
            <Link to={"/users/" + user.username} className="user__name">{user.name}</Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed" style={{width: watchedPercent + "%"}}></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video onTimeUpdate={handleWatchedPercent} src={story.videoUrl} autoPlay loop playsinlines="true" className="video-player"></video>
        </section>
      </div>
    </section>
  );
};

export default Story;
