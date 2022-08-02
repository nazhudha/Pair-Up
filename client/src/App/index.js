import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoginAndSignup from './loginAndSignup/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
