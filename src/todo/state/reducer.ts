import { Epic } from "redux-observable";
import { filter, map } from "rxjs/operators";
import { ActionType, getType, isActionOf } from "typesafe-actions";
import * as logs from "../../log/state/actions";
import { IRootAction, IRootState } from "../../store";
import * as todos from "./actions";
import { ITodo } from "./models";

export type TodoActions = ActionType<typeof todos>;

export const addLogEpic: Epic<
  IRootAction,
  IRootAction,
  IRootState
> = action$ => {
  return action$.pipe(
    filter(isActionOf([todos.add, todos.remove])),
    map(action => {
      const message = `${action.type} - ${action.payload.title}`;
      return logs.add(message);
    })
  );
};

export default function todoReducer(
  state: ITodo[] = [],
  action: TodoActions
): ITodo[] {
  switch (action.type) {
    case getType(todos.add):
      return [...state, action.payload];
    case getType(todos.remove):
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
