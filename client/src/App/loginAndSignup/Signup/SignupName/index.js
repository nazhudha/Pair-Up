import React, { useRef } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import ResponsiveAppBarLoggedOut from "../../../../Components/ResponsiveAppBar_Loggedout";
=======
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import Button from "@mui/material/Button";
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5

export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  function handleChange() {
    addName(firstNameRef.current.value, lastNameRef.current.value);
    console.log(user);
  }

  return (
<<<<<<< HEAD
    <>
    <ResponsiveAppBarLoggedOut/>
      <div className="form-container">
        <div className="signup-wrapper">
          <form>
            <label>
              First Name:
              <input
                ref={firstNameRef}
                type="text"
                name="fname"
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                ref={lastNameRef}
                type="text"
                name="lname"
                onChange={handleChange}
              />
            </label>
          </form>

          <Link
            to="/signupskill"
            onClick={() => {
              addName(firstNameRef.current.value, lastNameRef.current.value);
            }}
          >
            <button className="next-btn" ref={nextButtonRef} disabled={true}>
              NEXT
            </button>
          </Link>
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
          inputRef={firstNameRef}
          id="filled-basic"
          label="First Name"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          type="text"
          inputRef={lastNameRef}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          onChange={handleChange}
        />
      </FormGroup>
      <Link
        to="/signupskill"
        onClick={() => {
          addName(firstNameRef.current.value, lastNameRef.current.value);
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "#b7bfe4",
            border: "2px black solid",
          }}
          className="btn btn-primary btn-bloack"
        >
          Next
        </Button>
      </Link>
    </div>
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5
  );
}
