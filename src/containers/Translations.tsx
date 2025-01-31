import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import {
  loadTranslations,
  ITranslationData
} from "../actions/TranslationActions";
import { Segment, Loader, Header } from "semantic-ui-react";

class TranslationsApp extends Component<{
  translations: ITranslationData[];
  error?: string;
  loadTranslations: () => void;
}> {
  componentDidMount() {
    this.props.loadTranslations();
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
      return (
        <div className="colex-app-translations">
          <Header className="colex-app-tagline">CoLex is a Translation App for Endangered Languages</Header>
          <Segment className="colex-app-recent-translations">
            <Header className="colex-app-header" id="colex-app-recent-translations-header">Recent Translations:</Header>
            {translations.map((translation: ITranslationData, index: number) => {
              return <Header key={index}>{translation.word.word}</Header>;
            })}
          </Segment>
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
)(TranslationsApp);
