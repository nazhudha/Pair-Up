import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

export default function SignupName() {

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nextButtonRef = useRef();

    function handleChange() {
      if ((firstNameRef.current.value.length == 0) || (lastNameRef.current.value.length == 0)) {
        nextButtonRef.current.disabled = true
        }
      else {nextButtonRef.current.disabled = false}
    }
  
 
  return (
    <>
    <form>
      <label>
        First Name:
        <input ref={firstNameRef} type="text" name="fname" onChange={handleChange}/>
      </label>
      <label>
        Last Name:
        <input ref={lastNameRef}type="text" name="lname" onChange={handleChange} />
      </label>
    </form>
    <Link to="/signupskill">
      <button ref={nextButtonRef} disabled={true}>
        NEXT
      </button>
    </Link>
  </>
  )
}
