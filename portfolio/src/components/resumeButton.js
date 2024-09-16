import React from 'react';
import Button from '@mui/material/Button';
import resume from '../assets/Resume_Julio_Espinola.pdf'

function ResumeButton() {
  const handleDownload = () => {
    // Path to your resume file in the public folder
    const resumeUrl = resume; 
    
    // Create a link element, set the download attribute, and trigger a click
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Resume_Julio_Espinola.pdf'); // You can customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      style={{marginRight:20, backgroundColor: 'rgba(252, 227, 4, 0.447)', color: 'white',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 3px 15px rgba(252, 227, 4, 0.447) ',
      }}}
      variant="contained"
      color="primary"
      onClick={handleDownload}
    >
      View Resume
    </Button>
  );
}

export default ResumeButton;
