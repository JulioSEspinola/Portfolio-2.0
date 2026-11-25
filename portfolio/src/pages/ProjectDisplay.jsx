import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import "../styles/ProjectDisplay.css";

function isVideo(file) {
  return typeof file === "string" && file.endsWith(".mp4");
}
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <div className="project-display">
        <h1> {project.name}</h1>

        {isVideo(project.image) ? (
          <video controls width="100%">
            <source src={project.image} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={project.image} alt={project.name} />
        )}
        <p>{project.description}</p>

        <IconButton href={project.link} target="_blank">
          <GithubIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProjectDisplay;
