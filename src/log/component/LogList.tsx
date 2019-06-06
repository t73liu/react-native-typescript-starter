import { List } from "native-base";
import React from "react";
import { ILog } from "../state/models";
import { LogItem } from "./LogItem";

interface ILogListProps {
  logList: ILog[];
}

export const LogList: React.SFC<ILogListProps> = props => {
  return (
    <List>
      {props.logList.map(log => (
        <LogItem key={log.id} log={log} />
      ))}
    </List>
  );
};
