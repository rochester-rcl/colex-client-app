import React from "react";
import { Router, Route } from "react-router-dom";
import Landing from "./Landing";
import history from "../utils/history";
import Navigation, { MenuLink } from "../components/Navigation";
const links: MenuLink[] = [
  {
    name: 'about',
    url: '/about'
  },
  {
    name: 'contact',
    url: '/contact'
  },
  {
    name: 'languages',
    url: '/languages'
  },
  {
    name: 'participate',
    url: '/participate'
  }
]
const Routes = () => (
  <Router history={history}>
    <div className="app-container">
      <Navigation title="CLP" links={links} />
      <Route exact path="/" component={Landing} />
    </div>
  </Router>
);

export default Routes;
