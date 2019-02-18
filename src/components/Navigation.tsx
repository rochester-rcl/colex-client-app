import React, { Component, SFC } from 'react';
import { Header, Menu, Icon } from 'semantic-ui-react';

interface NavProps {
    title: string,
    links: MenuLink[]
}

export interface MenuLink {
    name: string
    url: string
}

const Navigation: SFC<NavProps> = (props) => (
    <div className="colex-app-nav-container">
        <Menu className="colex-app-nav-menu" text>
            <Menu.Item position="left" header className="colex-app-nav-header">{props.title}(Logo?)</Menu.Item>
            {props.links.map((link, index) => 
                <Menu.Item
                    key={index}
                    name={link.name}
                >
                </Menu.Item>
            )}
        </Menu>
    </div>
    
);

export default Navigation;