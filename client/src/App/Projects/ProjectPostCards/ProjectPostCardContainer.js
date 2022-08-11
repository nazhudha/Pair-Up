import React from "react";
// import ProjectPostCard from './ProjectPostCard';
import ProjectCard from "../HomepageProjects/ProjectCard";

export default function ProjectPostCardContainer({ projects }) {
  return projects.map((project) => {
    return <ProjectCard project={project} key={project._id} />;
  });
}
