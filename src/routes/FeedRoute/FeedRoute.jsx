import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [stories, setStories] = useState([])
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [fetchedUsersCount, setFetchedUsersCount] = useState(0);

  const getUserHandler = (id) => users.find(el => el.id === id);

  useEffect(() => {
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users`)
      .then(resp => resp.json())
      .then(data => { setUsers(data) })
  }, [])

  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
                    .then(resp => resp.json())
                    .then(data => { setStories(data) })
                    .catch(err => console.log(err))
  }, [users])

  useEffect(() => {
    if(fetchedUsersCount >= users.length) return

    console.log(fetchedUsersCount)

    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[fetchedUsersCount].id}/posts`)
                  .then(resp => resp.json())
                  .then(data => {
                    setPosts([...posts, ...data])
                    setFetchedUsersCount(fetchedUsersCount + 1)
                  })
                  .catch(err => console.log(err))
  }, [users, fetchedUsersCount, posts])

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserHandler} />
      {posts.length ? <Posts posts={posts} getUserHandler={getUserHandler}/> : <Loading />}
    </div>
  );
};

export default FeedRoute;
