import React from "react";
import { Link } from "react-router-dom";
import "./userCards.css";
import Chris from "./images/Chris.png";

export default function UserCards({ user }) {
  return (
    <div className="userCards">
      <img src={Chris} alt="Chris" />
      <div className="userInfo">
        <p>
          {`${user.fname} ${user.lname}`}
          <br></br>
          {user.skill}
          <br></br>
          {user.languages}
          <br></br>
        </p>
      </div>
      <div className="buttonContainer">
        <button>Profile</button>
        <button>Contact me</button>
      </div>
    </div>
  );
}
