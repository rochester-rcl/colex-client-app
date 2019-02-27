import React, { Component } from "react";
import { Grid, Card, Button, Icon, Message } from "semantic-ui-react";
import WaveSurferComponent from "./WaveSurferComponent";

import { INarrativeData } from "../actions/NarrativeActions";

export interface INarrativeListProps {
  narratives: INarrativeData[];
}
// TODO make these 2 generic components that can be shared between Dictionary and Narrative - for now we'll break DRY

class Narrative extends Component<INarrativeData> {
  state = { play: false };
  constructor(props: INarrativeData) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.resetPlayer = this.resetPlayer.bind(this);
  }
  playPause() {
    this.setState({
      play: !this.state.play
    });
  }

  resetPlayer() {
    this.setState({
      play: false
    });
  }

  render() {
    const { audio, language, user, submissionTime, title } = this.props;
    const { play } = this.state;
    return (
      <Card className="colex-app-card" id="colex-definition-card">
        <Card.Content className="colex-app-card-content">
          <Button
            compact
            size="small"
            floated="right"
            className="colex-app-button"
            icon={play ? "pause" : "play"}
            onClick={this.playPause}
          />
          <Card.Header className="colex-app-header">{title}</Card.Header>
          <WaveSurferComponent
            play={play}
            src={audio}
            waveColor="#333138"
            progressColor="purple"
            onFinishCallback={this.resetPlayer}
          />
        </Card.Content>
        <Card.Content extra className="colex-app-card-extra">
          <Card.Meta className="colex-app-text colex-app-definition-text">
            Added by {user.name} on {submissionTime.split(" ")[0]}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra className="colex-app-card-extra">
          <Message className="colex-app-text colex-app-definition-text colex-app-message">
            This narrative currently has no transcription. <a className="colex-app-link" href="#">Sign in</a> to add one.
          </Message>
        </Card.Content>
      </Card>
    );
  }
}

export default class NarrativeList extends Component<INarrativeListProps> {
  state = { currentIndex: 0 };
  setIndex(index: number) {
    this.setState({
      currentIndex: index
    });
  }
  render() {
    const { narratives } = this.props;
    const { currentIndex } = this.state;
    return (
      <Grid className="colex-dictionary-list" relaxed="very" columns={2}>
        <Grid.Column width={5} className="colex-dictionary-definitions">
          {narratives.map((narrative: INarrativeData, index: number) => (
            <div
              className="colex-dictionary-term colex-app-text"
              onClick={() => this.setIndex(index)}
            >
              {narrative.title}
              {index === currentIndex ? (
                <Icon size="small" name="chevron right" />
              ) : null}
            </div>
          ))}
        </Grid.Column>
        <Grid.Column width={11} className="colex-dictionary-definition">
          <Narrative {...narratives[currentIndex]} />
        </Grid.Column>
      </Grid>
    );
  }
}
