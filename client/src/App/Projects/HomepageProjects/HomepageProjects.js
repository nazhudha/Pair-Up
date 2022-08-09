import React, {useState, useEffect} from 'react'
import ProjectPostCardContainer from '../ProjectPostCards/ProjectPostCardContainer'

// Functions
import { getAllProjects, getAllProjectsById } from '../../Functions/getProjects';

const signedInUserId = "62eff044c98668c5a2f8d923" // change to take ID from sessions

export default function HomepageProjects() {
  // const [projects, setProjects] = useState(null);
  const [myProjects, setMyProjects] = useState(null);

  // const pullProjects = () => {
  //   getAllProjects() // api function
  //     .then((res) => setProjects(res))
  //     .catch((err) => console.log(err));
  // };

  const pullMyProjects = () => {
    getAllProjectsById(signedInUserId) // api function
      .then((res) => setMyProjects(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProjects();
    // pullProjects();
  }, []); // this is the dependancy array. [] means it will run once when the page opens


  if (myProjects != null ) {
  console.log(myProjects)
  return (
    <>

    <h2>My Projects</h2> 
      <ProjectPostCardContainer projects={myProjects}/>
    {/* <h2>All Projects</h2> 
      <ProjectPostCardContainer projects={projects}/> */}
    </>
  )}
}
