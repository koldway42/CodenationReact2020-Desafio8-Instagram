import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link className="user" to={"/users/" + username}>
          <div className="user__thumb">
            <img src={avatar !== "" ? avatar : "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"} alt={username}/>
          </div>
  <div className="user__name">{name}</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
