import React, { Component } from "react";
import lodash from "lodash";
import { Header, List } from "semantic-ui-react";

export interface IDictionaryBrowse {
  language: string;
  count: number;
  link: string;
  lastUpdated: string;
}

interface IDictionaryBrowseProps {
  dictionaries: IDictionaries;
}

export interface IDictionaries {
  [key: string]: IDictionaryBrowse;
}

export default class DictionaryBrowse extends Component<
  IDictionaryBrowseProps
> {
  render() {
    const { dictionaries } = this.props;
    return (
      <div className="colex-app-dictionary-browse-container">
        <List link className="colex-app-dictionary-browse-list">
          {Object.keys(dictionaries).map((key: string) => (
            <List.Item
              active
              className="colex-app-dictionary-link colex-app-text"
            >
              <a className="colex-app-link" href={dictionaries[key].link}>
                {lodash.startCase(dictionaries[key].language)} (
                {dictionaries[key].count} Translations)
              </a>
              <List.Description className="colex-app-dictionary-link-description">
                Last updated on {dictionaries[key].lastUpdated}
              </List.Description>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}
