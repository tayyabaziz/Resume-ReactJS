import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioItemPlaceholder from "../components/portfolio/PortfolioItemPlaceholder";
import PortfolioItemDetailData from "../components/portfolio/PortfolioItemDetailData";

function PortfolioItemDetail(data) {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  const [fetchCallStarted, setFetchCallStarted] = useState(false);
  useEffect(() => {
    async function fetchData(projectName) {
      setFetchCallStarted(true);
      try {
        const url = window.location.origin + "/api/project/" + projectName;
        const responseData = await axios(url);
        setProject(await responseData.data);
      } catch (error) {
        console.log(error.message);
        setProject(false);
      }
    }

    if (!projectData && !fetchCallStarted) {
      fetchData(data.match.params.projectName);
      setTimeout(() => {
        if (isLoading) {
          setLoading(false);
        }
      }, 1000);
    }
  }, [data.match.params.projectName, fetchCallStarted, isLoading, projectData]);

  let ReactHTML = <React.Fragment>
      <div className="text-center py-5">
        <h1 className="title title--h1">Data Not Found</h1>
      </div>
  </React.Fragment>;
  if (projectData) {
    ReactHTML = <PortfolioItemDetailData projectData={projectData} history={data.history}/>;
  }

  return (
    !isLoading ? ReactHTML : <PortfolioItemPlaceholder history={data.history}/>
  );
}
export default PortfolioItemDetail;