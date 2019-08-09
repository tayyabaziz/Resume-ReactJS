import React from "react";
import ContactBox from "../components/ContactBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

function Content () {
  return (
    <div className="container gutter-top">
      <div className="row sticky-parent">
        {/*Sidebar*/}
        <aside className="col-12 col-md-12 col-xl-3">
          <ContactBox />
        </aside>
        {/*Content*/}
        <div className="col-12 col-md-12 col-xl-9">
          <div className="box pb-0">
            <Router>
              <Menu />
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
              </Switch>
            </Router>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;