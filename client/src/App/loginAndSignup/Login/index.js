import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Login({ userSignIn, createSignInObject }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitButtonRef = useRef();

  const signIn = async (user) => {
    try {
      const res = await fetch("http://localhost:8080/sessions/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const json = await res.json(); // not sure why this line is needed?
    } catch (err) {}
  };

  function handleChange() {
    if (
      emailRef.current.value.length === 0 ||
      passwordRef.current.value.length === 0
    ) {
      submitButtonRef.current.disabled = true;
    } else {
      submitButtonRef.current.disabled = false;
    }
    createSignInObject(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <form>
        <label>
          Email:
          <input
            ref={emailRef}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            ref={passwordRef}
            type="text"
            name="password"
            onChange={handleChange}
          />
        </label>
      </form>
      <Link
        to="/profile"
        onClick={() => {
          signIn(userSignIn);
        }}
      >
        <button ref={submitButtonRef} disabled={true}>
          Log in
        </button>
      </Link>
    </>
  );
}
