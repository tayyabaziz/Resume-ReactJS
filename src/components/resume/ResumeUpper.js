import React from "react";
import PageTitle from "../PageTitle";

function ResumeBoxUpper(data) {
  return (
    <div className="pb-2" id="hash">
      <PageTitle title={data.title} />
    </div>
  );
}
export default ResumeBoxUpper;