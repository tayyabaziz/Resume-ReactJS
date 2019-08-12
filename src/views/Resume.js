import React from "react";
import { Helmet } from "react-helmet";
import ExpEduAll from "../components/ExpEduAll";
import Skills from "../components/Skills";

function Resume() {
  return (
    <React.Fragment>
      <Helmet>
        <title>RESUME - Tayyab Aziz</title>
        <meta property="og:title" content="RESUME - Tayyab Aziz" />
        <meta property="twitter:title" content="RESUME - Tayyab Aziz" />
      </Helmet>
      {/*Resume*/}
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">Resume</h1>
      </div>
      <ExpEduAll />
      <Skills/>
    </React.Fragment>
  );
}

export default Resume;