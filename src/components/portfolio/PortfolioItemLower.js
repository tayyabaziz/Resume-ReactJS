import React from "react";
import PortfolioItemImages from "./PortfolioItemImages";

function PortfolioItemLower(data) {
  const projectData = data.projectData;

  return (
    <div className="pb-3">
      <PortfolioItemImages projectName={projectData.projectName} projectImages={projectData.images} />
    </div>
  );
}
export default PortfolioItemLower;