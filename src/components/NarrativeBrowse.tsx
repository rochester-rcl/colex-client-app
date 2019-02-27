import React, { Component } from "react";
import lodash from "lodash";
import { Header, List } from "semantic-ui-react";
import { IDictionaryBrowse } from "./DictionaryBrowse";
import {BASENAME} from "../constants/backend";

// TODO ALL BROWSE AND DICTIONARY STYLE COMPONTENTS NEED TO BE REWRITTEN AS GENERIC COMPONENTS!!!!

// TODO make this DRY
export interface INarrativeBrowse extends IDictionaryBrowse {
  
}

interface INarrativeBrowseProps {
  narratives: INarratives;
}

export interface INarratives {
  [key: string]: INarrativeBrowse;
}

export default class NarrativeBrowse extends Component<
  INarrativeBrowseProps
> {
  render() {
    const { narratives } = this.props;
    return (
      <div className="colex-app-dictionary-browse-container">
        <List link className="colex-app-dictionary-browse-list">
          {Object.keys(narratives).map((key: string) => (
            <List.Item
              active
              className="colex-app-dictionary-link colex-app-text"
            >
              <a className="colex-app-link" href={narratives[key].link}>
                {lodash.startCase(narratives[key].language)} (
                {narratives[key].count} Narratives)
              </a>
              <List.Description className="colex-app-dictionary-link-description">
                Last updated on {narratives[key].lastUpdated}
              </List.Description>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}
