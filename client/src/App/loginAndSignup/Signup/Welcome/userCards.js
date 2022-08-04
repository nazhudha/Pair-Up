import React from "react";
import { Link } from "react-router-dom";
import "./userCards.css";
import Chris from "./images/Chris.png";

export default function UserCards() {
  return (
    <div className="cardsContainer">
      <div className="userCards">
        <img src={Chris} alt="Chris" />
        <div className="userInfo">
          <p>
            Some information about the user 
            This is more information

          </p>
        </div>
        <div className="buttonContainer">
          <button>Profile</button>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
}
