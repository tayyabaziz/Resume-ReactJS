import React from "react";
import PortfolioItemDescription from "./PortfolioItemDescription";

function PortfolioItemDescriptions(data) {
  return (
    <div className="row">
      {data.projectData.projectUnder && <PortfolioItemDescription title="Project Under" text={data.projectData.projectUnder} />}
      {data.projectData.client && <PortfolioItemDescription title="Client" text={data.projectData.client} />}
      {data.projectData.url && <PortfolioItemDescription title="Url" url={data.projectData.url} />}
      {data.projectData.roles && <PortfolioItemDescription title="Roles" text={data.projectData.roles} />}
      {data.projectData.description && <PortfolioItemDescription html={data.projectData.description} />}
    </div>
  );
}
export default PortfolioItemDescriptions;