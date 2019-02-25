import React, { Component, SFC } from "react";
import { ITranslationData } from "../actions/TranslationActions";
import { Grid, Card, Button, Icon } from "semantic-ui-react";
import { AUDIO_BACKEND } from "../constants/backend";
import WaveSurferComponent from "./WaveSurferComponent";
import { userInfo } from "os";
interface DictionaryListProps {
  translations: ITranslationData[];
  language?: string;
}

interface DefinitionProps {
  translation: ITranslationData;
}

class DictionaryDefinition extends Component<ITranslationData> {
  state  = { play: false };
  constructor(props: ITranslationData) {
      super(props);
      this.playPause = this.playPause.bind(this);
  }
  playPause() {
      this.setState({
          play: !this.state.play
      });
  }
  render() {
    const { sentence, targetWord, targetSentence, id, user, submissionTime } = this.props;
    const { play } = this.state;
    console.log(this.props);
    return (
      <Card className="colex-app-card" id="colex-definition-card">
        <Card.Content className="colex-app-card-content">
          <Button
            compact
            size="small"
            floated="right"
            className="colex-app-button"
            icon="play"
            onClick={this.playPause}
          />
          <Card.Header className="colex-app-header">{targetWord}</Card.Header>
          <WaveSurferComponent play={play} src={`${AUDIO_BACKEND}?trans_id=${id}`} waveColor='#333138' progressColor='purple' />
        </Card.Content>
        <Card.Content extra className="colex-app-card-extra">
          <Card.Meta className="colex-app-text colex-app-definition-text">{sentence}</Card.Meta>
          <Card.Meta className="colex-app-text colex-app-definition-text">{targetSentence}</Card.Meta>
        </Card.Content>
        <Card.Content extra className="colex-app-card-extra">
          <Card.Meta className="colex-app-text colex-app-definition-text">Added by {user.name} on {submissionTime.split(' ')[0]}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default class DictionaryList extends Component<DictionaryListProps> {
  state = { currentIndex: 0 };
  setIndex(index: number) {
    this.setState({
      currentIndex: index
    });
  }
  render() {
    const { translations } = this.props;
    const { currentIndex } = this.state;
    return (
      <Grid className="colex-dictionary-list" relaxed="very" columns={2}>
        <Grid.Column width={3} className="colex-dictionary-definitions">
          {translations.map((translation: ITranslationData, index: number) => (
            <div
              className="colex-dictionary-term colex-app-text"
              onClick={() => this.setIndex(index)}
            >
              {translation.word.word}
              {index === currentIndex ? (
                <Icon size="small" name="chevron right" />
              ) : null}
            </div>
          ))}
        </Grid.Column>
        <Grid.Column width={12} className="colex-dictionary-definition">
          <DictionaryDefinition {...translations[currentIndex]} />
        </Grid.Column>
      </Grid>
    );
  }
}
