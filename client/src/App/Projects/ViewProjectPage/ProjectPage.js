import React from 'react'

// componants
import UserCardsContainer from "../../LoginAndSignup/Signup/Welcome/AllUserCardsContainer";
import JoinButton from "../Componants/JoinButton";

export default function ProjectPage({ project }) {

  console.log(project)
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
    <JoinButton projectId={project._id}/>
  </div>
{/* Skills we have */}
  <div>
    <strong>Skills we have </strong><br/>
    {project.langWeHave.map((languange)=>{
      return `${languange} `
    })}
  </div>
{/* Skills we need */}
  <div>
    <strong>Skills we need </strong><br/>
    {project.langWeNeed.map((languange)=>{
      return `${languange} `
    })}
  </div>
{/* Users in this project */}
  <div>
    <strong>Users in this project </strong><br/>
    <UserCardsContainer usersData={project.users}/>
  </div>
   {/* Map of users*/}
   <div>
    <strong>Where everyone is based</strong><br/>
    <JoinButton />
  </div>
</>
  )
}
