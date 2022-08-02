import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LoginAndSignup from './LoginAndSignup/index'
import Login from './Login/index'
import Profile from './Profile/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
