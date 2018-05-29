import { ListItem, Text } from "native-base";
import React from "react";

interface ITodoItemProps {
  title: string;
}

export const TodoItem: React.SFC<ITodoItemProps> = props => {
  return (
    <ListItem>
      <Text>{props.title}</Text>
    </ListItem>
  );
};
