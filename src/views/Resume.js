import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ResumeBox from "../components/resume/ResumeBox";
import ResumePlaceholder from "../components/resume/ResumePlaceholder";

function Resume() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let isSubscribed = true;
    setTimeout(() => {
      if (isSubscribed && isLoading) {
        setLoading(false);
      }
    }, 1000);
    return () => isSubscribed = false;
  }, [isLoading]);

  return (
    <React.Fragment>
      <Helmet>
        <title>RESUME - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="RESUME - Tayyab Aziz" />
        <meta property="twitter:title" content="RESUME - Tayyab Aziz" />
      </Helmet>

      {!isLoading ? <ResumeBox/> : <ResumePlaceholder />}
    </React.Fragment>
  );
}

export default Resume;