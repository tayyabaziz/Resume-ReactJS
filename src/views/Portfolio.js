import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import PortfolioPlaceholder from "../components/portfolio/PortfolioPlaceholder";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

function Portfolio(data) {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  const [fetchCallStarted, setFetchCallStarted] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setFetchCallStarted(true);
      try {
        const url = window.location.origin + "/api/project/";
        const responseData = await axios(url);
        setProject(await responseData.data);
      } catch (error) {
        console.log(error.message);
        setProject(false);
      }
    }

    if (!projectData && !fetchCallStarted) {
      fetchData();
      setTimeout(() => {
        if (isLoading) {
          setLoading(false);
        }
      }, 1000);
    }
  }, [data, fetchCallStarted, isLoading, projectData]);

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
      !isLoading ? ReactHTML : <PortfolioPlaceholder />
  );
}
export default Portfolio;