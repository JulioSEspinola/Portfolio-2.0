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
          maxWidth: 1000,
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
              In my spare time, I run a freelance software development business
              dedicated to creating and maintaining websites for non-profits
              using content management systems (CMS) and AI. My expertise lies in
              developing and customizing themes and plugins to address each
              client's unique needs, ensuring seamless functionality and user
              experience. I prioritize security by implementing SSL
              certificates, firewalls, and other measures to protect websites.
              Additionally, I manage ongoing maintenance tasks such as updates,
              backups, and bug fixes. My mission is to deliver tailored,
              high-quality web development solutions that empower non-profits to
              enhance their online presence securely and effectively.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            onClick={() =>
              (window.location.href =
                "https://juliosespinola.github.io/Websio/")
            }
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
