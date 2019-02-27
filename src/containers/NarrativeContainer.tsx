import React, { Component } from "react";
import NarrativeList, { INarrativeListProps } from "../components/Narrative";
import { INarrativeData } from "../actions/NarrativeActions";
import { BASENAME } from "../constants/backend";
import { Header } from "semantic-ui-react";
import { IAppState } from "../reducers";
import { connect } from "react-redux";
import lodash from "lodash";
const sampleNarratives: INarrativeData[] = [
  {
    audio: `${BASENAME}/audio/khasi_story.mp3`,
    title: "A Khashi Story",
    user: {
      id: 1,
      name: "Aeshaan",
      language: {
        id: 1,
        language: "Khashi"
      }
    },
    language: "Khashi",
    submissionTime: "2019-02-21 19:40:38"
  }
];

interface INarrativeContainerProps extends INarrativeListProps {
  language?: string;
}

class NarrativeContainer extends Component<INarrativeContainerProps> {
  render() {
    const { language, narratives } = this.props;
    return (
      <div className="colex-app-dictionary-container">
        <Header className="colex-app-text" id="colex-app-dictionary-language">
          {lodash.startCase(language)} Narratives ({narratives.length} Total){" "}
        </Header>
        <NarrativeList narratives={narratives} />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState, ownProps: any): object => {
  return {
    language: ownProps.match.params.language,
    narratives: sampleNarratives
  };
};

export default connect(mapStateToProps)(NarrativeContainer);
