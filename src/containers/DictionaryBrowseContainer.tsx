import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import {
  loadTranslations,
  ITranslationData
} from "../actions/TranslationActions";
import { Segment, Loader, Header } from "semantic-ui-react";
import DictionaryBrowse, {
  IDictionaryBrowse, IDictionaries
} from "../components/DictionaryBrowse";
import { BASENAME } from '../constants/backend';
import lodash from "lodash";

class DictionaryBrowseContainer extends Component<{
  translations: ITranslationData[];
  error?: string;
  loadTranslations: () => void;
}> {

  componentDidMount() {
    // TODO loadTranslations needs to take param for language
    this.props.loadTranslations();
  }

  static translationsToDictionary(translations: ITranslationData[]): IDictionaries {
    const dictionaries: IDictionaries = {};
    // TODO huge hack but let's just assume these are in order
    translations.forEach((translation: ITranslationData) => {
      const { language } = translation.language;
      if (language in dictionaries) {
        dictionaries[language].count++;
        dictionaries[language].lastUpdated = `${translation.submissionTime.split(' ')[0]} by ${translation.user.name}`;
      } else {
        dictionaries[language] = {
          language: language,
          count: 1,
          link: `${BASENAME}/dictionary/${language}`,
          lastUpdated: ''
        }
      }
    });
    return dictionaries;
  }

  render() {
    const { translations, error } = this.props;
    if (translations.length === 0) {
      const message = error !== undefined ? error : "loading translations";
      return (
        <Segment className="colex-app-translations">
          <Loader active content={message} />
        </Segment>
      );
    } else {
      const dicts = DictionaryBrowseContainer.translationsToDictionary(translations);
      return (
        <div className="colex-app-dictionary-container">
          <Header className="colex-app-text" id="colex-app-dictionary-language">
            Browse Dictionaries ({Object.keys(dicts).length} Total)
          </Header>
          <DictionaryBrowse dictionaries={dicts} />
        </div>
      );
    }
  }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState): object => {
  return {
    translations: state.translationState.translations,
    error: state.translationState.error
  };
};

const mapActionCreatorsToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ loadTranslations }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(DictionaryBrowseContainer);
