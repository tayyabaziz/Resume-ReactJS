import React from "react";
import Placeholder from "../Placeholder";
function AboutPlaceholderUpper () {
  return (
    <div className="pb-2">
      <h1 className="title title--h1 title__separate">
        <Placeholder style={{ height: "36px" }} />
      </h1>
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
    </div>
  );
}

export default AboutPlaceholderUpper;