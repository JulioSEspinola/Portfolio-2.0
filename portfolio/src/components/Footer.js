import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcont from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <GithubIcont/>
        <LinkedInIcon/>
      </div>
      <p>&copy; 2023 Julio Espinola.com </p>
    </div>
  )
}
