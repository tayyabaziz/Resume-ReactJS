import React from "react";
import Cases from "./Cases";
import AboutBoxUpper from "./AboutBoxUpper";

function AboutBox() {
  return (
    <React.Fragment>
      <AboutBoxUpper/>
      <Cases />
    </React.Fragment>
  );
}
export default AboutBox;