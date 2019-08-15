import React from "react";
import ContentLoader from "react-content-loader";

function PortfolioPlaceholder() {
  const items = [];
  for (let index = 0; index < 9; index++) {
    items[index] = <div className="col-12 col-md-6 col-lg-4 py-2">
      <ContentLoader className="border shadow rounded-lg" style={{ width: "100%", height: "300px" }}>
        {/* Pure SVG */}
        <rect x="0" y="0" rx="1" ry="1" width="100%" height="300px" />
      </ContentLoader>
    </div>;
  }

  return (
    <React.Fragment>
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">
          <ContentLoader style={{ height: "40px", width: "300px" }}>
            {/* Pure SVG */}
            <rect x="0" y="0" rx="1" ry="1" width="100%" height="100%" />
          </ContentLoader>
        </h1>
      </div>
      <div className="pb-0">
        <ContentLoader style={{ height: "27px", width: "100%" }}>
          {/* Pure SVG */}
          <rect x="0" y="0" rx="1" ry="1" width="35px" height="100%" />
          <rect x="40" y="0" rx="1" ry="1" width="35px" height="100%" />
          <rect x="80" y="0" rx="1" ry="1" width="35px" height="100%" />
        </ContentLoader>
        <div className="row">
          {items}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioPlaceholder;