import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Componants
import LoginAndSignup from './LoginAndSignup/index'
import Login from './LoginAndSignup/Login/index'
import Profile from './Profile/index'
import SignupName from './LoginAndSignup/Signup/SignupName/index'
import SignupSkill from './LoginAndSignup/Signup/SignupSkill/index'
import SignupLanguage from './LoginAndSignup/Signup/SignupLanguage/index'
import SignupCredentials from './LoginAndSignup/Signup/SignupCredentials/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signupname" element={<SignupName />} />
          <Route path="/signupskill" element={<SignupSkill />} />
          <Route path="/signuplanguage" element={<SignupLanguage />} />
          <Route path="/signupcredentials" element={<SignupCredentials />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
