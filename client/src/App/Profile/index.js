import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  async function getRecords() {
    const response = await fetch(`http://localhost:8080/profile/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    console.log(records);
  }

  getRecords();
  return <div>Profile</div>;
}
