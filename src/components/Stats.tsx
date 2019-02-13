import React, { SFC } from "react";
import { Statistic } from "semantic-ui-react";
export interface IStat {
  value: number;
  label: string;
}

interface StatsProps {
  list: IStat[];
}

const Stats: SFC<StatsProps> = props => {
  const { list } = props;
  return (
    <div className="colex-app-stats">
      {list.map((stat: IStat, index: number) => (
        <Statistic className="colex-app-stat" key={index}>
          <Statistic.Value className="colex-app-text">{stat.value}</Statistic.Value>
          <Statistic.Label className="colex-app-text">{stat.label}</Statistic.Label>
        </Statistic>
      ))}
    </div>
  );
};

export default Stats;
