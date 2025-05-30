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
      padding:1,
      color:"black",
      backgroundColor:"white",
      transition: 'transform 0.3s, box-shadow 0.3s',
      borderRadius: '10px',
      boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.6)',
      border: '5px solid #333',
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: '0px 0px 10px rgba(145, 13, 248, 0.6)',
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
          <Typography gutterBottom variant="h4" component="div" sx={{ backgroundColor:"black", color:"white", fontFamily: '"Pixelify Sans", serif',}}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProjectItem;