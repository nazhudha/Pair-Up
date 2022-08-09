import React, { useState, useEffect } from "react";

// functions
import { getOneProjectById } from '../../Functions/getProjects'

// componants
import ProjectPage from "./ProjectPage";

const dummyProject = "62f0f5ec1bb392f63aead02c"

export default function ViewProjectPage() {
  const [project, setProject] = useState(null);


  const pullMyProject = () => {
    getOneProjectById(dummyProject) // api function
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProject();
  }, []); 



  if (project !== null){

  return (
  
    <ProjectPage project={project}/>
  )
  }
}
