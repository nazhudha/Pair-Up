import React, { Component, useEffect, useState } from 'react';
import ProfileHeader from './profileHeader';
import './profile.css';
import LeftProfileFeed from './LeftProfileFeed/LeftProfileFeed';
import RightSideBar from './RightSideBar/RightSideBar';
import ResponsiveAppBarLoggedIn from '../../Components/ResponsiveAppBar_LoggedIn copy';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({ user: [] });

  useEffect(() => {
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
    }
    fetch('http://localhost:8080/profile/me', config)
      .then((response) => response.json())
      .then((data) => {
        setResult({ user: data });
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  // setTimeout(getRecords, 1000);
  return (
    <div>
      <ResponsiveAppBarLoggedIn/>
      <ProfileHeader result={result.user} />
      <div className="main-feed-container">
        <LeftProfileFeed />
        <RightSideBar />
      </div>
    </div>
  );
};
export default Profile;
