
import React from 'react'
import { Link } from 'react-router-dom';

  




export default function LoginAndSignup() {

  
  return (
    <div>
      <h1 className="header">Pair Up!</h1>
      <h3 className="header2">
        A website to pair program with coders from around the world
      </h3>
      <Link to="/Signupname">
        <button>Sign up</button>
      </Link>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </div>
  );
}
