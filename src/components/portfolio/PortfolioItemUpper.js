import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../PageTitle";
import PortfolioItemBackBtn from "./PortfolioItemBackBtn";
import PortfolioItemDescriptions from "./PortfolioItemDescriptions";

function PortfolioItemUpper(data) {
  const projectData = data.projectData;

  return (
    <React.Fragment>
      <Helmet>
        <title>{projectData.title} - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={projectData.title + " - Tayyab Aziz"} />
        <meta property="twitter:title" content={projectData.title + " - Tayyab Aziz"} />
        <meta name="description" content={projectData.metaDesc} />
        <meta name="og:description" content={projectData.metaDesc} />
        <meta name="twitter:description" content={projectData.metaDesc} />
      </Helmet>
      {/*PortfolioItemDetail*/}
      <PortfolioItemBackBtn history={data.history} />
      <div className="pb-2 text-center">
        <PageTitle title={projectData.title} category={projectData.category}/>
      </div>
      <PortfolioItemDescriptions projectData={projectData} />
    </React.Fragment>
  );
}
export default PortfolioItemUpper;