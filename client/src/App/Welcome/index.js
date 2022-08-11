import React, { useState, useEffect } from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";
import Location from "../../Components/Location";

// Functions
import { getAllUsers, getAllUsersById } from "../Functions/getAllUsers";

export default function Welcome() {
  const [usersData, setUsersData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  const pullUsers = () => {
    getAllUsers() // api function
      .then((res) => setUsersData(res))
      .catch((err) => console.log(err));
  };

  const pullFriends = () => {
    getAllUsersById() // api function
      .then((res) => setFriendsData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullUsers();
    pullFriends();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <div className="cardsContainer">
        <h2 className="sub-title">Your Friends List</h2>
        <UserCardsContainer usersData={friendsData} />
      </div>

      <div>
        <br />
        <Location />
      </div>

      <div className="cardsContainer">
        <h2 className="sub-title">All Users</h2>
        <UserCardsContainer usersData={usersData} />
      </div>
    </div>
  );
}
