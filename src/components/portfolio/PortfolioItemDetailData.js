import React from "react";
import PortfolioItemUpper from "./PortfolioItemUpper";
import PortfolioItemLower from "./PortfolioItemLower";
import PortfolioItemDescriptions from "./PortfolioItemDescriptions";

function PortfolioItemDetailData(data) {
  const { title, metaDesc, category, projectUnder, client, url, roles, description, images} = data.projectData;

  return (
    <React.Fragment>
      <PortfolioItemUpper title={title} metaDesc={metaDesc} category={category} history={data.history}/>
      <PortfolioItemDescriptions projectUnder={projectUnder} client={client} url={url} roles={roles} description={description} />
      <PortfolioItemLower title={title} images={images} />
    </React.Fragment>
  );
}
export default PortfolioItemDetailData;