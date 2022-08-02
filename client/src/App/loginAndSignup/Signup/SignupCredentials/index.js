import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

export default function SignupCredentials() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const postcodeRef = useRef();

  
  const submitButtonRef = useRef();

    function handleChange() {
      if ((emailRef.current.value.length == 0) || (passwordRef.current.value.length == 0) || (password2Ref.current.value.length == 0) || (postcodeRef.current.value.length == 0)) {
        submitButtonRef.current.disabled = true
        }
      else {submitButtonRef.current.disabled = false}
    }
  
 
  return (
    <>
    <form>
      <label>
        Email:
        <input ref={emailRef} type="text" name="email" onChange={handleChange}/>
      </label>
      <label>
        Password:
        <input ref={passwordRef}type="text" name="password" onChange={handleChange} />
      </label>
      <label>
        Please re-type password:
        <input ref={password2Ref}type="text" name="password2" onChange={handleChange} />
      </label>
      <label>
        Postcode:
        <input ref={postcodeRef}type="text" name="postcode" onChange={handleChange} />
      </label>
    </form>
    <Link to="/">
      <button ref={submitButtonRef} disabled={true}>
        SUBMIT
      </button>
    </Link>
  </>
  )
}
