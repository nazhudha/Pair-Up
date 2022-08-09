import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

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
    <FormGroup>
      <FormControlLabel
        inputRef={rubyRef}
        control={<Checkbox />}
        value="Ruby"
        label="Ruby"
      />
      <FormControlLabel
        inputRef={javascriptRef}
        control={<Checkbox />}
        value="Javascript"
        label="Javascript"
      />
      <FormControlLabel
        inputRef={pythonRef}
        control={<Checkbox />}
        value="Python"
        label="Python"
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
  );
}
