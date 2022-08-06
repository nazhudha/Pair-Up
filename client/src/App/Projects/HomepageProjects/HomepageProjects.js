import React, {useState, useEffect} from 'react'
import AllProjectPostCardContainer from '../ProjectPostCards/AllProjectPostCardContainer'

import { getAllProjects } from '../../Functions/getAllProjects';

export default function HomepageProjects() {
  const [projects, setProjects] = useState([]);

  const pullProjects = () => {
    getAllProjects() // api function
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullProjects();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  return (
    <AllProjectPostCardContainer projects={projects}/>
  )
}
