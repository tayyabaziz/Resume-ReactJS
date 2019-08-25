import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import InnerContent from "./InnerContent";

function MainContent() {
  return (
    <Router>
      <Helmet>
        <meta name="description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
        <meta name="og:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
        <meta name="twitter:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
      </Helmet>
      <main className="main">
        <div className="container gutter-top">
          <div className="row sticky-parent">
            <Sidebar/>
            <InnerContent />
          </div>
        </div>
      </main>
    </Router>
  );
}

export default MainContent;