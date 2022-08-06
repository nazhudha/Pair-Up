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
import NewProjectPage from "./Projects/NewProjectPage";
import AllProjectPostCardContainer from "./Projects/ProjectPostCards/AllProjectPostCardContainer";

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

  // test project
  const dummyProjects = [{
    
    name: "Chatroulette Clone",
    difficulty: "Hard all the time!",
    expectedProjectLength: "1 week",
    category: "legitimate business venture",
    preferedSessionLength: "2",
    numberOfAdditionalUsersNeeded: "2",
    summary: "Help me make the world a better, and more naked place",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
    users: ["62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28"],
    
    langWeNeed: ["python", "c++"],
    additionalSkillsNeeded: "someone with experience in agile...and no shame.",
    displayLocation: true,
    commitmentLevel: "Maybe 1 session a week"
 
},{
    
  name: "Chatroulette Clone 2",
  difficulty: "Hard all the time!",
  expectedProjectLength: "1 week",
  category: "legitimate business venture",
  preferedSessionLength: "2",
  numberOfAdditionalUsersNeeded: "3",
  summary: "Help me make the world a better, and more naked place",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
  users: ["62ed45cbe0c14feccdbbff28"],
  
  langWeNeed: ["python", "c++"],
  additionalSkillsNeeded: "someone with experience in agile...and no shame.",
  displayLocation: true,
  commitmentLevel: "Maybe 1 session a week"

},{
    
  name: "Chatroulette Clone 3",
  difficulty: "Hard all the time!",
  expectedProjectLength: "1 week",
  category: "legitimate business venture",
  preferedSessionLength: "2",
  numberOfAdditionalUsersNeeded: "4",
  summary: "Help me make the world a better, and more naked place",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sapien nec sagittis aliquam malesuada bibendum arcu. In eu mi bibendum neque egestas congue quisque egestas. Magna fermentum iaculis eu non diam phasellus vestibulum. Nulla facilisi cras fermentum odio. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Quam vulputate dignissim suspendisse in est ante. Justo eget magna fermentum iaculis eu non. Fames ac turpis egestas sed tempus urna et pharetra. Enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus. Aliquet enim tortor at auctor. Mauris commodo quis imperdiet massa tincidunt nunc. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vitae tempus quam pellentesque nec nam aliquam sem. Posuere ac ut consequat semper. Id neque aliquam vestibulum morbi. Velit egestas dui id ornare arcu odio ut sem. Sapien eget mi proin sed libero enim sed faucibus turpis. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu lobortis elementum nibh tellus molestie nunc non. Senectus et netus et malesuada fames. Tortor consequat id porta nibh venenatis cras sed felis. Nunc mattis enim ut tellus elementum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eget arcu dictum varius duis at consectetur. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Et malesuada fames ac turpis.",
  users: ["62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28", "62ed45cbe0c14feccdbbff28"],
  
  langWeNeed: ["python", "c++"],
  additionalSkillsNeeded: "someone with experience in agile...and no shame.",
  displayLocation: true,
  commitmentLevel: "Maybe 1 session a week"

},]

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

  const addCredentials = (username, email, password, postcode) => {
    setUser({ ...user, username: username, email: email, password: password, postcode: postcode  });
  };

  //pass user and neccisary functions to the individual paths
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/projects/newproject" element={<NewProjectPage />} />
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
        <Route path="/signupcredentials" element={<SignupCredentials user={user} addCredentials={addCredentials} createUser={createUser} />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home/projects" element={<AllProjectPostCardContainer projects={dummyProjects}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
