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
          {/* <div><ResumeButton></ResumeButton></div> */}
        </div>
        <p className="about-me">
          My name is Julio Espinola, and I’m a Software Engineer based in
          Washington State. I’m deeply passionate about learning and
          problem-solving, with approximately 2 years of professional
          experience, including both internships and full-time roles. I’m also
          the founder of Websio, a consulting company dedicated to providing web
          development services to small non-profit organizations in the Pierce
          and King County areas.
        </p>
      </div>
      <About/>
    </div>
    </>
  )
}
export default home
