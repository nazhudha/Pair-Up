import React from 'react'
import { Link } from 'react-router-dom';


export default function LoginAndSignup() {
  return (
    <div>
       <Link to="/">
        <button>
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button>
          Log In
        </button>
      </Link>
    </div>
  )
}
