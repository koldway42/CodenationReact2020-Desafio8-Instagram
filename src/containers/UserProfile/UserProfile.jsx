import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  console.log(avatar)
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img src={avatar} alt={username}/>
            </div>
            <p className="user__name">{name} <span>@{username}</span></p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
