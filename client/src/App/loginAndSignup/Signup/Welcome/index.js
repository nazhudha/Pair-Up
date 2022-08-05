import React, {useState, useEffect} from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";

export default function Welcome() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    console.log("hello")
  }, []); // this is the dependancy array. 

  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <UserCardsContainer usersData={usersData}/>
    </div>
  );
}
