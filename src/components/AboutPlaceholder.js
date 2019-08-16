import React from "react";
import ContentLoader from "react-content-loader";
function AboutPlaceholder () {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(<div className="col-12 col-sm-6 col-md-4" >
      <div className="case-item box box__second">
        <ContentLoader style={{ height: "40px", width: "40px" }}>
          {/* Pure SVG */}
          <rect x="0" y="0" rx="1" ry="1" width="100%" height="100%" />
        </ContentLoader>
        <div>
          <ContentLoader style={{ width: "100%", height: "20px", marginTop: "-7px" }} >
            {/* Pure SVG */}
            <rect x="40" y="0" rx="1" ry="1" width="100%" height="100%" />
          </ContentLoader>
          <ContentLoader style={{ width: "100%", height: "90px" }} viewBox="0 0 400 90">
            {/* Pure SVG */}
            <rect x="40" y="10" rx="1" ry="1" width="100%" height="15px" />
            <rect x="40" y="30" rx="1" ry="1" width="100%" height="15px" />
            <rect x="40" y="50" rx="1" ry="1" width="100%" height="15px" />
            <rect x="40" y="70" rx="1" ry="1" width="50%" height="15px" />
          </ContentLoader>
        </div>
      </div>
    </div>);
  }

  return (
    <React.Fragment>
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">
          <ContentLoader style={{ height: "36px", width: "100%" }}>
            {/* Pure SVG */}
            <rect x="0" y="0" rx="1" ry="1" width="40%" height="100%" />
          </ContentLoader>
        </h1>
        <ContentLoader style={{ height: "110px", width: "100%" }} viewBox="0 0 400 62">
          {/* Pure SVG */}
          <rect x="0" y="0" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="15" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="30" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="45" rx="1" ry="1" width="50%" height="10px" />
        </ContentLoader>
        <ContentLoader style={{ height: "110px", width: "100%" }} viewBox="0 0 400 62">
          {/* Pure SVG */}
          <rect x="0" y="0" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="15" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="30" rx="1" ry="1" width="100%" height="10px" />
          <rect x="0" y="45" rx="1" ry="1" width="50%" height="10px" />
        </ContentLoader>
      </div>

      <div className="box-inner pb-0">
        <h2 className="title title--h3">
          <ContentLoader style={{ height: "30px", width: "200px" }}>
            {/* Pure SVG */}
            <rect x="0" y="0" rx="1" ry="1" width="100%" height="100%" />
          </ContentLoader>
        </h2>
        <div className="row">
          {items}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutPlaceholder;