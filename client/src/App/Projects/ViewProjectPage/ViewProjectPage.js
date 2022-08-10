import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResponsiveAppBarLoggedIn from "../../../Components/ResponsiveAppBar_LoggedIn";

// functions
import { getOneProjectById } from "../../Functions/getProjects";

// componants
import ProjectPage from "./ProjectPage";

export default function ViewProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const pullMyProject = () => {
    getOneProjectById(id) // api function
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProject();
  }, []);

  if (project !== null) {
    return (
      <>
        <ResponsiveAppBarLoggedIn />
        <ProjectPage project={project} />
      </>
    );
  }
}
