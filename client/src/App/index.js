import './index.css';
import {
 useState,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Components
import LoginAndSignup from './LoginAndSignup/index'
import Login from './LoginAndSignup/Login/index'
import Profile from './Profile/index'
import SignupName from './LoginAndSignup/Signup/SignupName/index'
import SignupSkill from './LoginAndSignup/Signup/SignupSkill/index'
import SignupLanguage from './LoginAndSignup/Signup/SignupLanguage/index'
import SignupCredentials from './LoginAndSignup/Signup/SignupCredentials/index'
import Welcome from './LoginAndSignup/Signup/Welcome/index'

function App() {

// user signup 
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    skill: "",
    languages: [],
    email: "",
    password: "",
    postcode: ""
  })

  //user SU functions
  const addFname = () => {
    
  }

  //pass user and neccisary functions to the individual paths
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signupname" element={<SignupName />} />
          <Route path="/signupskill" element={<SignupSkill />} />
          <Route path="/signuplanguage" element={<SignupLanguage />} />
          <Route path="/signupcredentials" element={<SignupCredentials />} />
          <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
