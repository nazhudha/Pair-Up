import React, { useState, useEffect } from "react";

import { getOneProjectById } from '../../Functions/getProjects'

const dummyProject = "62effd775c8f214c1439d2f6"

export default function ViewProjectPage() {
  const [project, setProject] = useState([]);


  const pullMyProject = () => {
    getOneProjectById(dummyProject) // api function
      .then((res) => setProject(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProject();
  }, []); 


  return (
    <>
    {/* banner */}
      <div>
        <small>{project.category}</small><br/>
        <strong>{project.name}</strong><br/>
        <h4>Difficulty: {project.difficulty} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Commitment: {project.commitmentLevel}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Session Length: Roughly {project.preferedSessionLength} hour  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Team Size: {project.users.length}/{project.numberOfAdditionalUsersNeeded}</h4> 
      </div>
    {/* Summary and Description */}
      <div>
        <p>{project.summary}</p>
        <p>{project.description}</p>
      </div>   
    {/* Join this project */}
      <div>
        <strong>Join this project</strong>
      </div>
    {/* Skills we have */}
      <div>
        <strong>Skills we have </strong><br/>
        {project.langWeHave}
      </div>
    {/* Skills we need */}
      <div>
        <strong>Skills we need </strong><br/>
        {project.langWeNeed.map((languange)=>{
          return `${languange} `
        })}
      </div>
    </>
  )
}
