import { ActionType, getType } from "typesafe-actions";
import * as todos from "./actions";
import { ITodo } from "./models";

type TodoActions = ActionType<typeof todos>;

export default function todoReducer(
  state: ITodo[] = [],
  action: TodoActions
): ITodo[] {
  switch (action.type) {
    case getType(todos.add):
      return [...state, action.payload];
    case getType(todos.toggle):
      return state.map(
        todo =>
          todo.title === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    case getType(todos.remove):
      return state.filter(todo => todo.title !== action.payload);
    default:
      return state;
  }
}
