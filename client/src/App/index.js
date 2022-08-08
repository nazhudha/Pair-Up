import './index.css';
import { Component, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
// Components
import LoginAndSignup from './LoginAndSignup/index';
import Login from './LoginAndSignup/Login/index';
import Profile from './Profile/index';
import ProfileUser from './ProfileUser/index';
import Find from './Find/index';
import SignupName from './LoginAndSignup/Signup/SignupName/index';
import SignupSkill from './LoginAndSignup/Signup/SignupSkill/index';
import SignupLanguage from './LoginAndSignup/Signup/SignupLanguage/index';
import SignupCredentials from './LoginAndSignup/Signup/SignupCredentials/index';
// import Welcome from "./LoginAndSignup/Signup/Welcome/index";
import NewProjectPage from './Projects/NewProjectPage';
import HomepageProjects from './Projects/HomepageProjects/HomepageProjects';

// Functions
import { createUser } from './LoginAndSignup/Signup/functions/createUser';

export default class App extends Component {
  state = {};

  // componentDidMount() {
  //   if (localStorage.getItem('token') !== null) {
  //     const config = {
  //       headers: {
  //         'x-auth-token': localStorage.getItem('token'),
  //       },
  //     };
  //     fetch('http://localhost:8080/profile/me', config)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data, '!!!');
  //         this.setState({
  //           user: data,
  //         });
  //       });
  //   }
  // }

  render() {
    if (localStorage.getItem('token') !== null) {
      return (
        <BrowserRouter>
          <h2>Hi, welcome to Pair Up!</h2>
          <button onClick={() => localStorage.clear()} className="log-out">
            Logout
          </button>
          <Routes>
            <Route path="/projects/newproject" element={<NewProjectPage />} />
            {/* <Route path="/" element={<LoginAndSignup />} /> */}
            {/* <Route path="/welcome" element={<Welcome />} /> */}
            <Route path="/find" element={<Find />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<ProfileUser />} />
            <Route path="/home/projects" element={<HomepageProjects />} />
          </Routes>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/projects/newproject" element={<NewProjectPage />} />
          <Route path="/" element={<LoginAndSignup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signupname"
            // element={<SignupName addName={addName} user={user} />}
          />
          <Route
            path="/signupskill"
            // element={<SignupSkill addSkill={addSkill} user={user} />}
          />
          <Route
            path="/signuplanguage"
            // element={<SignupLanguage addLang={addLang} user={user} />}
          />
          <Route
            path="/signupcredentials"
            element={
              <SignupCredentials
              // user={user}
              // addCredentials={addCredentials}
              // createUser={createUser}
              />
            }
          />
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          <Route path="/find" element={<Find />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileUser />} />
          <Route path="/home/projects" element={<HomepageProjects />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

//export default App;
