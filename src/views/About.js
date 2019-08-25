import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import AboutBox from "../components/about/AboutBox";
import AboutPlaceholder from "../components/about/AboutPlaceholder";
import DataNotFound from "./DataNotFound";
import baseUrl from "../components/BaseUrl";

function About() {
  const [isLoading, setLoading] = useState(true);
  const [aboutData, setAbout] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      try {
        const url = baseUrl(window) + "detail/about";
        const responseData = await axios(url, {
          cancelToken: source.token
        });
        if (!axios.isCancel(responseData)) {
          await setAbout(responseData.data);
          await setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        if (error.message !== "Request Cancelled") {
          await setAbout(false);
          await setLoading(false);
        }
      }
    }

    if (!aboutData) {
      fetchData();
    }
    return () => {
      source.cancel("Request Cancelled");
    };
  }, [aboutData]);

  let ReactHTML = aboutData ? <AboutBox aboutData={aboutData} /> : <DataNotFound />;

  return (
    <React.Fragment>
      <Helmet>
        <title>Tayyab Aziz - A Full Stack Web Developer and Gamer</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Tayyab Aziz - A Full Stack Web Developer and Gamer" />
        <meta property="twitter:title" content="Tayyab Aziz - A Full Stack Web Developer and Gamer" />
      </Helmet>
      {!isLoading ? ReactHTML : <AboutPlaceholder />}
  </React.Fragment >
  );
}

export default About;