import React from "react";
import PageTitle from "../PageTitle";
import AboutDescription from "./AboutDescription";

function AboutBoxUpper() {
  return (
    <React.Fragment>
      {/*About*/}
      <div className="pb-2" id="hash">
        <PageTitle title="About Me"/>
        <AboutDescription />
      </div>
    </React.Fragment>
  );
}
export default AboutBoxUpper;