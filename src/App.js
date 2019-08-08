import React from 'react';
import logo_file from './file/favicon.png';
import Preloader from './components/Preloader';
import BacktoTop from './components/BacktoTop';
import SVG from './components/SVG';
import About from './views/About';

import './assets/styles/style.css';
import './assets/demo/style-demo.css';

import 'jquery';
import 'bootstrap';
import 'popper.js';
import './assets/js/common.js';

function App() {
  return (
    <React.Fragment>
      <Preloader />
      <About />
      <BacktoTop />
      <SVG />
    </React.Fragment>
  );
}

export default App;
