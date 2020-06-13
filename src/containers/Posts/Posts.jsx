import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  return (
  <div className="container">
    <section className="feed" data-testid="posts">
      {posts.length ? posts.map(post => {
        const user = getUserHandler(post.userId);
        return(<Post postInfo={post} userInfo={user}/>);
      }) : ""}
    </section>
  </div>
);}

export default Posts;
