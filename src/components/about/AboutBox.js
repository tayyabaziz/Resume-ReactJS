import React from "react";
import Cases from "./Cases";
import AboutBoxUpper from "./AboutBoxUpper";

function AboutBox(data) {
  return (
    <React.Fragment>
      <AboutBoxUpper title={data.aboutData.title} description={data.aboutData.description}/>
      <Cases cases={data.aboutData.cases} />
    </React.Fragment>
  );
}
export default AboutBox;