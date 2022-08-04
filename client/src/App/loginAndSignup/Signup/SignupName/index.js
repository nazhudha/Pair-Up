import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { createUser } from "../functions/createUser";

//  const testUser = {
//     fname: "harry",
//     lname: "Reynolds",
//     skill: "Master",
//     languages: ["ruby", "javascript"],
//     username: "paddyr105",
//     email: "paddy@test.com",
//     password: "password",
//     postcode: "se1 1ab"
//   }

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
        <button ref={nextButtonRef} disabled={true}>
          NEXT
        </button>
      </Link>
    </>
  );
}
