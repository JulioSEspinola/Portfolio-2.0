import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <Card sx={{
      maxWidth: 500,
      margin:2,
      padding:1.5,
      backgroundColor:"#212329",
      transition: 'transform 0.3s, box-shadow 0.3s',
      borderRadius: '10px',
      // boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.6)',
      border: '10px #212329',
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: '#b297f1',
      },
    }} onClick={() => navigate("/project/" + id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ color:"#b297f1", fontFamily: ' "NTR", sans-serif, serif',}}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProjectItem;