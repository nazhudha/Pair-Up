import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignupLanguage({ addLang, user }) {
  const rubyRef = useRef(null);
  const javascriptRef = useRef(null);
  const pythonRef = useRef(null);

  function sendSkillsArray() {
    let languages = [];

    if (rubyRef.current.checked === true) {
      languages.push("ruby");
    }
    if (javascriptRef.current.checked === true) {
      languages.push("javascript");
    }
    if (pythonRef.current.checked === true) {
      languages.push("python");
    }
    addLang(languages);
  }

  return (
    <>
      <div className="languagetype">
        <h3>What programming languages do you know?</h3>
        <input ref={rubyRef} type="radio" value="ruby" name="ruby" /> ruby
        <input ref={javascriptRef} type="radio" value="javascript"name="javascript" /> javascript
        <input ref={pythonRef} type="radio" value="python" name="python" /> python
      </div>
      <Link to="/signupcredentials" onClick={sendSkillsArray}>
        <button>NEXT</button>
      </Link>
    </>
  );
}
