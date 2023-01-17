import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/icons-material/Link';
import '../styles/Home.css'

function home() {
  return (

    <div className='home'>      
      <div className='about'>

        <h2>Hi, My name is Juulio</h2>

        <div className='prompt'>
          <p> Passioante developer</p>
      
          <IconButton href="https://github.com/JulioSEspinola" target="_blank">
            <GithubIcon />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/julio-steven-espinola-rodas-734902190/" target="_blank">
            <LinkedInIcon/>

          </IconButton>

          <IconButton href="mailto: espinolaj192@gmail.com" target="_blank">
             <EmailIcon/>
            
          </IconButton>
       
        </div>
      </div>
      <div className='skills'>
        <h1>About me</h1>
        <p className='about-me'>
            My name is Julio Espinola and I am a Computer Science student. I'm very passionate when it comes to technology.
            I come from a community that has been historically misrepresented in the tech industry. As a first-generation, Salvadorian immigrant,
            one of my goals is to inspire those with similar backgrounds to pursue more involvement in the tech industry. I am an individual how is eager to learn
            and make a change.
        </p>

        <h1 className='skills-h'>Skills</h1>

        <ol className='list'>
          <li className='item'>
            <h2> Front End</h2>
            <span>
              hejfn,d,23,e34,e,3ed,3edf,we.dfwefd,
            </span>
          </li>

          <li className='item'>
            <h2> Back End</h2>
            <span>wedwed2wedwedwed,wed.,we.d,we.,d.we,d.,d.f,.d,</span>
          </li>
        </ol>
      </div>
    </div>
    
  )
}

export default home
