import React from 'react'
import { Link } from 'react-router-dom';

  


export default function LoginAndSignup() {
  // user signup 
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    skill: "",
    languages: [],
    username: "",
    email: "",
    password: "",
    postcode: ""
  })

  //user SU functions - move to componant
  const addFname = () => {
    
  
  return (
    <div>
       <Link to="/Signupname">
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
