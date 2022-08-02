import React from 'react'
import { Link } from 'react-router-dom';


export default function LoginAndSignup() {
  return (
    <div>
       <Link to="/">{/* add link */}
        <button>
          Sign up
        </button>
      </Link>
      <Link to="/login">
        <button>
          Log in
        </button>
      </Link>
    </div>
  )
}
