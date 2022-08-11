import React, {useState, useEffect} from 'react'
import ProjectPostCardContainer from '../ProjectPostCards/ProjectPostCardContainer'

// Functions
import { getAllProjects, getAllProjectsById } from '../../Functions/getProjects';
import ResponsiveAppBarLoggedIn from '../../../Components/ResponsiveAppBar_LoggedIn';


export default function HomepageProjects() {
  const [projects, setProjects] = useState(null);
  const [myProjects, setMyProjects] = useState(null);

  const pullProjects = () => {
    getAllProjects() // api function
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  };

  const pullMyProjects = () => {
    getAllProjectsById() // api functiQon
      .then((res) => setMyProjects(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProjects();
    pullProjects();
  }, []); // this is the dependancy array. [] means it will run once when the page opens


  if (projects != null ) {
  console.log(projects)
  return (
    <>
    <ResponsiveAppBarLoggedIn/>
    <h2>My Projects</h2> 
      <ProjectPostCardContainer projects={myProjects}/>
    <h2>All Projects</h2> 
      <ProjectPostCardContainer projects={projects}/>
    </>
  )}
}
