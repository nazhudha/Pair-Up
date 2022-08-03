import "./index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import LoginAndSignup from "./LoginAndSignup/index";
import Login from "./LoginAndSignup/Login/index";
import Profile from "./Profile/index";
import SignupName from "./LoginAndSignup/Signup/SignupName/index";
import SignupSkill from "./LoginAndSignup/Signup/SignupSkill/index";
import SignupLanguage from "./LoginAndSignup/Signup/SignupLanguage/index";
import SignupCredentials from "./LoginAndSignup/Signup/SignupCredentials/index";
import Welcome from "./LoginAndSignup/Signup/Welcome/index";

// Functions
import { createUser } from "./LoginAndSignup/Signup/functions/createUser";

function App() {
  //  const testUser = {
  //     fname: "tom",
  //     lname: "Reynolds",
  //     skill: "Master",
  //     languages: ["ruby", "javascript"],
  //     username: "paddyr105",
  //     email: "paddy@test.com",
  //     password: "password",
  //     postcode: "se1 1ab"
  //   }

  // user signup
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    skill: "",
    languages: [],
    username: "",
    email: "",
    password: "",
    postcode: "",
  });

  //user SU functions - move to componant
  const addName = (fname, lname) => {
    setUser({ ...user, fname: fname, lname: lname });
  };

  const addSkill = (skill) => {
    setUser({ ...user, skill: skill });
  };

  const addLang = (lang) => {
    setUser({ ...user, languages: lang });
  };

  //pass user and neccisary functions to the individual paths
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signupname"
          element={<SignupName addName={addName} user={user} />}
        />
        <Route
          path="/signupskill"
          element={<SignupSkill addSkill={addSkill} user={user} />}
        />
        <Route
          path="/signuplanguage"
          element={<SignupLanguage addLang={addLang} user={user} />}
        />
        <Route path="/signupcredentials" element={<SignupCredentials />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
