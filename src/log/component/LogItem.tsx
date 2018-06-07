import { Body, ListItem, Right, Text } from "native-base";
import React from "react";
import { ILog } from "../state/models";

interface ILogItemProps {
  log: ILog;
}

export const LogItem: React.SFC<ILogItemProps> = props => {
  return (
    <ListItem>
      <Body>
        <Text>{props.log.message}</Text>
      </Body>
      <Right>
        <Text>{props.log.date}</Text>
      </Right>
    </ListItem>
  );
};
