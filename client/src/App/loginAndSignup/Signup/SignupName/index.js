import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nextButtonRef = useRef();
  const firstName = {
    minWidth: 150,
    minHeight: 100,
    bottom: -300,
    left: 600,
    fontSize: 20,
  };
  const lastName = {
    minWidth: 150,
    minHeight: 100,
    bottom: -300,
    left: 700,
    fontSize: 20,
  };
  const button = {
    minWidth: 50,
    minHeight: 50,
    bottom: -400,
    left: 390,
    fontSize: 20,
  };


  return (
    <div>
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
    </div>

    // <>
    //   <div className="form-container">
    //     <div className="signup-wrapper">
    //       <form>
    //         First Name:
    //         <input
    //           ref={firstNameRef}
    //           type="text"
    //           name="fname"
    //           onChange={handleChange}
    //         />
    //         <label>
    //           Last Name:
    //           <input
    //             ref={lastNameRef}
    //             type="text"
    //             name="lname"
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </form>

    //       <Link
    //         to="/signupskill"
    //         onClick={() => {
    //           addName(firstNameRef.current.value, lastNameRef.current.value);
    //         }}
    //       >
    //         <button className="next-btn" ref={nextButtonRef} disabled={true}>
    //           NEXT
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </>
  );
}
