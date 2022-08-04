import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignupSkill({ user, addSkill }) {
  const beginnerRef = useRef();
  const intermediateRef = useRef();
  const expertRef = useRef();

  const nextButtonRef = useRef();

  function handleChange() {
    let skill = "";
    if (
      beginnerRef.current.checked == false &&
      intermediateRef.current.checked == false &&
      expertRef.current.checked == false
    ) {
      nextButtonRef.current.disabled = true;
    } else {
      nextButtonRef.current.disabled = false;
    }

    if (beginnerRef.current.checked === true) {
      skill = "beginner";
    } else if (intermediateRef.current.checked === true) {
      skill = "intermediate";
    } else if (expertRef.current.checked === true) {
      skill = "expert";
    }
    addSkill(skill);
  }

  return (
    <>
      <div>
        <input
          ref={beginnerRef}
          type="radio"
          value="beginner"
          name="radAnswer"
          onChange={handleChange}
        />{" "}
        Beginner
        <input
          ref={intermediateRef}
          type="radio"
          value="intermediate"
          name="radAnswer"
          onChange={handleChange}
        />{" "}
        Intermediate
        <input
          ref={expertRef}
          type="radio"
          value="expert"
          name="radAnswer"
          onChange={handleChange}
        />{" "}
        Expert
      </div>
      <Link to="/signuplanguage">
        <button ref={nextButtonRef} disabled={true}>
          NEXT
        </button>
      </Link>
    </>
  );
}
