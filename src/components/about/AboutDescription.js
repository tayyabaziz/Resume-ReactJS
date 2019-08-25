import React from "react";
import reactHtmlParser from "react-html-parser";

function AboutDescription(data) {
  return (
    <React.Fragment>
      {reactHtmlParser(data.description)}
    </React.Fragment>
    );
  }
export default AboutDescription;