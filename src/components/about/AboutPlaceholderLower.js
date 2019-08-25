import React from "react";
import CaseItemPlaceholder from "./CaseItemPlaceholder";
import CaseItemTitlePlaceholder from "./CaseItemTitlePlaceholder";
function AboutPlaceholderLower () {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(
      <CaseItemPlaceholder key={index}/>
    );
  }

  return (
    <div className="box-inner pb-0">
      <CaseItemTitlePlaceholder/>
      <div className="row">
        {items}
      </div>
    </div>
  );
}

export default AboutPlaceholderLower;