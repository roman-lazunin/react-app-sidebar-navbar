import React from "react";
import "../styles/page.css";
import "../styles/pages/home.css";

function Home() {
  return (
    <div className="home-page">
      <h1 className="page-title">Hem</h1>
      <div className="page-content">
        <p>Välkommen till hemsidan! Här hittar du en översikt över applikationen och kan navigera till andra sidor via menyn.</p>
      </div>
    </div>
  );
}

export default Home;