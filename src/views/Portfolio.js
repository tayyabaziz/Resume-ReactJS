import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import PortfolioGrid from "../components/PortfolioGrid";
import PortfolioPlaceholder from "../components/PortfolioPlaceholder";

function Portfolio() {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const url = window.location.origin + "/api/project/";
        const responseData = await axios(url);
        setProject(responseData.data);
        setTimeout(() => {
          if (isLoading) {
            setLoading(false);
          }
        }, 1000);
      } catch (error) {
        console.log(error.message);
        setProject(false);
        setTimeout(() => {
          if (isLoading) {
            setLoading(false);
          }
        }, 1000);
      }
    }
    if (!projectData) {
      fetchData();
    }
  });

  let ReactHTML = <React.Fragment>
    <div className="text-center py-5">
      <h1 className="title title--h1">Data Not Found</h1>
    </div>
  </React.Fragment>;
  if (projectData) {
    ReactHTML = <React.Fragment>
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
        <PortfolioGrid projectData={projectData} />
      </div>
    </React.Fragment>;
  }

  return (
    <React.Fragment>
      {!isLoading ? ReactHTML : <PortfolioPlaceholder />}
    </React.Fragment>
  );
}
export default Portfolio;