import React, { Component } from "react";
import { Card, Button, Icon, Transition, List } from "semantic-ui-react";
import { ITranslationData } from "../actions/TranslationActions";
import RecentFeed, { IFeedItem, formatTranslationsFeed } from "./RecentFeed";
import history from "../utils/history";
interface ExploreProps {
  dictionary: ITranslationData[];
  narratives?: object[];
  media?: object[];
  region?: object[];
}

export default class Explore extends Component<ExploreProps> {
  state = { currentIndex: 0 };
  constructor(props: any) {
    super(props);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
  }
  setCurrentIndex(index: number): void {
    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { dictionary, narratives, media, region } = this.props;
    const { currentIndex } = this.state;
    const dictionaryFeed = formatTranslationsFeed(dictionary);
    const cards = [
      <Card key={0} className="colex-app-card">
        <Card.Content className="colex-app-card-content">
          <Button
            as="a"
            compact
            size="small"
            floated="right"
            className="colex-app-button"
            href="dictionaries"
          >
            View
          </Button>
          <Card.Header className="colex-app-header">Dictionaries</Card.Header>
          <Card.Meta className="colex-app-text">
            Collaborative Construction of an Interactive Lexicon
          </Card.Meta>
        </Card.Content>
        <Card.Content extra className="colex-app-card-extra">
          <RecentFeed list={dictionaryFeed} />
        </Card.Content>
      </Card>,
      <Card key={1} className="colex-app-card">
        <Card.Content>
          <Card.Header className="colex-app-header">Narratives</Card.Header>
          <Card.Meta className="colex-app-text">Coming Soon</Card.Meta>
        </Card.Content>
      </Card>,
      <Card key={2} className="colex-app-card">
        <Card.Content>
          <Card.Header className="colex-app-header">Media</Card.Header>
          <Card.Meta className="colex-app-text">Coming Soon</Card.Meta>
          <Card.Meta />
        </Card.Content>
      </Card>,
      <Card key={3} className="colex-app-card">
        <Card.Content>
          <Card.Header className="colex-app-header">Regions</Card.Header>
          <Card.Meta className="colex-app-text">Coming Soon</Card.Meta>
          <Card.Meta />
        </Card.Content>
      </Card>
    ];
    const buttons = new Array(cards.length)
      .fill(0)
      .map((val: number, index: number) => (
        <Icon
          className="colex-app-explore-group-button"
          name="circle"
          onClick={() => this.setCurrentIndex(index)}
        />
      ));
    return (
      <div className="colex-app-explore-group">
        {cards[currentIndex]}
        <div className="colex-app-explore-group-buttons">{buttons}</div>
      </div>
    );
  }
}
