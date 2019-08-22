import React from "react";
import PortfolioItemUpper from "./PortfolioItemUpper";
import PortfolioItemLower from "./PortfolioItemLower";

function PortfolioItemDetailData(data) {
  const projectData = data.projectData;

  return (
    <React.Fragment>
      <PortfolioItemUpper projectData={projectData} history={data.history} />
      <PortfolioItemLower projectData={projectData} />
    </React.Fragment>
  );
}
export default PortfolioItemDetailData;