import React from "react";
import "../../src/styles/Home.css";
import Websio from "../components/Websio";

export default function About() {
  return (
    <>
      <div className="skills">
        <h1>About me</h1>
        <p className="about-me">
          My name is Julio Espinola, and I’m a Software Engineer based in
          Washington State. I’m deeply passionate about learning and
          problem-solving, with approximately 2 years of professional
          experience, including both internships and full-time roles. I’m also
          the founder of Websio, a consulting company dedicated to providing web
          development services to small non-profit organizations in the Pierce
          and King County areas.
        </p>
        <h1 className="skills-h">Skills</h1>
        <div className="container">
          <div className="technologies">
            <h5> Front End</h5>
            <span>
              HTML | CSS | BootStap | JavaScript | React.js | Angular.js
              |TypeScript
            </span>
          </div>

          <div className="technologies">
            <h5> Back End</h5>
            <span>Java | Python | Springboot | Node.js| MySQL</span>
          </div>

          <div className="technologies">
            <h5> Tools</h5>
            <span>
              Git | GitHub | VS Code | IntelliJ | Heroku | Azure DevOps |
              Dbeaver | Github Copilot | Auth0
            </span>
          </div>

          <div className="technologies">
            <h5> Infrastructure</h5>
            <span>AWS EC2, S3| Terraform | Docker</span>
          </div>
        </div>
        <div>
          <Websio></Websio>
        </div>
      </div>
    </>
  );
}
