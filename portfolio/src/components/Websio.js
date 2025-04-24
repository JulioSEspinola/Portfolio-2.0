import "../styles/Websio.css";
import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
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
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <h2>My Freelance Work</h2>
          <Card
            size="lg"
            sx={{
              // maxWidth: 1000,
              margin: "auto",
              bgcolor: "black ",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.01)",
                boxShadow: "rgba(145, 13, 248, 0.6) 0px 0px 5px ",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  height: { xs: "200px", sm: "300px", md: "400px" }, // Responsive height
                  objectFit: "cover",
                }}
                image={websio}
                alt="Websio"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "'Pixelify Sans', serif" }}
                >
                  In my spare time, I run a freelance software development
                  business dedicated to creating and maintaining websites for
                  non-profits using content management systems (CMS) and AI. My
                  expertise lies in developing and customizing themes and
                  plugins to address each client's unique needs, ensuring
                  seamless functionality and user experience. I prioritize
                  security by implementing SSL certificates, firewalls, and
                  other measures to protect websites. Additionally, I manage
                  ongoing maintenance tasks such as updates, backups, and bug
                  fixes. My mission is to deliver tailored, high-quality web
                  development solutions that empower non-profits to enhance
                  their online presence securely and effectively.
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
                  bgcolor: "#9d00ff", // Custom background color
                  fontFamily: "'Pixelify Sans', serif",
                  color: "white", // Text color
                  "&:hover": {
                    bgcolor: "white", // Darker shade for hover
                    color: "black", // Text color for hover
                  },
                }}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Websio;
