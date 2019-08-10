import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import ContactBox from "../components/ContactBox";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import RouteContainer from "../components/RouteContainer";

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
              <RouteContainer />
            </Router>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;