import { Body, Button, Icon, ListItem, Right, Text } from "native-base";
import React from "react";
import { ITodo } from "../state/models";

interface ITodoItemProps {
  removeToDo: (todo: ITodo) => any;
  todo: ITodo;
}

export const TodoItem: React.SFC<ITodoItemProps> = props => {
  const pressButton = () => {
    props.removeToDo(props.todo);
  };

  return (
    <ListItem>
      <Body>
        <Text>{props.todo.title}</Text>
      </Body>
      <Right>
        <Button
          iconRight={true}
          danger={true}
          transparent={true}
          onPress={pressButton}
        >
          <Icon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};
