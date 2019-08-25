import React from "react";
import Placeholder from "../Placeholder";

function AboutDescriptionPlaceholder(data) {
  return (
    <React.Fragment>
      <p>
        <Placeholder style={{ width: "100%", height: "15px" }} />
        <Placeholder style={{ width: "100%", height: "15px" }} />
        <Placeholder style={{ width: "100%", height: "15px" }} />
        <Placeholder style={{ width: "50%", height: "15px" }} />
      </p>
      <p>
        <Placeholder style={{ width: "100%", height: "15px" }} />
        <Placeholder style={{ width: "100%", height: "15px" }} />
        <Placeholder style={{ width: "45%", height: "15px" }} />
      </p>
    </React.Fragment>
    );
  }
export default AboutDescriptionPlaceholder;