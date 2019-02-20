import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import {
  loadTranslations,
  ITranslationData
} from "../actions/TranslationActions";
import { Segment, Loader, Header } from "semantic-ui-react";
import DictionaryList from "../components/DictionaryList";
import { compare } from "../utils/data-utils";
import lodash from "lodash";
class Dictionary extends Component<{
  translations: ITranslationData[];
  error?: string;
  language?: string;
  loadTranslations: () => void;
}> {
  componentDidMount() {
    // TODO loadTranslations needs to take param for language
    this.props.loadTranslations();
  }
  render() {
    const { translations, error, language } = this.props;
    if (translations.length === 0) {
      const message = error !== undefined ? error : "loading translations";
      return (
        <Segment className="colex-app-translations">
          <Loader active content={message} />
        </Segment>
      );
    } else {
      translations.sort(
        (translation1: ITranslationData, translation2: ITranslationData) =>
          compare<string>(translation1.word.word, translation2.word.word)
      );
      return (
        <div className="colex-app-dictionary-container">
          <Header className="colex-app-text" id="colex-app-dictionary-language">
            {lodash.startCase(language)} Dictionary ({translations.length} Translations)
          </Header>
          <DictionaryList translations={translations} language={language} />
        </div>
      );
    }
  }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState, ownProps: any): object => {
  return {
    translations: state.translationState.translations,
    error: state.translationState.error,
    language: ownProps.match.params.language
  };
};

const mapActionCreatorsToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ loadTranslations }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(Dictionary);
