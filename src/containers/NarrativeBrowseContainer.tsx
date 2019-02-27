import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import { INarrativeData } from "../actions/NarrativeActions";
import { Segment, Loader, Header } from "semantic-ui-react";
import NarrativeBrowse, {
  INarrativeBrowse,
  INarratives
} from "../components/NarrativeBrowse";
import { BASENAME } from "../constants/backend";
import lodash from "lodash";

const sampleNarratives: INarratives = {
  khashi: {
    language: "Khashi",
    count: 1,
    link: `${BASENAME}/narrative/khashi`,
    lastUpdated: "2019-02-21"
  }
};

class NarrativeBrowseContainer extends Component<{
  narratives: INarratives;
  error?: string;
}> {
  render() {
    const { narratives, error } = this.props;
    return (
      <div className="colex-app-dictionary-container">
        <Header className="colex-app-text" id="colex-app-dictionary-language">
          Browse Narratives ({Object.keys(narratives).length} Total)
        </Header>
        <NarrativeBrowse narratives={narratives} />
      </div>
    );
  }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState): object => {
  return {
    narratives: sampleNarratives,
    error: state.translationState.error
  };
};

export default connect(mapStateToProps)(NarrativeBrowseContainer);
