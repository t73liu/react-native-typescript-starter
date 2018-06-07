import { ActionType, getType } from "typesafe-actions";
import * as logs from "./actions";
import { ILog } from "./models";

export type LogActions = ActionType<typeof logs>;

export default function todoReducer(
  state: ILog[] = [],
  action: LogActions
): ILog[] {
  switch (action.type) {
    case getType(logs.add):
      return [...state, action.payload];
    case getType(logs.clear):
      return [];
    default:
      return state;
  }
}
