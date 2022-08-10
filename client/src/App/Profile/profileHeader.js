import React from 'react';

export default function ProfileHeader({ result }) {
  return (
    <div className="profile-header-container">
      <div className="profile-header-contents">
        <h1 id="profile-title">
          {result.fname} {result.lname}
        </h1>
        <div className="profile-sub-header">
          <div>Email: {result.email}</div>
          <div>Coding Level</div>
          <div>Location</div>
          <div>Available to pair</div>
          <div>Other information</div>
        </div>
        <img src="https://openpsychometrics.org/tests/characters/test-resources/pics/S/2.jpg"></img>
      </div>
    </div>
  );
}
