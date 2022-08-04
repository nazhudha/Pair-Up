import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

export default function NewProjectPage() {

  const submitButtonRef = useRef();

  // const [project, setProject] = useState({
  //     owner: "", //placeholder id - replace with sessions ID
  //     name: "",
  //     difficulty: "",
  //     expectedProjectLength: "",
  //     category: "",
  //     preferedSessionLength: "",
  //     numberOfAdditionalUsersNeeded: "",
  //     summary: "",
  //     description: "",
  //     users: [], 
  //     langWeHave: [],
  //     langWeNeed: [],
  //     additionalSkillsNeeded: "",
  //     displayLocation: false,
  //     commitmentLevel: ""
  // });
  // // function to create project
  // const addProjectDetails = (owner, name, difficulty, expectedProjectLength) => { //dont pass a function too many arguments
  //   setProject({ ...user, owner: owner, name: name, difficulty: difficulty, expectedProjectLength: expectedProjectLength});
  // }
  // //function to pull sessions userID to owner and users
  // const addUserIdToProject = () => {
  //   let userID = "62ebab3246601bb290812d9e" //replace with session function
  //   setProject({ ...user, owner: userID, users:[userID] });
  // }

  return (
    <>
    {/* <form>
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
    </form> */}

    <Link
      to="/ADDLINKHERE"> 
      <button ref={submitButtonRef} >
        NEXT
      </button>
    </Link>
  </>
  )
}
