import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";
import PortfolioGrid from "../components/PortfolioGrid";

function PortfolioCategory(data) {
  useEffect(() => {
    mediumZoom('[data-zoom]', {
      margin: 30
    });
  }, [])
  return (
    <React.Fragment>
      {/*Portfolio*/}
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">Portfolio</h1>
      </div>
      <div className="pb-0">
        <PortfolioGrid filter={data.match.params.category}/>
      </div>
    </React.Fragment>
  );
}

export default PortfolioCategory;