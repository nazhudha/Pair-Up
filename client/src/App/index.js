import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LoginAndSignup from './LoginAndSignup/index'
import Login from './LoginAndSignup/Login/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
