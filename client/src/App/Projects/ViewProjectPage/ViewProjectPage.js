import React, { useState, useEffect } from "react";

import { getOneProjectById } from '../../Functions/getProjects'

const dummyProject = "62efabfdd218aebb148b751d"

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
    <div>{project.name}</div>
  )
}
