import { List } from "native-base";
import React from "react";
import TodoItemContainer from "../container/TodoItemContainer";
import { ITodo } from "../state/models";

interface ITodoListProps {
  toDoList: ITodo[];
}

export const TodoList: React.SFC<ITodoListProps> = props => {
  return (
    <List>
      {props.toDoList.map(todo => (
        <TodoItemContainer key={todo.id} todo={todo} />
      ))}
    </List>
  );
};
