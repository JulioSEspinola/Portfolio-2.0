import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcont from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <IconButton href="https://github.com/JulioSEspinola" target="_blank">
          <GithubIcont />
      </IconButton>

      <IconButton href="https://www.linkedin.com/in/julio-steven-espinola-rodas-734902190/" target="_blank">
        <LinkedInIcon/>
      </IconButton>
      </div>
      <p>&copy; 2023 Julio Espinola </p>
    </div>
  )
}
