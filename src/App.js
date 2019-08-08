import React from 'react';
import Preloader from './components/Preloader';
import BacktoTop from './components/BacktoTop';
import SVG from './components/SVG';
import Content from './views/Content';
import cookie from 'react-cookies';

function App() {
  cookie.save('dark', false);
  return (
    <React.Fragment>
      <Preloader />
      <main className="main">
        <Content />
      </main>
      <BacktoTop />
      <SVG />
    </React.Fragment>
  );
}

export default App;
