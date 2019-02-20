import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import {
  loadTranslations,
  ITranslationData
} from "../actions/TranslationActions";
import { Segment, Loader, Header } from "semantic-ui-react";
import Explore from "../components/Explore";
import Stats, { IStat } from "../components/Stats";

// TODO remove fake stats
const fakeStats: IStat[] = [
  {
    label: "Contributors",
    value: 323
  },
  {
    label: "Translations",
    value: 1454
  },
  {
    label: "Languages",
    value: 78
  }
];

class Landing extends Component<{
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
        <div className="colex-app-landing-container">
          <div className="colex-app-explore">
            <Header className="colex-app-tagline">
              Community Language Portal: accelerating and making more inclusive
              the process of documenting and describing languages
            </Header>
            <Explore dictionary={translations} />
          </div>
          <div className="colex-app-stats-container">
            <Stats list={fakeStats} />
          </div>
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
)(Landing);
