import React from "react";
import PortfolioItemDescription from "./PortfolioItemDescription";

function PortfolioItemDescriptions(data) {
  const { projectUnder, client, url, roles, description } = data;
  return (
    <div className="row">
      {projectUnder ? <PortfolioItemDescription title="Project Under" text={projectUnder} /> : ""}
      {client ? <PortfolioItemDescription title="Client" text={client} /> : ""}
      {url ? <PortfolioItemDescription title="Url" url={url} /> : ""}
      {roles ? <PortfolioItemDescription title="Roles" text={roles} /> : ""}
      {description ? <PortfolioItemDescription html={description} /> : ""}
    </div>
  );
}
export default PortfolioItemDescriptions;