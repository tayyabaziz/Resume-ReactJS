import React, { useEffect, useState } from "react";
import axios from "axios";
import NoMatch from "./NoMatch";
import PortfolioItemPlaceholder from "./PortfolioItemPlaceholder";
import PortfolioItemDetailData from "./PortfolioItemDetailData";

function PortfolioItemDetail(data) {
  const [isLoading, setLoading] = useState(true);
  const [projectData, setProject] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const url = window.location.origin + "/api/project/" + data.match.params.projectName;
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
    if(!projectData) {
      fetchData();
    }
  }, [data.match.params.projectName, isLoading, projectData]);

  let ReactHTML = <NoMatch />;
  if (projectData) {
    ReactHTML = <PortfolioItemDetailData projectData={projectData} history={data.history}/>;
}

return (
    <React.Fragment>
    {!isLoading ? ReactHTML : <PortfolioItemPlaceholder history={data.history}/>}
    </React.Fragment>
  );
}
export default PortfolioItemDetail;