import React, {useRef} from 'react'
import {useForm} from "react-hook-form"
import {Link} from 'react-router-dom'

export default function NewProjectPage() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>
        Name
        <input type="text" name="name" {...register('name', { required: true })}/>
      </label>

      <label>
        Category
        <input type="text" name="category" {...register('category', { required: true })}/>
      </label>

      <h3>Describe briefly what you are trying to build</h3>
      <textarea name="summary" {...register('summary', { required: true })}>
      </textarea>
      

      <h3>How long do you think this project will take?</h3>
        <input
          type="radio"
          name="expectedProjectLength"
          value="<1 day"
          {...register('expectedProjectLength', { required: true })}
        />
        &lt;1 day
        <input
          type="radio"
          name="expectedProjectLength"
          value=">1 day"
          {...register('expectedProjectLength', { required: true })}
        />
        &gt;1 day
        <input
          type="radio"
          name="expectedProjectLength"
          value="2-3 days"
          {...register('expectedProjectLength', { required: true })}
        />
        2-3 days
        <input
          type="radio"
          name="expectedProjectLength"
          value="<1 week"
          {...register('expectedProjectLength', { required: true })}
        />
        &lt;1 week
        <input
          type="radio"
          name="expectedProjectLength"
          value=">1 week"
          {...register('expectedProjectLength', { required: true })}
        />
        &gt;1 week
        <input
          type="radio"
          name="expectedProjectLength"
          value="2-3 weeks"
          {...register('expectedProjectLength', { required: true })}
        />
        2-3 weeks
        <input
          type="radio"
          name="expectedProjectLength"
          value="Longer"
          {...register('expectedProjectLength', { required: true })}
        />
        Longer
    
     <h3>How much of a commitment are you looking for from your team?</h3>
      <input
        type="radio"
        name="commitmentLevel"
        value="eh, whenever is good for them!"
        {...register('commitmentLevel', { required: true })}
      />
      eh, whenever is good for them!
      <input
        type="radio"
        name="commitmentLevel"
        value="maybe 1 session a week?"
        {...register('commitmentLevel', { required: true })}
      />
      maybe 1 session a week?
      <input
        type="radio"
        name="commitmentLevel"
        value="couple times a week preferably"
        {...register('commitmentLevel', { required: true })}
      />
      couple times a week preferably

      <h3>How difficult do you think this will be?</h3>
     
      <textarea name="difficulty" {...register('difficulty', { required: true })}/>


      <h3>How long do you want a pair-up session to be?</h3>
      <label>
      <input type="number" name="preferedSessionLength" min="1" max="8" {...register('preferedSessionLength', { required: true })}/>
      (1 - 8 hours)
      </label>

      <h3>Write the full details of what you want to achieve in this project:</h3>
      <textarea name="description" {...register('description', { required: true })}>
      </textarea>
    
      <br></br>
      <label>
      display your location?
      <input type="checkbox" name="displayLocation" value={true} {...register('displayLocation')}/>
      </label>

      <h3>How many additional people are you looking for to help you in this project</h3>
      <label>
      <input type="number" name="numberOfAdditionalUsersNeeded" min="1" max="5" {...register('numberOfAdditionalUsersNeeded', { required: true })}/>
      (max 5)
      </label>


      <h3>What skills are you looking for to help you on this project? </h3>
        {/* <i className="devicon-coffeescript-original" name="langWeNeed" value="coffeescript" type="checkbox" onClick={()=>{console.log("hello")}} {...register('langWeNeed')}></i> */}
       <div>
       <i className="devicon-bootstrap-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="bootstrap" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-ruby-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="ruby" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-javascript-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="javascript" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-python-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="python" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-java-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="java" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-cplusplus-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="cplusplus" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-typescript-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="typescript" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-csharp-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="csharp" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-docker-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="docker" {...register('langWeNeed')}/>
      </div>
      <div>
      <i className="devicon-django-plain"></i>
        <br></br>
        <input type="checkbox" name="langWeNeed" value="django" {...register('langWeNeed')}/>
      </div>
      
      
      


        {/* add more icons from https://devicon.dev/ */}
        <br></br>

        <textarea name="description" placeholder="other details" {...register('additionalSkillsNeeded')}/>

        <input type="submit" value="submit" />
      </form>

  
      
    
  </>
  )
}
