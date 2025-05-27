import "../styles/Websio.css";
import React from "react";
import WebsioVideo from "../assets/websio_vid.mp4";

function Websio() {
  return (
    <div className="websio-container">
      <div className="container">
        <div>
          <h1>
            In my spare time, I run a freelance software development business
            dedicated to creating and maintaining websites for non-profits using
            content management systems (CMS) and AI. My expertise lies in
            developing and customizing themes and plugins to address each
            client's unique needs, ensuring seamless functionality and user
            experience. I prioritize security by implementing SSL certificates,
            firewalls, and other measures to protect websites. Additionally, I
            manage ongoing maintenance tasks such as updates, backups, and bug
            fixes. My mission is to deliver tailored, high-quality web
            development solutions that empower non-profits to enhance their
            online presence securely and effectively.
          </h1>
        </div>
        <div>
          <video autoPlay muted loop playsInline className="websio-video">
            <source src={WebsioVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a
            href="https://www.websiodigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button websio-link"
            style={{ display: "block", marginTop: "20px", textAlign: "center" }}
          >
            View Websio  
          </a>
        </div>
      </div>
    </div>
  );
}
export default Websio;
