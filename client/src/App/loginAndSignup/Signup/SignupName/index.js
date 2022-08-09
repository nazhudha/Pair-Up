import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nextButtonRef = useRef();
  const firstName = {
    minWidth: 200,
    minHeight: 100,
    bottom: -300,
    left: 1000,
    fontSize: 20,
  };
  const lastName = {
    minWidth: 150,
    minHeight: 100,
    bottom: -300,
    left: 1200,
    fontSize: 20,
  };
  const button = {
    minWidth: 50,
    minHeight: 50,
    bottom: -400,
    left: 825,
    fontSize: 20,
  };

  return (
    <div>
      <Grid container justify="center">
        <TextField
          type="text"
          inputRef={firstNameRef}
          style={firstName}
          id="filled-basic"
          label="First Name"
          variant="filled"
        />
        <TextField
          type="text"
          inputRef={lastNameRef}
          style={lastName}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
        <Link
          to="/signupskill"
          onClick={() => {
            addName(firstNameRef.current.value, lastNameRef.current.value);
          }}
        >
          <Button
            useRef={nextButtonRef}
            style={button}
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
          {/* <button className="next-btn" ref={nextButtonRef}>
          NEXT
        </button> */}
        </Link>
      </Grid>
    </div>
  );
}
