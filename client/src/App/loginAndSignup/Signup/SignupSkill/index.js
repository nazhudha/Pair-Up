import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

export default function SignupSkill({ user }) {


  const beginnerRef = useRef();
  const intermediateRef = useRef();
  const expertRef = useRef();
  
  const nextButtonRef = useRef();

    function handleChange() {
      if ((beginnerRef.current.checked == false) && (intermediateRef.current.checked == false) && (expertRef.current.checked == false)) {
        nextButtonRef.current.disabled = true
        }
      else {nextButtonRef.current.disabled = false}
    }
  
      console.log(user)
    

  return (
    <>
      <div>
        <input ref={beginnerRef} type="radio" value="Beginner" name="radAnswer" onChange={handleChange}/> Beginner
        <input ref={intermediateRef} type="radio" value="Intermediate" name="radAnswer" onChange={handleChange}/> Intermediate
        <input ref={expertRef} type="radio" value="Expert" name="radAnswer" onChange={handleChange}/> Expert
      </div>
      <Link to="/signuplanguage">
      <button ref={nextButtonRef} disabled={true}>
        NEXT
      </button>
    </Link>
  </>
  )
}
