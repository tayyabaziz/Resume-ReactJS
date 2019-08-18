import React from "react";
import ResumeUpper from "./ResumeUpper";
import ExpEduAll from "./ExpEduAll";
import Skills from "./Skills";

function ResumeBox() {
  return (
    <React.Fragment>
      <ResumeUpper />
      <ExpEduAll />
      <Skills />
    </React.Fragment>
  );
}
export default ResumeBox;