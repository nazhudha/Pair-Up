import React, { useRef } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import ResponsiveAppBarLoggedOut from "../../../../Components/ResponsiveAppBar_Loggedout";
=======
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5

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
<<<<<<< HEAD
    <>
    <ResponsiveAppBarLoggedOut/>
      <div className="languagetype">
        <h3>What programming languages do you know?</h3>
        <input ref={rubyRef} type="radio" value="ruby" name="ruby" /> ruby
        <input
          ref={javascriptRef}
          type="radio"
          value="javascript"
          name="javascript"
        />{" "}
        javascript
        <input ref={pythonRef} type="radio" value="python" name="python" />{" "}
        python
      </div>
      <Link to="/signupcredentials" onClick={sendSkillsArray}>
        <button className="next-btn">NEXT</button>
      </Link>
    </>
=======
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormGroup>
        <FormControlLabel
          inputRef={rubyRef}
          control={<Checkbox />}
          value="Ruby"
          label="Ruby"
          onChange={sendSkillsArray}
        />
        <FormControlLabel
          inputRef={javascriptRef}
          control={<Checkbox />}
          value="Javascript"
          label="Javascript"
          onChange={sendSkillsArray}
        />
        <FormControlLabel
          inputRef={pythonRef}
          control={<Checkbox />}
          value="Python"
          label="Python"
          onChange={sendSkillsArray}
        />
        <Link to="/signupcredentials">
          <Button
            onClick={sendSkillsArray}
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
        </Link>
      </FormGroup>
    </div>
>>>>>>> dc50664f583302e22daaa84b0ca046b7c14b57d5
  );
}
