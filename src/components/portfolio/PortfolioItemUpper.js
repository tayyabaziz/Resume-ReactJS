import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../PageTitle";
import PortfolioItemBackBtn from "./PortfolioItemBackBtn";

function PortfolioItemUpper(data) {
  const { title, category, metaDesc } = data;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={title + " - Tayyab Aziz"} />
        <meta property="twitter:title" content={title + " - Tayyab Aziz"} />
        <meta name="description" content={metaDesc} />
        <meta name="og:description" content={metaDesc} />
        <meta name="twitter:description" content={metaDesc} />
      </Helmet>
      {/*PortfolioItemDetail*/}
      <PortfolioItemBackBtn history={data.history} />
      <div className="pb-2 text-center">
        <PageTitle title={title} category={category}/>
      </div>
    </React.Fragment>
  );
}
export default PortfolioItemUpper;