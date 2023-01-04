import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'


function home() {
  return (

    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Juulio</h2>

        <div className='prompt'>
          <p> Passioante developer</p>
          <GithubIcon/>
          <LinkedInIcon/>
          <EmailIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1></h1>
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
          <li className='item'>
            <h2> Data Science</h2>
            <span>wedwedwekjdnwejndjwendjnwejkndjkwendlikwjendiwkejndk</span>
          </li>
        </ol>
      </div>
    </div>
    
  )
}

export default home
