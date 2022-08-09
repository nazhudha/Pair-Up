import React, { useState, useEffect } from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";
import Navbar from "./navbar";

// Functions
import { getAllUsers } from "../../../Functions/getAllUsers";

export default function Welcome() {
  const [usersData, setUsersData] = useState([]);

  const pullUsers = () => {
    getAllUsers() // api function
      .then((res) => setUsersData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullUsers();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  return (
    <div>
      <Navbar />
      <h1>Welcome to Pair Up!</h1>
      <div className="cardsContainer">
        <UserCardsContainer usersData={usersData} />
      </div>
    </div>
  );
}
