import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Project.css';
import {ProjectList} from '../helpers/ProjectList'

function Projects() {
  return (
    <>
      <div className='projects'>
        <h1 className='projects-tittle'> My Personal Projects</h1>
        <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem key ={project.id} id={idx} name={project.name} image={project.image}/>;
        })}
        </div>
      </div>
    </>
  );
}
export default Projects
