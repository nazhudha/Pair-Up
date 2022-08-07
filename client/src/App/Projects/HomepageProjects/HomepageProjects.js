import React, {useState, useEffect} from 'react'
import ProjectPostCardContainer from '../ProjectPostCards/ProjectPostCardContainer'

// Functions
import { getAllProjects, getAllProjectsById } from '../../Functions/getProjects';

const signedInUserId = "62ebab3246601bb290812d9e" // change to take ID from sessions

export default function HomepageProjects() {
  const [projects, setProjects] = useState([]);
  const [MyProjects, setMyProjects] = useState([]);

  const pullProjects = () => {
    getAllProjects() // api function
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  };

  const pullMyProjects = () => {
    getAllProjectsById(signedInUserId) // api function
      .then((res) => setMyProjects(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProjects();
    pullProjects();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  return (
    <>

    <h2>My Projects</h2> 
      <ProjectPostCardContainer projects={MyProjects}/>
    <h2>All Projects</h2> 
      <ProjectPostCardContainer projects={projects}/>
    </>
  )
}
