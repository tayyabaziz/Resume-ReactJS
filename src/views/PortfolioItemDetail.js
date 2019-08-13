import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import mediumZoom from "medium-zoom";
import axios from "axios";
import iconBack from "../assets/icons/icon-back.svg";
import NoMatch from "./NoMatch";

function PortfolioItemDetail(data) {
  const [projectData, setProject] = useState({});
  const [zoomEnabled, setZoomEnabled] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const url = window.location.origin + "/api/project/" + data.match.params.projectName;
        const responseData = await axios(url);
        setProject(responseData.data)
      } catch (error) {
        console.log(error);
        setProject(false);
      }
    }
    fetchData();


  }, [data.match.params.projectName]);

  function onLoadEvent() {
    if (!zoomEnabled) {
      mediumZoom('[data-zoom]', {
        margin: 30
      });
      setZoomEnabled(true);
    }
  }


  let ReactHTML = <NoMatch/>
  if (projectData) {
    ReactHTML = <React.Fragment>
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
        <h1 className="title title--h1 ">{projectData.title}
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
          {projectData.images && projectData.images.map(element => {
            return (<div className="col-12 col-sm-6 col-md-4 py-2" key={element} > <img className="rounded-lg img-fluid shadow" data-zoom src={element} alt={projectData.projectName} /></div>);
          })}
        </div>
      </div>
    </React.Fragment>
  }
  return (
    <React.Suspense fallback={<div className="m-auto text-center" id="hash">
      <h1 className="title title--h1 m-auto">Loading...</h1>
    </div>}>
      {ReactHTML}
    </React.Suspense>
  );
}

export default PortfolioItemDetail;