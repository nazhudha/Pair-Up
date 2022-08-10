import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GithubTable from '../../Components/GithubTable';
import ProfileUser from '../../Components/ProfileUser';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState({ user: [] });
  const { id } = useParams();

  const [name, setName] = useState('');
  const [followers, setFollowers] = useState('');
  const [login, setLogin] = useState('');
  const [bio, setBio] = useState('');
  const [avatar_url, setAvatar_url] = useState('');
  const [repos, setRepos] = useState({ repository: [] });
  const [info, setInfo] = useState({ user: [] });
  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get('__firebase_request_key');
  useEffect(() => {
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
    }
    fetch('http://localhost:8080/profile/' + id, config)
      .then((response) => response.json())
      .then((data) => {
        setResult({ user: data });
        setIsLoading(false);
      });

    fetch('https://api.github.com/users/shsn1990s')
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
    fetch('https://api.github.com/users/shsn1990s/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  const setData = ({ name, login, followers, bio, avatar_url }) => {
    setName(name);
    setLogin(login);
    setFollowers(followers);
    setBio(bio);
    setAvatar_url(avatar_url);
  };

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      {/* <p>{result.user.fname}</p>
      <p>{result.user.lname}</p>
      <p>{result.user.email}</p> */}
      {/* Github Information */}
      <p>{bio}</p>
      <p>{login}</p>
      <p>{followers}</p>
      <ProfileUser info={info} result={result} />
      <br></br>
      {/* <GithubTable repos={repos} /> */}
    </div>
  );
};

export default Profile;
