import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcont from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p>&copy; 2026 Julio Espinola </p>
      <div className='socialMedia'>
      <IconButton href="https://github.com/JulioSEspinola" target="_blank">
          <GithubIcont />
      </IconButton>

      <IconButton href="mailto: espinolaj192@gmail.com" target="_blank">
          <EmailIcon />
      </IconButton>

      <IconButton href="https://www.linkedin.com/in/julio-steven-espinola-rodas/" target="_blank">
        <LinkedInIcon/>
      </IconButton>
      </div>
    </div>
  )
}
