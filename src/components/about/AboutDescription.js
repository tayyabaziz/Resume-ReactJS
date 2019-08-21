import React from "react";
import ReactHtmlParser from "react-html-parser";

function AboutDescription(data) {
  return (
    <React.Fragment>
      {ReactHtmlParser(data.description)}
    </React.Fragment>
  );
}
export default AboutDescription;