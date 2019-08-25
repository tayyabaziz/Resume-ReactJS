import React from "react";
import PortfolioItemImages from "./PortfolioItemImages";

function PortfolioItemLower(data) {
  const { images, title } = data;

  return (
    <div className="pb-3">
      <PortfolioItemImages title={title} projectImages={images} />
    </div>
  );
}
export default PortfolioItemLower;