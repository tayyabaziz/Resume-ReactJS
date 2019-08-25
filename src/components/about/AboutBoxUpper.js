import React from "react";
import PageTitle from "../PageTitle";
import AboutDescription from "./AboutDescription";

function AboutBoxUpper(data) {
  return (
    <React.Fragment>
      {/*About*/}
      <div className="pb-2">
        <PageTitle title={data.title}/>
        <AboutDescription description={data.description} />
      </div>
    </React.Fragment>
  );
}
export default AboutBoxUpper;