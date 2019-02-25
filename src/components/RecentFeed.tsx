import React, { Component, FunctionComponent, ReactElement } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { ITranslationData } from "../actions/TranslationActions";
import { BASENAME } from "../constants/backend";
// TODO figure out why return type from SFC isn't working - maybe just make a type
export interface IFeedItem {
  date: string;
  summary: any;
}

interface FeedProps {
  list: IFeedItem[];
}

export const formatTranslationsFeed = (
  translations: ITranslationData[],
  total: number = 3
): IFeedItem[] => {
  return translations.slice(-total).map((translation: ITranslationData) => {
    return {
      date: translation.submissionTime.split(" ")[0],
      summary: <FeedSummary {...translation} />
    };
  });
};
// TODO put basename here
const FeedSummary: FunctionComponent<ITranslationData> = (translation) => (
  <div className="colex-app-recent-feed-summary">
    {translation.user.name} added a translation to the{" "}
    <a href={`${BASENAME}/dictionary/${translation.language.language}`}>
      {translation.language.language}
    </a>{" "}
    dictionary
  </div>
);
const formatSummary = (translation: ITranslationData): string =>
  `${translation.user.name} added a translation to the ${
    translation.language.language
  } dictionary`;

const RecentFeed: FunctionComponent<FeedProps> = props => {
  const { list } = props;
  return (
    <Feed className="colex-app-recent-feed">
      {list.map((item: IFeedItem, index: number) => (
        <Feed.Event key={index}>
          <Feed.Label>
            <Icon name="pencil" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date className="colex-app-text">{item.date}</Feed.Date>
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
