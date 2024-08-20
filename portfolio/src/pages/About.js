import React from "react";
import '../../src/styles/Home.css';

export default function About() {
  return (
    <>
      <div className="skills">
        <h1>About me</h1>
        <p className="about-me">
          My name is Julio Espinola and I am a Software Engineer based from Washington state. I am very passionate about learning and problem solving. I currently have about 2 years of pressional working experience counting internships and non-internship experience.
          I am also the founder of Websio, a consulting company that provides web development services to small non-profit organizations in the Pierce and King County area.
        </p>
        <h1 className="skills-h">Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front End</h2>
            <span>HTML | CSS | BootStap | JavaScript | React.js | Angular.js |TypeScript</span>
          </li>
          <li className="item">
            <h2> Back End</h2>
            <span>Java | Python | Springboot | Node.js| MySQL</span>
          </li>
          <li className="item">
            <h2> Softwares & Tools</h2>
            <span>Git | GitHub | VS Code | IntelliJ | Heroku | CL | VM | Wireshark| Azure DevOps | Dbeaver | Github Copilot | Auth0</span>
          </li>
          <li className="item">
            <h2> Infrastructure</h2>
            <span>AWS EC2, S3| Terraform | Docker</span>
          </li>
        </ol>
      </div>
    </>
  );
}
