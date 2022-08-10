import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBarLoggedOut from "../../../../Components/ResponsiveAppBar_Loggedout";

export default function SignupCredentials({
  createUser,
  addCredentials,
  user,
}) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const postcodeRef = useRef();

  const submitButtonRef = useRef();

  function handleChange() {
    if (
      emailRef.current.value.length == 0 ||
      passwordRef.current.value.length == 0 ||
      password2Ref.current.value.length == 0 ||
      postcodeRef.current.value.length == 0 ||
      usernameRef.current.value.length == 0
    ) {
      submitButtonRef.current.disabled = true;
    } else {
      submitButtonRef.current.disabled = false;
    }
    addCredentials(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      postcodeRef.current.value
    );
    console.log(user);
  }

  return (
    <>
    <ResponsiveAppBarLoggedOut/>
      <div className="form-container">
        <div className="wrapper">
          <form className="form">
            <label>
              Username:
              <input
                ref={usernameRef}
                type="text"
                name="username"
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                ref={emailRef}
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                ref={passwordRef}
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>
            <label>
              Please re-type password:
              <input
                ref={password2Ref}
                type="password"
                name="password2"
                onChange={handleChange}
              />
            </label>
            <label>
              Postcode:
              <input
                ref={postcodeRef}
                type="text"
                name="postcode"
                onChange={handleChange}
              />
            </label>
            <Link
              to="/login"
              onClick={() => {
                createUser(user);
              }}
            >
              <button
                className="submit-btn"
                ref={submitButtonRef}
                disabled={true}
              >
                SUBMIT
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
