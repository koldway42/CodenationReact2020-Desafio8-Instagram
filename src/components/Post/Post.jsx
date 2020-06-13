import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  
  const [liked, toggleLiked] = useState(false);
  const [following, toggleFollowing] = useState(false);

  function handleLike () {
    liked ? toggleLiked(false) : toggleLiked(true);
  }

  function handleFollow () {
    following ? toggleFollowing(false) : toggleFollowing(true);
  }

  return (
    <article class="post" data-testid="post">
      <header class="post__header">
          <div class="user"><a class="user__thumb" href="/users/blackpanther"><img src={userInfo.avatar} alt="T'Challa" /></a><a class="user__name" href="/users/blackpanther">{userInfo.name}</a></div>
          <button class="post__context" onClick={handleFollow}><span class={`follow-btn ${following ? "is-following" : ""}`}>{following ? "Seguindo" : "Seguir"}</span></button>
      </header>
      <figure class="post__figure"><img src={postInfo.imageUrl} alt="" /></figure>
      <nav class="post__controls">
          <button class="post__control" onClick={handleLike}><i class={liked ? "fas fa-heart" : "far fa-heart"}></i></button>
          <div class="post__status">
          <div class="user"><span>curtido por <Link to="/">{ postInfo.comments.length ? postInfo.comments[0].name : "Name" }</Link> e outras <Link to="/">{postInfo.comments.length - 1} pessoas.</Link></span></div>
          </div>
      </nav>
    </article>
  );
};

export default Post;
