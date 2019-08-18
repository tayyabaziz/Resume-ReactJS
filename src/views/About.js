import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AboutBox from "../components/about/AboutBox";
import AboutPlaceholder from "../components/about/AboutPlaceholder";

function About() {
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
        <title>Tayyab Aziz - A Full Stack Web Developer and Gamer</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Tayyab Aziz - A Full Stack Web Developer and Gamer" />
        <meta property="twitter:title" content="Tayyab Aziz - A Full Stack Web Developer and Gamer" />
      </Helmet>

      {!isLoading ? <AboutBox/> : <AboutPlaceholder/>}
    </React.Fragment>
  );
}

export default About;