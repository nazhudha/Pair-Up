import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>

      <div className="form-container">
        <div className="login-wrapper">
          <form>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
          </form>
          <Link to="/">
            {/* add link */}
            <button className="login-btn">Log in</button>
          </Link>
        </div>
      </div>

    </>
  );
}
