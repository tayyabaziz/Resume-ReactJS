import React from "react";
import ResumeUpper from "./ResumeUpper";
import ExpEduAll from "./ExpEduAll";
import Skills from "./Skills";

function ResumeBox(data) {
  return (
    <React.Fragment>
      {/*Resume*/}
      <ResumeUpper title={data.resumeData.title} />
      <ExpEduAll educations={data.resumeData.educations} experiences={data.resumeData.experiences} achievements={data.resumeData.achievements} />
      <Skills skills={data.resumeData.skills} />
    </React.Fragment>
  );
}
export default ResumeBox;