import React from "react";
import ExpEduAll from "../components/ExpEduAll";
import Skills from "../components/Skills";

function Resume() {
  return (
    <React.Fragment>
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