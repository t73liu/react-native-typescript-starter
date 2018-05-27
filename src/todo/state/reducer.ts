import { AnyAction } from "redux";
import { ITodo } from "./models";

export default function todoReducer(
  state: ITodo[] = [],
  action: AnyAction
): ITodo[] {
  return state;
}
