import React from "react";
import Placeholder from "../Placeholder";

function ResumePlaceholderLower() {
  const items = [];
  for (let index = 0; index < 3; index++) {
    items.push(
      <div className="progress" key={index}>
        <Placeholder style={{ height: "24px", width: "100%", "borderRadius": "1rem" }} />
      </div>
    );
  }

  return (
    <div className="box-inner box-inner--rounded">
      <div className="row">
        <div className="col-12">
          <h2 className="title title--h3">
            <Placeholder style={{ height: "30px", width: "100px" }} />
          </h2>
        </div>
        <div className="col-12 col-lg-6">
          <div className="box box__second">
            {items}
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-2  mt-lg-0">
          <div className="box box__second">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePlaceholderLower;