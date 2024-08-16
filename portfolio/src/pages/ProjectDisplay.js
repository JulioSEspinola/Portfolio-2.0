import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>{project.description}</p>
      <IconButton href={project.link} target="_blank">
        <GithubIcon />
      </IconButton>
    </div>
  );
}
export default ProjectDisplay;