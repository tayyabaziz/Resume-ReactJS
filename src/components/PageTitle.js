import React from "react";

function PageTitle(data) {
  return (
    <h1 className="title title--h1 title__separate">
      {data.title}
      {data.category ? <span className="title title--h5"> ({data.category}) </span> : ""}
    </h1>
  );
}
export default PageTitle;