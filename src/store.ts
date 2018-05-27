import { combineReducers, createStore } from "redux";
import { StateType } from "typesafe-actions";
import { todoReducer } from "./home/state/todo-reducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

export type IRootState = StateType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
