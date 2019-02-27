import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Dictionary from "./DictionaryContainer";
import DictionaryBrowseContainer from "./DictionaryBrowseContainer";
import history from "../utils/history";
import { BASENAME } from "../constants/backend";
import Navigation, { MenuLink } from "../components/Navigation";
import Footer, { FooterLink } from "../components/Footer";
import { Image, Icon } from "semantic-ui-react";
import urLogo from "../images/ur-logo.png";
import NarrativeContainer from "./NarrativeContainer";
import NarrativeBrowseContainer from "./NarrativeBrowseContainer";
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
  <Router basename={BASENAME}>
    <div className="app-container">
      <Navigation title="CLP" links={links} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/dictionaries" component={DictionaryBrowseContainer} />
      <Route exact path="/dictionary/:language" component={Dictionary} />
      <Route exact path="/narratives" component={NarrativeBrowseContainer} />
      <Route exact path="/narrative/:language" component={NarrativeContainer} />
    </div>
  </Router>
);

export default Routes;
