import React from "react";
import { Helmet } from "react-helmet";

function NoMatch() {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 - Tayyab Aziz</title>
        <meta property="og:title" content="404 - Tayyab Aziz" />
        <meta property="twitter:title" content="404 - Tayyab Aziz" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/*NoMatch*/}
      <div className="text-center py-5">
        <h1 className="title title--h1">404 Page Not Found</h1>
        </div>
    </React.Fragment>
  );
}

export default NoMatch;