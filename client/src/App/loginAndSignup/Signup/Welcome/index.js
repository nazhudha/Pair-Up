import React, {useState, useEffect} from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";

// Functions
import {getAllUsers} from "../../../Functions/getAllUsers";

export default function Welcome() {

  const [usersData, setUsersData] = useState([]);


  const pullUsers = () => {
    console.log("hello")
    getAllUsers() // api function
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    pullUsers();
  }, []); // this is the dependancy array. 

  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <UserCardsContainer usersData={usersData}/>
    </div>
  );
}
