import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import About from '../pages/About'
import ResumeButton from '../components/resumeButton'

function home() {
  return (
    <>
    <div className='home'>
      <div className='about'>
        <h2 >Hi! I'm <span className='Julio'>Julio!</span></h2>
        <div className='prompt'>
          <IconButton href="https://github.com/JulioSEspinola" target="_blank">
            <GithubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/julio-steven-espinola-rodas/" target="_blank">
            <LinkedInIcon/>
          </IconButton>
          <IconButton href="mailto: espinolaj192@gmail.com" target="_blank">
             <EmailIcon/>
          </IconButton>
          <div><ResumeButton></ResumeButton></div>
        </div>
      </div>
      <About/>
    </div>
    </>
  )
}
export default home
