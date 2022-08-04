import React from "react";
import { Link } from "react-router-dom";
import "./userCards.css";
import Chris from "./images/Chris.png";

export default function UserCards() {
  return (
    <div className="cardsContainer">
      <div className="userCards" style={{ color: "red" }}>
        <img src={Chris} alt="Chris" />;<p>Info about the user</p>
        <button>Profile</button>
        <button>Contact me</button>
      </div>
    </div>
  );
}
