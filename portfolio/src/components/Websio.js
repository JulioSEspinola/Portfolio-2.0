import "../styles/Websio.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import websio from "../assets/websio_bckgrnd.png";

function Websio() {
  return (
    <div className="websio-container">
      <div className="container"></div>
      <h2>My Freelance Work</h2>
      <Card
        size="lg"
        sx={{
          maxWidth: 500,
          margin: 5,
          bgcolor: "#2C2C2C ",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 10px rgba(252, 227, 4, 0.447) ",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={websio}
            alt="Websio"
          />
          <CardContent>
            <Typography variant="h5" sx={{ color: "white" }}>
              In my free time. I run a freelance software development company that specializes in
              creating and maintaining websites using content management systems
              (CMS) for non-profits. I have expertise in developing and
              customizing themes and plugins to meet the specific needs of my
              clients, ensuring seamless functionality. Security is a top
              priority for me—I implement SSL certificates and firewalls to
              safeguard websites, and I handle ongoing maintenance tasks such as
              updates, backups, and bug fixes. My focus is on delivering
              tailored, high-quality solutions to help non-profits optimize
              their online presence through secure and efficient web
              development and Artificial Intelligence.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            onClick= {() => window.location.href = "https://juliosespinola.github.io/Websio/"}
            sx={{
              
              bgcolor: "#e9d35b", // Custom background color
              color: "black", // Text color
              "&:hover": {
                bgcolor: "rgba(252, 227, 4, 0.447)", // Darker shade for hover
              },
            }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Websio;