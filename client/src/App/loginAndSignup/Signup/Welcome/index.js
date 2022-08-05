import React from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./UserCardsContainer";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <UserCardsContainer />
    </div>
  );
}
