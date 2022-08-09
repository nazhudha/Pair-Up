import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormControl";

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
  const checkBox = {
    bottom: -300,
    left: 1200,
    fontSize: 20,
    center: 10,
  };
  const button = {
    bottom: -650,
    left: 1000,
    fontSize: 20,
    center: 10,
  };
  const submitButtonRef = useRef();

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
    <div>
      <FormGroup style={checkBox}>
        <TextField
          type="text"
          inputRef={usernameRef}
          //style={firstName}
          id="Username_"
          label="Username"
          variant="filled"
        />
        <TextField
          type="text"
          inputRef={emailRef}
          //style={firstName}
          id="Email_"
          label="Email"
          variant="filled"
        />
        <TextField
          type="text"
          inputRef={passwordRef}
          //style={lastName}
          id="Password_"
          label="Password"
          variant="filled"
        />
        <TextField
          type="text"
          inputRef={password2Ref}
          //style={lastName}
          id="Password2_"
          label="Password Checker"
          variant="filled"
        />

        <TextField
          type="text"
          inputRef={postcodeRef}
          //style={firstName}
          id="Postcode_"
          label="Postcode"
          variant="filled"
        />
      </FormGroup>
      <Link
        to="/login"
        onClick={() => {
          addCredentials(
            usernameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            postcodeRef.current.value
          );
        }}
      >
        <Button
          style={button}
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
    // <>
    //   <div className="form-container">
    //     <div className="wrapper">
    //       <form className="form">
    //         <label>
    //           Username:
    //           <input
    //             ref={usernameRef}
    //             type="text"
    //             name="username"
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           Email:
    //           <input
    //             ref={emailRef}
    //             type="email"
    //             name="email"
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           Password:
    //           <input
    //             ref={passwordRef}
    //             type="password"
    //             name="password"
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           Please re-type password:
    //           <input
    //             ref={password2Ref}
    //             type="password"
    //             name="password2"
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <label>
    //           Postcode:
    //           <input
    //             ref={postcodeRef}
    //             type="text"
    //             name="postcode"
    //             onChange={handleChange}
    //           />
    //         </label>
    //         <Link
    //           to="/login"
    //           onClick={() => {
    //             createUser(user);
    //           }}
    //         >
    //           <button
    //             className="submit-btn"
    //             ref={submitButtonRef}
    //             disabled={true}
    //           >
    //             SUBMIT
    //           </button>
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // </>
  );
}
