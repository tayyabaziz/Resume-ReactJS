import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import PortfolioPlaceholder from "../components/portfolio/PortfolioPlaceholder";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import DataNotFound from "./DataNotFound";
import PageTitle from "../components/PageTitle";
import baseUrl from "../components/BaseUrl";

function Portfolio(data) {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      try {
        const url = baseUrl(window) + "project/";
        const responseData = await axios(url, {
          cancelToken: source.token
        });
        if (!axios.isCancel(responseData)) {
          await setProject(responseData.data);
          await setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        if (error.message !== "Request Cancelled") {
          await setProject(false);
          await setLoading(false);
        }
      }
    }

    if (!projectData) {
      fetchData();
    }
    return () => {
      source.cancel("Request Cancelled");
    };
  }, [projectData]);

  let ReactHTML = projectData ?
    <React.Fragment>
      <PageTitle title="Portfolio" />
      <PortfolioGrid projectData={projectData} />
    </React.Fragment> : <DataNotFound />;

  return (
    <React.Fragment>
      <Helmet>
        <title>PORTFOLIO - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="PORTFOLIO - Tayyab Aziz" />
        <meta property="twitter:title" content="PORTFOLIO - Tayyab Aziz" />
      </Helmet>
      {/*Portfolio*/}
      {!isLoading ? ReactHTML : <PortfolioPlaceholder />}
    </React.Fragment>
  );
}
export default Portfolio;