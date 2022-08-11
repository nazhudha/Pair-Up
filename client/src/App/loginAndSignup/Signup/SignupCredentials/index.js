import React, { useRef } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import ResponsiveAppBarLoggedOut from "../../../../Components/ResponsiveAppBar_Loggedout";
=======
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormControl";
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5

export default function SignupCredentials({
  createUser,
  addCredentials,
  user,
}) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);
  const postcodeRef = useRef(null);

  function handleChange() {
    addCredentials(
      usernameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      postcodeRef.current.value
    );
    console.log(user);
  }

  return (
<<<<<<< HEAD
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
=======
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormGroup>
        <TextField
          type="text"
          inputRef={usernameRef}
          id="Username_"
          label="Username"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          type="text"
          inputRef={emailRef}
          id="Email_"
          label="Email"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          type="text"
          inputRef={passwordRef}
          id="Password_"
          label="Password"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          type="text"
          inputRef={password2Ref}
          id="Password2_"
          label="Password Checker"
          variant="filled"
          onChange={handleChange}
        />

        <TextField
          type="text"
          inputRef={postcodeRef}
          //style={firstName}
          id="Postcode_"
          label="Postcode"
          variant="filled"
          onChange={handleChange}
        />
      </FormGroup>
      <Link to="/login">
        <Button
          onClick={() => {
            addCredentials(
              usernameRef.current.value,
              emailRef.current.value,
              passwordRef.current.value,
              postcodeRef.current.value
            );
            createUser(user);
          }}
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#b7bfe4",
            border: "2px black solid",
          }}
          className="btn btn-primary btn-bloack"
        >
          Create User
        </Button>
      </Link>
    </div>
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5
  );
}
