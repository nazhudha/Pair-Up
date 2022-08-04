import React, {useRef} from 'react'
import {Link} from 'react-router-dom'

export default function NewProjectPage() {

  const submitButtonRef = useRef();

  const handleChange = () => {
    console.log("hello")
  }

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
    <form>

      <label>
        Name
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category
        <input type="text" name="category" onChange={handleChange}/>
      </label>

      <h3>Describe briefly what you are trying to build</h3>
      <textarea name="summary" onChange={handleChange}>
      </textarea>
      

      <h3>How long do you think this project will take?</h3>
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        &lt;1 day
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        &gt;1 day
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        2-3 days
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        &lt;1 week
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        &gt;1 week
        <input
          type="radio"
          name="radAnswer"
          onChange={handleChange}
        />
        2-3 weeks
      </form>

      <form>

     <h3>How much of a commitment are you looking for from your team?</h3>
      <input
        type="radio"
        name="radAnswer"
        onChange={handleChange}
      />
      eh, whenever is good for them!
      <input
        type="radio"
        name="radAnswer"
        onChange={handleChange}
      />
      maybe 1 session a week?
      <input
        type="radio"
        name="radAnswer"
        onChange={handleChange}
      />
      couple times a week preferably

      <h3>How difficult do you think this will be?</h3>
     
      <textarea name="difficulty" onChange={handleChange}/>


      <h3>How long do you want a pair-up session to be?</h3>
      <label>
      <input type="number" name="preferedSessionLength" min="1" max="8"/>
      (1 - 8 hours)
      </label>

      <h3>Write the full details of what you want to achieve in this project:</h3>
      <textarea name="description" onChange={handleChange}>
      </textarea>
    

      <label>
      display your location?
      <input type="checkbox" name="displayLocation"/>
      </label>

      <h3>How many additional people are you looking for to help you in this project</h3>
      <label>
      <input type="number" name="numberOfAdditionalUsersNeeded" min="1" max="5"/>
      (max 5)
      </label>


      <h3>What skills are you looking for to help you on this project? </h3>
        <i class="devicon-coffeescript-original" name="coffeescript" onClick={()=>{console.log("hello")}}></i>
        {/* add more icons from https://devicon.dev/ */}

        <textarea name="description" placeholder="other details" onChange={handleChange} />
        
      </form>

    <Link
      to="/ADDLINKHERE"> 
      <button ref={submitButtonRef} >
        NEXT
      </button>
    </Link>
  </>
  )
}
