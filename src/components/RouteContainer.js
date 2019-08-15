import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../views/About";
import Resume from "../views/Resume";
import Portfolio from "../views/Portfolio";
import PortfolioItemDetail from "../views/PortfolioItemDetail";
import NoMatch from "../views/NoMatch";

function RouteContainer () {
  return (
    <Switch>
      <Route exact path={"/"} component={About} />
      <Route exact path={"/resume/"} component={Resume} />
      <Route exact path={"/portfolio/"} component={Portfolio} />
      <Route exact path={"/portfolio/:projectName"} component={PortfolioItemDetail} />
      <Route path="*" component={NoMatch} status={404} />
    </Switch>
  );
}

export default RouteContainer;