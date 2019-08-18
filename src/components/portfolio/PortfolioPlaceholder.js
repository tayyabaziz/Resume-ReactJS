import React from "react";
import Placeholder from "../Placeholder";

function PortfolioPlaceholder() {
  const items = [];
  for (let index = 0; index < 9; index++) {
    items.push(<div className="col-12 col-md-6 col-lg-4 py-2" key={index}>
      <Placeholder className="border shadow" style={{ width: "100%", height: "400px", borderRadius: "0.7rem"}}/>
    </div>);
  }

  return (
    <React.Fragment>
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">
          <Placeholder style={{ height: "40px", width: "100%" }} />
        </h1>
      </div>
      <div className="pb-2">
        <div className="row">
          <div className="col-md-6 d-sm-none d-none d-md-block">
            <div className="row">
              <Placeholder className="col-4" style={{ height: "25.6px" }} />
              <Placeholder className="col-4" style={{ height: "25.6px" }} />
              <Placeholder className="col-4" style={{ height: "25.6px" }} />
            </div>
          </div>
          <div className="col-12 d-sm-block d-block d-md-none">
            <Placeholder style={{ height: "25.6px", width: "100%", borderRadius: "10rem", marginBottom: "2rem" }} />
          </div>
        </div>

        <div className="row">
          {items}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioPlaceholder;