import React from "react";
import ContentLoader from "react-content-loader";
import iconBack from "../assets/icons/icon-back.svg";

function PortfolioItemPlaceholder(data) {
  return (
    <React.Fragment>
      {/*PortfolioItemDetail*/}
      <div onClick={() => data.history.push("/portfolio/")} className="circle-back">
        <img src={iconBack} alt="" />
      </div>
      <div className="pb-2 text-center" id="hash">
        <h1 className="title title--h1 ">
          <ContentLoader style={{ height: "44px", width: "50%" }}>
            {/* Pure SVG */}
            <rect x="0" y="0" rx="1" ry="1" width="100%" height="250" />
          </ContentLoader>
        </h1>
      </div>
      <div className="pb-5">
        <div className="row">
          <div className="col-12">
            <ContentLoader style={{ height: "132px", width: "100%" }} viewBox="0 0 400 62">
              {/* Pure SVG */}
              <rect x="0" y="0" rx="1" ry="1" width="150" height="10px" />
              <rect x="0" y="15" rx="1" ry="1" width="70" height="10px" />
              <rect x="0" y="30" rx="1" ry="1" width="125" height="10px" />
              <rect x="0" y="45" rx="1" ry="1" width="250" height="10px" />
            </ContentLoader>
          </div>
          <div className="col-12">
            <ContentLoader style={{ height: "110px", width: "100%" }} viewBox="0 0 400 62">
              {/* Pure SVG */}
              <rect x="0" y="0" rx="1" ry="1" width="100%" height="10px" />
              <rect x="0" y="15" rx="1" ry="1" width="100%" height="10px" />
              <rect x="0" y="30" rx="1" ry="1" width="100%" height="10px" />
              <rect x="0" y="45" rx="1" ry="1" width="100%" height="10px" />
            </ContentLoader>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 py-2">
            <ContentLoader style={{ width: "100%", height: "400px" }} viewBox="0 0 400 62">
              {/* Pure SVG */}
              <rect x="0" y="0" rx="1" ry="1" width="100%" height="100px" />
            </ContentLoader>
          </div>
          <div className="col-12 col-sm-6 col-md-4 py-2">
            <ContentLoader style={{ width: "100%", height: "400px" }} viewBox="0 0 400 62">
              {/* Pure SVG */}
              <rect x="0" y="0" rx="1" ry="1" width="100%" height="100px" />
            </ContentLoader>
          </div>
          <div className="col-12 col-sm-6 col-md-4 py-2">
            <ContentLoader style={{ width: "100%", height: "400px" }} viewBox="0 0 400 62">
              {/* Pure SVG */}
              <rect x="0" y="0" rx="1" ry="1" width="100%" height="400px" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioItemPlaceholder;