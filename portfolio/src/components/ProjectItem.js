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
      height:400,
      margin:5,
      color:"white",
      backgroundColor:"		#0e1111",
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 10px rgba(252, 227, 4, 0.447) ',
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
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectItem;
