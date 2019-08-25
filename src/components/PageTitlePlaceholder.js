import React from "react";
import Placeholder from "./Placeholder";

function PageTitlePlaceholder(data) {
  return (
    <h1 className="title title--h1 title__separate">
      <Placeholder style={{ height: "30px" }} />
      {data.category ? <span className="title title--h5">
        <Placeholder style={{ marginLeft: "10px", height: "18px" }} />
      </span> : ""}
    </h1>
  );
}
export default PageTitlePlaceholder;