import React from "react";
import reactHtmlParser from "react-html-parser";

function PortfolioItemDescription(data) {
  return (
    <React.Fragment >
      <label className="col-12">
        {data.title ? <strong>{data.title}: </strong> : ""}
        {data.url ? <a target="_blank" rel="noopener noreferrer" href={data.url} aria-label={data.url}>{data.url}</a> : ""}
        {data.text ? data.text : ""}
      </label>
      {data.html ? <div className="col-12">
        {reactHtmlParser(data.html)}
      </div> : ""}
    </React.Fragment >
  );
}
export default PortfolioItemDescription;