import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import ContactBox from "../components/contactbox/ContactBox";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import RouteContainer from "../components/RouteContainer";

function Content() {
  return (
    <main className="main">
      <Router>
        <Helmet>
          <meta name="description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
          <meta name="og:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
          <meta name="twitter:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
        </Helmet>
        <div className="container gutter-top">
          <div className="row sticky-parent">
            {/*Sidebar*/}
            <aside className="col-12 col-md-12 col-xl-3">
              <ContactBox />
            </aside>
            {/*Content*/}
            <div className="col-12 col-md-12 col-xl-9">
              <div className="box pb-0">
                  <Menu />
                  <RouteContainer />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </main>
  );
}

export default Content;