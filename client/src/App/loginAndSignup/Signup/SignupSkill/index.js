import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

export default function SignupSkill({ user, addSkill }) {
  const beginnerRef = useRef();
  const intermediateRef = useRef();
  const expertRef = useRef();
  const radio = {
    bottom: -300,
    left: 1200,
    fontSize: 20,
    center: 10,
  };

  const nextButtonRef = useRef();

  function handleChange() {
    let skill = "";

    if (beginnerRef.current.checked === true) {
      skill = "Beginner";
    } else if (intermediateRef.current.checked === true) {
      skill = "Intermediate";
    } else if (expertRef.current.checked === true) {
      skill = "Expert";
    }
    addSkill(skill);
  }

  return (
    <div>
      <FormControl style={radio}>
        <FormLabel id="demo-radio-buttons-group-label">Coding Level</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            inputRef={beginnerRef}
            value="Beginner"
            control={<Radio />}
            label="Beginner"
            onChange={handleChange}
          />
          <FormControlLabel
            inputRef={intermediateRef}
            value="Intermediate"
            control={<Radio />}
            label="Intermediate"
            onChange={handleChange}
          />
          <FormControlLabel
            inputRef={expertRef}
            value="Expert"
            control={<Radio />}
            label="Expert"
            onChange={handleChange}
          />
        </RadioGroup>
        <Link to="/signuplanguage">
          <Button
            inputRef={nextButtonRef}
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
      </FormControl>
    </div>
    // <>
    //   <div className="codinglevel">
    //     <h3>What's your coding level?</h3>
    //     <input
    //       ref={beginnerRef}
    //       type="radio"
    //       value="beginner"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Beginner
    //     <input
    //       ref={intermediateRef}
    //       type="radio"
    //       value="intermediate"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Intermediate
    //     <input
    //       ref={expertRef}
    //       type="radio"
    //       value="expert"
    //       name="radAnswer"
    //       onChange={handleChange}
    //     />
    //     Expert
    //   </div>
    //   <Link to="/signuplanguage">
    //     <button className="next-btn" ref={nextButtonRef} disabled={true}>
    //       NEXT
    //     </button>
    //   </Link>
    // </>
  );
}
