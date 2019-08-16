import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioItemPlaceholder from "../components/PortfolioItemPlaceholder";
import PortfolioItemDetailData from "../components/PortfolioItemDetailData";

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

  let ReactHTML = <React.Fragment>
      <div className="text-center py-5">
        <h1 className="title title--h1">Data Not Found</h1>
        </div>
  </React.Fragment>;
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