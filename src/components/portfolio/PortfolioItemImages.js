import React, { useState } from "react";
import mediumZoom from "medium-zoom";

function PortfolioItemImages(data) {
  const [zoomEnabled, setZoomEnabled] = useState(false);
  function onLoadEvent() {
    if (!zoomEnabled) {
      mediumZoom("[data-zoom]", {
        margin: 30
      });
      setZoomEnabled(true);
    }
  }

  return (
    <div onLoad={onLoadEvent} className="row">
      {data.projectImages && data.projectImages.map((element) => {
        return (<div className="col-12 col-md-6 col-lg-4 py-2" key={element} > <img className="portfolio-item-image img-fluid shadow" data-zoom src={element} alt={data.projectName} /></div>);
      })}
    </div>
  );
}

export default PortfolioItemImages;