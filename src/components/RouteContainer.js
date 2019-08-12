import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import PortfolioItemDetail from "../views/PortfolioItemDetail";
import NoMatch from "../views/NoMatch";

function RouteContainer ({location}) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 10 }}
        classNames='fade'
      >
        <Switch location={location}>
          <Route exact path={"/"} component={About} />
          <Route exact path={"/resume/"} component={Resume} />
          <Route exact path={"/portfolio/"} component={Portfolio} />
          <Route exact path={"/portfolio/:projectName"} component={PortfolioItemDetail} />
          <Route component={NoMatch} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(RouteContainer);