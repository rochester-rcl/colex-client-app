import React from "react";
import { Router, Route } from "react-router-dom";
import TranslationsApp from "./Translations";
import history from "../utils/history";

const Routes = () => (
  <Router history={history}>
    <div className="app-container">
      <Route exact path="/" component={TranslationsApp} />
    </div>
  </Router>
);

export default Routes;
