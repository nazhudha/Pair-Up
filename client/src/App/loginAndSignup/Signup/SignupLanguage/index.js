import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignupLanguage({ addlang, user }) {
  const rubyRef = useRef(null);
  const javascriptRef = useRef(null);
  const pythonRef = useRef(null);

  function sendSkillsArray() {
    let languages = [];
    console.log(rubyRef.current.checked);
    if (rubyRef.current.checked === true) {
      languages.push("ruby");
    } else if (javascriptRef.current.checked === true) {
      languages.push("Javascript");
    } else if (pythonRef.current.checked === true) {
      languages.push("python");
    }
    addlang(languages);
    console.log(user);
  }

  return (
    <>
      <div>
        <input ref={rubyRef} type="checkbox" value="ruby" name="ruby" /> ruby
        <input
          ref={javascriptRef}
          type="checkbox"
          value="javascript"
          name="javascript"
        />{" "}
        javascript
        <input
          ref={pythonRef}
          type="checkbox"
          value="python"
          name="python"
        />{" "}
        python
      </div>
      <Link to="/signupcredentials" onClick={sendSkillsArray()}>
        <button>NEXT</button>
      </Link>
    </>
  );
}
