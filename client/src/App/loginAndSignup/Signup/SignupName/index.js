import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nextButtonRef = useRef();
  const names = {
    bottom: -300,
    left: 1200,
    fontSize: 20,
    center: 10,
  };
  const button = {
    bottom: -450,
    left: 1045,
    fontSize: 20,
    center: 10,
  };

  return (
    
    <div>
  
      <FormGroup style={names}>
        <TextField
          type="text"
          inputRef={firstNameRef}
          id="filled-basic"
          label="First Name"
          variant="filled"
        />
        <TextField
          type="text"
          inputRef={lastNameRef}
          id="filled-basic"
          label="Last Name"
          variant="filled"
        />
      </FormGroup>
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
    </div>
  );
}
