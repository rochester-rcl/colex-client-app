import React, { Component, SFC } from "react";
import { Feed, Icon } from "semantic-ui-react";

export interface IFeedItem {
  date: string;
  summary: string;
}

interface FeedProps {
  list: IFeedItem[];
}

const RecentFeed: SFC<FeedProps> = props => {
  const { list } = props;
  return (
    <Feed className="colex-app-recent-feed">
      {list.map((item: IFeedItem, index: number) => (
        <Feed.Event key={index}>
          <Feed.Label>
            <Icon name="pencil" />
          </Feed.Label>
          <Feed.Content>
              <Feed.Date className="colex-app-text">
                  {item.date}
              </Feed.Date>
              <Feed.Summary className="colex-app-text">
                {item.summary}
              </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      ))}
    </Feed>
  );
};

export default RecentFeed;
