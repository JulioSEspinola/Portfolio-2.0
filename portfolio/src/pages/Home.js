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

        <h2>Hi, My name is Julio Espinola</h2>

        <div className='prompt'>
      
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
              HTML | CSS | BootStap | JavaScript | React
            </span>
          </li>

          <li className='item'>
            <h2> Back End</h2>
            <span>Java | Python | MySQL</span>
          </li>

          <li className='item'>
            <h2> Softwares & Tools</h2>
            <span>Git | GitHub | VS Code | IntelliJ | Heroku</span>
          </li>
        </ol>
      </div>
    </div>
    
  )
}

export default home
