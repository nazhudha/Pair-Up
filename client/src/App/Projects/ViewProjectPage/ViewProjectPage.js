import React, { useState, useEffect } from "react";

import { getOneProjectById } from '../../Functions/getProjects'

const dummyProject = "62eff8e0aa50eb1864005aea"

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
        <h4>{project.difficulty}</h4>
      
      
      </div>
    </>
  )
}
