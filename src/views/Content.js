import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import RouteContainer from "../components/RouteContainer";

function Content() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Tayyab Aziz - A Full Stack Web Developer and Gamer</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
        <meta name="og:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
        <meta name="twitter:description" content="Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years. Also a Gamer who wants to learn games development for fun." />
      </Helmet>
      <Router>
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
    </React.Fragment>
  );
}

export default Content;