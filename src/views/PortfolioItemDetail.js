import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioItemPlaceholder from "../components/portfolio/PortfolioItemPlaceholder";
import PortfolioItemDetailData from "../components/portfolio/PortfolioItemDetailData";
import DataNotFound from "./DataNotFound";

function PortfolioItemDetail(data) {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  useEffect(() => {
    async function fetchData(projectName) {
      const source = axios.CancelToken.source();
      try {
        const url = window.location.origin + "/api/project/" + projectName;
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
      fetchData(data.match.params.projectName);
    }
  }, [data.match.params.projectName, projectData]);

  let ReactHTML = projectData ? <PortfolioItemDetailData projectData={projectData} history={data.history} /> : <DataNotFound />;

  return (
    !isLoading ? ReactHTML : <PortfolioItemPlaceholder history={data.history}/>
  );
}
export default PortfolioItemDetail;