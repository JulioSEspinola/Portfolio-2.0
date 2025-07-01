import React from "react";
import "../../src/styles/Home.css";
import Websio from "../components/Websio";
import Contact from "../components/Contact";

const frontEndTech = [
  { name: "HTML", img: require("../assets/FrontendTechs/HTML5.png") },
  { name: "CSS", img: require("../assets/FrontendTechs/CSS3.png") },
  { name: "Boostrap", img: require("../assets/FrontendTechs/Bootstrap.png") },
  { name: "Angular", img: require("../assets/FrontendTechs/Angular.png") },
  { name: "React", img: require("../assets/FrontendTechs/React.png") },
  {
    name: "TypeScript",
    img: require("../assets/FrontendTechs/TypeScript.png"),
  },
];
const backendTech = [
  { name: "Java", img: require("../assets/BackendTechs/Java.png") },
  { name: "Python", img: require("../assets/BackendTechs/Python.png") },
  { name: "Spring Boot", img: require("../assets/BackendTechs/Spring.png") },
  { name: "Node.js", img: require("../assets/BackendTechs/Node.js.png") },
  { name: "MySQL", img: require("../assets/BackendTechs/MySQL.png") },
  {
    name: "PostgreSQL",
    img: require("../assets/BackendTechs/PostgresSQL.png"),
  },
];
const tools = [
  { name: "Git", img: require("../assets/Tools/Git.png") },
  { name: "Azure DevOps", img: require("../assets/Tools/Azure Devops.png") },
  { name: "DBeaver", img: require("../assets/Tools/DBeaver.png") },
  { name: "Heroku", img: require("../assets/Tools/Heroku.png") },
  { name: "VS Code", img: require("../assets/Tools/VScode.png") },
  { name: "IntelliJ", img: require("../assets/Tools/IntelliJ.png") },
  { name: "GitHub", img: require("../assets/Tools/GitHub.png") },
];
const infrastructureTech = [
  { name: "AWS", img: require("../assets/Infra/AWS.png") },
  { name: "Docker", img: require("../assets/Infra/Docker.png") },
  { name: "Terraform", img: require("../assets/Infra/Terraform.png") },
];

export default function About() {
  return (
    <>
      <div className="skills">
        <h1 className="skills-h">/Skills</h1>
        <div className="container">
          <div className="technologies">
            <h5> /Front End</h5>
            <span className="tech-icons">
              {frontEndTech.map((tech) => (
                <span className="tech-icon-wrapper" key={tech.name}>
                  <img
                    src={tech.img}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon-img"
                  />
                  <span className="tech-tooltip">{tech.name}</span>
                </span>
              ))}
            </span>
          </div>

          <div className="technologies">
            <h5> Back End</h5>
            <span className="tech-icons">
              {backendTech.map((tech) => (
                <span className="tech-icon-wrapper" key={tech.name}>
                  <img
                    src={tech.img}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon-img"
                  />
                  <span className="tech-tooltip">{tech.name}</span>
                </span>
              ))}
            </span>
          </div>

          <div className="technologies">
            <h5> Tools</h5>
            <span className="tech-icons">
              {tools.map((tech) => (
                <span className="tech-icon-wrapper" key={tech.name}>
                  <img
                    src={tech.img}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon-img"
                  />
                  <span className="tech-tooltip">{tech.name}</span>
                </span>
              ))}
            </span>
          </div>

          <div className="technologies">
            <h5> Infrastructure</h5>
            <span className="tech-icons">
              {infrastructureTech.map((tech) => (
                <span className="tech-icon-wrapper" key={tech.name}>
                  <img
                    src={tech.img}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon-img"
                  />
                  <span className="tech-tooltip">{tech.name}</span>
                </span>
              ))}
            </span>
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
