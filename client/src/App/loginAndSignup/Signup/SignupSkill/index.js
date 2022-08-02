import React from 'react'
import {Link} from 'react-router-dom'

export default function SignupSkill() {
  return (
    <>
      <div>
        <input type="radio" value="Beginner" name="beginner" /> Beginner
        <input type="radio" value="Intermediate" name="intermediate" /> Intermediate
        <input type="radio" value="Expert" name="expert" /> Expert
      </div>
    <Link to="/">{/* add link */}
      <button>
        NEXT
      </button>
    </Link>
  </>
  )
}
