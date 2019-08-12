import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import mediumZoom from "medium-zoom";
import PortfolioGrid from "../components/PortfolioGrid";

function Portfolio() {
  useEffect(() => {
    mediumZoom('[data-zoom]', {
      margin: 30
    });
  }, [])
  return (
    <React.Fragment>
      <Helmet>
        <title>PORTFOLIO - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="PORTFOLIO - Tayyab Aziz" />
        <meta property="twitter:title" content="PORTFOLIO - Tayyab Aziz" />
      </Helmet>
      {/*Portfolio*/}
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">Portfolio</h1>
      </div>
      <div className="pb-0">
        <PortfolioGrid />
      </div>
    </React.Fragment>
  );
}

export default Portfolio;