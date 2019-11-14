import React from "react";
import ReactGA from "react-ga";
import Preloader from "./components/Preloader";
import BacktoTop from "./components/BacktoTop";
import SVG from "./components/SVG";
import MainContent from "./components/MainContent";

function App () {
  ReactGA.initialize("UA-112773110-1");
  return (
    <React.Fragment>
      <Preloader />
      <MainContent />
      <BacktoTop />
      <SVG />
    </React.Fragment>
  );
}
export default App;