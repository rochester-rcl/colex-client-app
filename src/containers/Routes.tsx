import React from "react";
import { Router, Route } from "react-router-dom";
import Landing from "./Landing";
import history from "../utils/history";
import Navigation, { MenuLink } from "../components/Navigation";
import Footer, { FooterLink } from "../components/Footer";
import { Image, Icon } from "semantic-ui-react";
import urLogo from "../images/ur-logo.png";
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
];

const footerLinks: FooterLink[] = [
  { 
    icon: <Image size="medium" src={urLogo} />,
    path: 'https://rochester.edu'
  }
];
const Routes = () => (
  <Router history={history}>
    <div className="app-container">
      <Navigation title="CLP" links={links} />
      <Route exact path="/" component={Landing} />
      
    </div>
  </Router>
);

export default Routes;
