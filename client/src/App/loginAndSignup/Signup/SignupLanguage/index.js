import React from "react";
import { Link } from "react-router-dom";

export default function SignupLanguage() {
  return (
    <>
      <div className="languagetype">
        <h3>What programming languages do you know?</h3>
        <input type="radio" value="ruby" name="ruby" /> ruby
        <input type="radio" value="javascript" name="javascript" /> javascript
        <input type="radio" value="python" name="python" /> python
      </div>
      <Link to="/signupcredentials">
        <button>NEXT</button>
      </Link>
    </>
  );
}
