import React from "react";
import Preloader from "./components/Preloader";
import BacktoTop from "./components/BacktoTop";
import SVG from "./components/SVG";
import MainContent from "./components/MainContent";

function App() {
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