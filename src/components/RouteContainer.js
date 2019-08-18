import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import PortfolioItemDetail from "../views/PortfolioItemDetail";
import NoMatch from "../views/NoMatch";

function RouteContainer({ location }) {
  return (
    <Switch location={location}>
      <Route exact path={"/"} component={About} />
      <Route exact path={"/resume/"} component={Resume} />
      <Route exact path={"/portfolio/"} component={Portfolio} />
      <Route exact path={"/portfolio/:projectName"} component={PortfolioItemDetail} />
      <Route path="*" component={NoMatch} status={404} />
    </Switch>
  );
}

export default withRouter(RouteContainer);