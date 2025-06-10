import React from "react";
import "../styles/page.css";
import "../styles/pages/about.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="page-title">Om oss</h1>
      <div className="page-content">
        <p>Den här sidan innehåller information om applikationen och dess syfte. Här kan du läsa mer om projektet och dess utvecklare.</p>
      </div>
    </div>
  );
}

export default About;