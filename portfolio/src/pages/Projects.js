import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Project.css';
import { ProjectList } from '../helpers/ProjectList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Projects() {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <h1 className='projects-title'>My Personal Projects</h1>
        <Grid container spacing={1} justifyContent="center" className='projectList'>
          {ProjectList.map((project, idx) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={project.id}>
              <ProjectItem
                id={idx}
                name={project.name}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
