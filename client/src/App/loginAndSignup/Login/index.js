import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </form>
      <Link to="/">{/* add link */}
        <button>
          Log in
        </button>
      </Link>
    </>
  )
}
