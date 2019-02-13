import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { ITranslationData } from "../actions/TranslationActions";
import RecentFeed, { IFeedItem } from "./RecentFeed";
interface ExploreProps {
  dictionary?: ITranslationData[];
  narratives?: object[];
  media?: object[];
  region?: object[];
}

// TODO replace with real data - will write method to convert dictionary to recent feed data

const dictionaryFeed: IFeedItem[] = [
  {
    date: "Today",
    summary: "Steve Smith added a translation to the Khasi dictionary."
  },
  {
    date: "Today",
    summary: "Stacey Wilson added a translation to the Khasi dictionary."
  },
  {
    date: "Today",
    summary: "Steve Smith added a translation to the Khasi dictionary."
  }
];

export default class Explore extends Component<ExploreProps> {
  render() {
    const { dictionary, narratives, media, region } = this.props;
    return (
      <Card.Group className="colex-app-explore-group">
        <Card key={0} className="colex-app-card">
          <Card.Content className="colex-app-card-content">
            <Button
              compact
              size="small"
              floated="right"
              className="colex-app-button"
            >
              View
            </Button>
            <Card.Header className="colex-app-header">Dictionaries</Card.Header>
            <Card.Meta className="colex-app-text">
              A good description about the dictionaries, about one or two sentences max.
            </Card.Meta>
          </Card.Content>
          <Card.Content extra className="colex-app-card-extra">
            <RecentFeed list={dictionaryFeed} />
          </Card.Content>
        </Card>
        <Card key={1} className="colex-app-card">
          <Card.Content>
            <Card.Header className="colex-app-header">Narratives</Card.Header>
            <Card.Meta className="colex-app-text">
              Coming Soon
            </Card.Meta>
          </Card.Content>
        </Card>
        <Card key={2} className="colex-app-card">
          <Card.Content>
            <Card.Header className="colex-app-header">Media</Card.Header>
            <Card.Meta className="colex-app-text">
              Coming Soon
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
        </Card>
        <Card key={3} className="colex-app-card">
          <Card.Content>
            <Card.Header className="colex-app-header">Regions</Card.Header>
            <Card.Meta className="colex-app-text">
              Coming Soon
            </Card.Meta>
            <Card.Meta />
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}
