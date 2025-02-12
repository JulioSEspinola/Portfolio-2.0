import React from "react";
import Button from "@mui/material/Button";
import resume from "../assets/cv_Julio_Espinola.pdf";
import "../styles/Home.css";

function ResumeButton() {
  const handleDownload = () => {
    // Path to your resume file in the public folder
    const resumeUrl = resume;

    // Create a link element, set the download attribute, and trigger a click
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Resume_Julio_Espinola.pdf"); // You can customize the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="resume-button"
      style={{ backgroundColor: "#6e00b3", color: "white" }}
      variant="contained"
      color="primary"
      onClick={handleDownload}
    >
      View Resume
    </Button>
  );
}

export default ResumeButton;
