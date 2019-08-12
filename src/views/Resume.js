import React from "react";
import { Helmet } from "react-helmet";
import ExpEduAll from "../components/ExpEduAll";
import Skills from "../components/Skills";

function Resume() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Resume - Tayyab Aziz</title>
        <meta property="og:title" content="Resume - Tayyab Aziz" />
        <meta property="twitter:title" content="Resume - Tayyab Aziz" />
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