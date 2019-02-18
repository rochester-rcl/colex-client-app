import React, { SFC } from "react";
import { Icon, Image } from "semantic-ui-react";

export interface FooterLink {
  // @ts-ignore: Cannot find name 'Image'
  icon: Image | Icon | HTMLElement;
  path: string;
}

interface FooterProps {
  links: FooterLink[];
}

const Footer: SFC<FooterProps> = props => (
  <footer className="colex-app-footer">
    <div className="colex-app-footer-menu">
      {props.links.map((link, index) => (
        <a className="colex-app-footer-link" href={link.path}>
          {link.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
