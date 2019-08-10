import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";

function RouteContainer ({location}) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 10 }}
        classNames='fade'
      >
        <div>
          <Switch location={location}>
            <Route exact path="/" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(RouteContainer);