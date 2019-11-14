import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import axios from "axios";
import { Helmet } from "react-helmet";
import ResumeBox from "../components/resume/ResumeBox";
import ResumePlaceholder from "../components/resume/ResumePlaceholder";
import DataNotFound from "./DataNotFound";
import baseUrl from "../components/BaseUrl";

function Resume () {
  if (process.env.NODE_ENV === "production") {
    ReactGA.pageview("/resume");
  }
  const [isLoading, setLoading] = useState(true);
  const [resumeData, setResume] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      try {
        const url = baseUrl(window) + "detail/resume";
        const responseData = await axios(url, {
          cancelToken: source.token
        });
        if (!axios.isCancel(responseData)) {
          await setResume(responseData.data);
          await setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        if (error.message !== "Request Cancelled") {
          await setResume(false);
          await setLoading(false);
        }
      }
    }

    if (!resumeData) {
      fetchData();
    }
    return () => {
      source.cancel("Request Cancelled");
    };
  }, [resumeData]);

  let ReactHTML = resumeData ? <ResumeBox resumeData={resumeData} /> : <DataNotFound />;

  return (
    <React.Fragment>
      <Helmet>
        <title>RESUME - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="RESUME - Tayyab Aziz" />
        <meta property="twitter:title" content="RESUME - Tayyab Aziz" />
      </Helmet>
      {!isLoading ? ReactHTML : <ResumePlaceholder />}
    </React.Fragment>
  );
}

export default Resume;