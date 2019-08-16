import React, { useState } from "react";
import mediumZoom from "medium-zoom";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import iconBack from "../assets/icons/icon-back.svg";

function PortfolioItemDetailData(data) {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  function onLoadEvent() {
    if (!zoomEnabled) {
      mediumZoom("[data-zoom]", {
        margin: 30
      });
      setZoomEnabled(true);
    }
  }
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
      <div onClick={() => data.history.push("/portfolio/")} className="circle-back">
        <img src={iconBack} alt="" />
      </div>
      <div className="pb-2 text-center" id="hash">
        <h1 className="title title--h1 title__separate">{projectData.title}
          <span className="title title--h5"> ({projectData.category}) </span>
        </h1>
      </div>
      <div className="pb-5">
        <div className="row">
          {projectData.projectUnder && <label className="col-12"><strong>Project Under: </strong>{projectData.projectUnder}</label>}
          {projectData.client && <label className="col-12"><strong>Client: </strong>{projectData.client}</label>}
          {projectData.url && <label className="col-12"><strong>Url: </strong><a target="_blank" rel="noopener noreferrer" href={projectData.url}>{projectData.url}</a></label>}
          {projectData.roles && <label className="col-12"><strong>Roles: </strong>{projectData.roles}</label>}
          {projectData.description && <div className="col-12">
            {ReactHtmlParser(projectData.description)}
          </div>}
        </div>
        <div onLoad={onLoadEvent} className="row">
          {projectData.images && projectData.images.map((element) => {
            return (<div className="col-12 col-md-6 col-lg-4 py-2" key={element} > <img className="rounded-lg img-fluid shadow" data-zoom src={element} alt={projectData.projectName} /></div>);
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioItemDetailData;