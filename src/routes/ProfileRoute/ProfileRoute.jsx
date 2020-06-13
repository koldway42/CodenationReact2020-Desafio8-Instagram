import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {

  const pathname = window.location.pathname;
  const param = pathname.split("/")[2];

  const [loaded, toggleLoaded] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState(""); 
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`)
      .then(resp => resp.json())
      .then(data => {
        setAvatar(data[0].avatar);
        setName(data[0].name);
        setUsername(data[0].username);
        setUserId(data[0].id)
      })
  }, [param])

  useEffect(() => {
    if (userId) {
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`)
        .then(resp => resp.json())
        .then(data => {
          setUserPosts(data);
          toggleLoaded(true)
        });
    }
  }, [userId]);

  return (
    <div data-testid="profile-route">
      <UserProfile avatar={avatar} name={name} username={username}/>
      <UserPosts posts={userPosts}/>
      {!loaded ? <Loading /> : ""}
    </div>
  );
};

export default ProfileRoute;
