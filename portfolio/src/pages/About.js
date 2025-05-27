import React from "react";
import "../../src/styles/Home.css";
import Websio from "../components/Websio";
import Contact from "../components/Contact";

export default function About() {
  return (
    <>
      <div className="skills">
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
      </div>
      <div>
        <Websio></Websio>
      </div>
      <div className="contact-home">
        <Contact></Contact>
      </div>
    </>
  );
}
