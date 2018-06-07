import { AsyncStorage } from "react-native";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import logReducer, { LogActions } from "./log/state/reducer";
import todoReducer, { addLogEpic, TodoActions } from "./todo/state/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  logs: logReducer
});

export type IRootState = StateType<typeof rootReducer>;

export type IRootAction = TodoActions | LogActions;

const rootEpic = combineEpics(addLogEpic);

const epicMiddleware = createEpicMiddleware<
  IRootAction,
  IRootAction,
  IRootState
>();

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer<IRootState, IRootAction>(
  persistConfig,
  rootReducer
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);
