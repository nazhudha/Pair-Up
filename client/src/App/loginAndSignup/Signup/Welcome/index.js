import React from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";

export default function Welcome() {

  const usersData = [{
    fname: "tom",
    lname: "Reynolds",
    skill: "Master",
    languages: ["ruby", "javascript"],
    username: "paddyr105",
    email: "paddy@test.com",
    password: "password",
    postcode: "se1 1ab"
  },
  {
    fname: "tim",
    lname: "Reynolds",
    skill: "Master",
    languages: ["ruby", "javascript"],
    username: "paddyr106",
    email: "paddy@test.com",
    password: "password",
    postcode: "se1 1ab"
  },
  {
    fname: "tony",
    lname: "Reynolds",
    skill: "Master",
    languages: ["ruby", "javascript"],
    username: "paddyr107",
    email: "paddy@test.com",
    password: "password",
    postcode: "se1 1ab"
  },
  ]
  

  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <UserCardsContainer usersData={usersData}/>
    </div>
  );
}
