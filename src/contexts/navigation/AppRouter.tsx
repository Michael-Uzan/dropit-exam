import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

import pathsApp from "./pathsApp";
import ProductPage from "./pages/ProductPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={pathsApp.product} component={ProductPage} />
      <Route path={pathsApp.catalog} component={CatalogPage} />
      <Route exact path={pathsApp.home} component={HomePage} />
    </Switch>
  </Router>
);

export default AppRouter;
