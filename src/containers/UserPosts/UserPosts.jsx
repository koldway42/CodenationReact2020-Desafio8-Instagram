import React from 'react';

import './UserPosts.scss';

const UserPosts = ({ posts }) => {
  return(
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts.length ? posts.map(post => {
        return (
        <article className="post" data-testid="post">
          <figure className="post__figure">
            <img src={post.imageUrl} alt=""/>
          </figure>
        </article>
        )
      }): (
        <div className="no-posts">
          <span className="no-posts__content">Não há publicações deste usuário</span>
          <span class="no-posts__emoji" role="img" aria-label="Emoji Triste">😥</span>
        </div>
      )}
    </section>
  </div>
);}

export default UserPosts;
