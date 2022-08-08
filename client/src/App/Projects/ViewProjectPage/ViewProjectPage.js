import React, { useState, useEffect } from "react";

// functions
import { getOneProjectById } from '../../Functions/getProjects'

// componants
import UserCardsContainer from "../../LoginAndSignup/Signup/Welcome/AllUserCardsContainer";
import JoinButton from "../Componants/JoinButton";
import ProjectPage from "./ProjectPage";

const dummyProject = "62effd775c8f214c1439d2f6"

export default function ViewProjectPage() {
  const [project, setProject] = useState([]);


  const pullMyProject = () => {
    getOneProjectById(dummyProject) // api function
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProject();
  }, []); 


  return (
  
    <ProjectPage project={project}/>
  )
}
