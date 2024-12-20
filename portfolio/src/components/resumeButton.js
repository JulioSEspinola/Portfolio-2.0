import React from 'react';
import Button from '@mui/material/Button';
import resume from '../assets/cv_Julio_Espinola.pdf'

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
      style={{ backgroundColor: '#e9d35b', color: 'black',
      transition: 'transform 0.3s, box-shadow 0.3s'}}
      variant="contained"
      color="primary"
      onClick={handleDownload}
    >
      View Resume
    </Button>
  );
}

export default ResumeButton;
