import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [story, setStory] = useState("");
  const [user, setUser] = useState("");

  const findByHistoryId = (id) => stories.find(story => story.id === id);

  function handleStory(story) {
      
      let foundUser =  getUserHandler(story.userId)

      setStory(findByHistoryId(story.id));
      setUser(foundUser);

      setShowStory(true);
  }

  function handleCloseStory() {
    setShowStory(false);
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map(story => {
            const userProfile = getUserHandler(story.userId);
            return(
              <button onClick={() => handleStory(story)} className="user__thumb" key={story.id}>
                  <div className="user__thumb__wrapper">
                    <img src={!userProfile ? "#" : userProfile.avatar} alt="#" />
                  </div>
              </button>
            )
          })}
          </div>
        </section>
      {showStory && (
        <Story story={story} user={user} handleClose={handleCloseStory}/>
        )}
    </React.Fragment>
  );
};

export default Stories;
