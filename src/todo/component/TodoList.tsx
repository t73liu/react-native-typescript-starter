import { List } from "native-base";
import React from "react";
import { ITodo } from "../state/models";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  toDoList: ITodo[];
}

export const TodoList: React.SFC<ITodoListProps> = props => {
  return (
    <List>
      {props.toDoList.map(todo => (
        <TodoItem key={todo.title} title={todo.title} />
      ))}
    </List>
  );
};
