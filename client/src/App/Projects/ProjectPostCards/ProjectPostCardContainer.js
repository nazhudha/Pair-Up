import React from 'react'
import ProjectPostCard from './ProjectPostCard';



export default function ProjectPostCardContainer({projects}) {
  return projects.map((project) => {
    return (
      
      <ProjectPostCard project={project} key={project._id}/>

    );
  });

}
