import React from 'react'
import {Link} from 'react-router-dom'

export default function SignupName() {

  

  return (
    <>
    <form>
      <label>
        First Name:
        <input type="text" name="fname" />
      </label>
      <label>
        Last Name:
        <input type="text" name="lname" />
      </label>
    </form>
    <Link to="/signupSkill">
      <button>
        NEXT
      </button>
    </Link>
  </>
  )
}
