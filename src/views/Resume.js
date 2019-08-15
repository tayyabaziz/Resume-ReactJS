import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ResumePlaceholder from "../components/ResumePlaceholder";
import ExpEduAll from "../components/ExpEduAll";
import Skills from "../components/Skills";

function Resume() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setLoading(false);
      }
    }, 1000);
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>RESUME - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="RESUME - Tayyab Aziz" />
        <meta property="twitter:title" content="RESUME - Tayyab Aziz" />
      </Helmet>
      {!isLoading ? <React.Fragment>
        {/*Resume*/}
        <div className="pb-2" id="hash">
          <h1 className="title title--h1 title__separate">Resume</h1>
        </div>
        <ExpEduAll />
        <Skills />
      </React.Fragment> : <ResumePlaceholder />}
    </React.Fragment>
  );
}

export default Resume;