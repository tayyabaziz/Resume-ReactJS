import React from "react";
import Placeholder from "../Placeholder";
function AboutPlaceholderLower () {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(<div className="col-12 col-sm-6 col-md-4" key={index}>
      <div className="case-item box box__second">
        <Placeholder className="case-item__icon" style={{ height: "40px", width: "40px" }}/>
        <div>
          <h3 className="title title--h5">
            <Placeholder style={{ width: "100%", height: "21px" }} />
          </h3>
          <p className="case-item__caption">
            <Placeholder style={{ width: "100%", height: "15px" }} />
            <Placeholder style={{ width: "100%", height: "15px" }} />
            <Placeholder style={{ width: "100%", height: "15px" }} />
            <Placeholder style={{ width: "60%", height: "15px" }} />
          </p>
        </div>
      </div>
    </div>);
  }

  return (
    <div className="box-inner pb-0">
      <h2 className="title title--h3">
        <Placeholder style={{ height: "30px", width: "200px" }} />
      </h2>
      <div className="row">
        {items}
      </div>
    </div>
  );
}

export default AboutPlaceholderLower;