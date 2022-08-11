import React, { Component, useEffect, useState } from 'react';
import ProfileHeader from './profileHeader';
import './profile.css';
import LeftProfileFeed from './LeftProfileFeed/LeftProfileFeed';
import RightSideBar from './RightSideBar/RightSideBar';
<<<<<<< HEAD
import ResponsiveAppBarLoggedIn from '../../Components/ResponsiveAppBar_LoggedIn';
=======
import ProfileUser from '../../Components/ProfileUser';
import Loading from '../../Components/Loading';
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [result, setResult] = useState({ user: [] });
  const [info, setInfo] = useState({ user: [] });

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

        // console.log(info, 'info');
        // console.log(result, 'result');
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );


  // setTimeout(getRecords, 1000);
  return (
    <div>
<<<<<<< HEAD
      <ResponsiveAppBarLoggedIn/>
=======

      {/* <ProfileHeader />
      <div>
        <p>{result.user.fname}</p>
        <p>{result.user.lname}</p>
        <p>{result.user.email}</p>
      </div>

>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5
      <ProfileHeader result={result.user} />

      <div className="main-feed-container">
        <LeftProfileFeed />
        <RightSideBar />
      </div> */}
      <ProfileUser info={info} result={result} />
    </div>
  );
};
export default Profile;
