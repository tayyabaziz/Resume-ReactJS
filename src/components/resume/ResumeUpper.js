import React from "react";
import PageTitle from "../PageTitle";

function ResumeUpper(data) {
  return (
    <div className="pb-2">
      <PageTitle title={data.title} />
    </div>
  );
}
export default ResumeUpper;