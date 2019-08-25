import React from "react";
import Placeholder from "../Placeholder";
import PortfolioItemBackBtnPlaceholder from "./PortfolioItemBackBtnPlaceholder";
import PageTitlePlaceholder from "../PageTitlePlaceholder";

function PortfolioItemPlaceholder(data) {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(
      <div className="col-12 col-md-6 col-lg-4 py-2" key={index}>
        <Placeholder className="border shadow" style={{ width: "100%", height: "400px", borderRadius: "0.7rem" }}/>
      </div>
    );

  }
  return (
    <React.Fragment>
      {/*PortfolioItemDetail*/}
      <PortfolioItemBackBtnPlaceholder/>
      <div className="pb-2 text-center">
        <PageTitlePlaceholder category="placeholder"/>
      </div>
      <div className="pb-5">
        <div className="row">
          <label className="col-12">
            <Placeholder style={{ height: "25px", width: "100%", maxWidth: "316px" }} />
          </label>
          <label className="col-12">
            <Placeholder style={{ height: "25px", width: "100%", maxWidth: "146px" }} />
          </label>
          <label className="col-12">
            <Placeholder style={{ height: "25px", width: "100%", maxWidth: "260px" }} />
          </label>
          <label className="col-12">
            <Placeholder style={{ height: "25px", width: "100%", maxWidth: "400px" }} />
          </label>
          <div className="col-12">
            <Placeholder style={{ width: "100%", height: "20px" }} />
            <Placeholder style={{ width: "100%", height: "20px" }} />
            <Placeholder style={{ width: "100%", height: "20px" }} />
            <Placeholder style={{ width: "50%", height: "20px" }} />
          </div>
        </div>
        <div className="row">
          {items}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioItemPlaceholder;