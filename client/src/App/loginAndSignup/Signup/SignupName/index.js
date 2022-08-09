import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material/Box";

export default function SignupName({ addName, user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nextButtonRef = useRef();

  function handleChange() {
    if (
      firstNameRef.current.value.length == 0 ||
      lastNameRef.current.value.length == 0
    ) {
      nextButtonRef.current.disabled = true;
    } else {
      nextButtonRef.current.disabled = false;
    }
  }

  return (
    <>
      <div className="form-container">
        <div className="signup-wrapper">
          <form>
            First Name:
            <input
              ref={firstNameRef}
              type="text"
              name="fname"
              onChange={handleChange}
            />
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
  );
}
