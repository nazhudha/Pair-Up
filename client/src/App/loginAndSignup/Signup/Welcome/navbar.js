import React from "react";
import Pairuplogo from "./images/Pairuplogo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={Pairuplogo} alt="logo" className="nav--icon" />
      <nav></nav>
    </div>
  );
}
