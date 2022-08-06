import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function ProjectPostCard({ project }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };




  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div>
        <p>
          {project.users.length}/{project.numberOfAdditionalUsersNeeded} Users
          <br></br>
          {project.name} 
          <br></br>
          {project.category}
          <br></br>
          {project.languages}
          {isHovering && project.summary}
          <br></br>
          {isHovering && project.difficulty}
          <br></br>
          {isHovering && "Learn More"}
        </p>
      </div>
      
    </div>
  );
}
