import React from "react";
import Preloader from "./components/Preloader";
import BacktoTop from "./components/BacktoTop";
import SVG from "./components/SVG";
import Content from "./views/Content";

function App() {
  return (
    <React.Fragment>
      <Preloader />
      <Content />
      <BacktoTop />
      <SVG />
    </React.Fragment>
  );
}
export default App;