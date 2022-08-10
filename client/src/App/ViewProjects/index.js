import React, { useState, useEffect } from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";

// Functions
import { getAllUsers } from "../Functions/getAllUsers";
import ResponsiveAppBarLoggedIn from "../../Components/ResponsiveAppBar_LoggedIn";

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
      <ResponsiveAppBarLoggedIn/>
      <h1>Welcome to Pair Up!</h1>
      <div className="cardsContainer">
        <UserCardsContainer usersData={usersData} />
      </div>
    </div>
  );
}
