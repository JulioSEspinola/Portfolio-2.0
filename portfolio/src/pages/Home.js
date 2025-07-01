import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import About from "../pages/About";
import ResumeButton from "../components/resumeButton";

function home() {
  return (
    <>
      <div className="home">
        <div className="about">
          <h2>
            hi, <span className="Julio">Julio</span> here!!
          </h2>
          <h3>I create stuff sometimes...</h3>
          <div className="prompt">
            <IconButton
              href="https://github.com/JulioSEspinola"
              target="_blank"
            >
              <GithubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/julio-steven-espinola-rodas/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto: espinolaj192@gmail.com" target="_blank">
              <EmailIcon />
            </IconButton>
            {/* <div><ResumeButton></ResumeButton></div> */}
          </div>
          <h1>/about me</h1>
          <p className="about-me">
            My name is Julio Espinola, and I’m a Software Engineer from
            Washington state. I have a passion for creating innovative solutions
            and a strong foundation in both front-end and back-end technologies.
            I enjoy working on projects that challenge me to think critically
            and creatively, and I'm always eager to learn new skills and improve
            my craft.
          </p>
        </div>
        <About />
      </div>
    </>
  );
}
export default home;
