import { AsyncStorage } from "react-native";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { StateType } from "typesafe-actions";
import todoReducer from "./todo/state/reducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

export type IRootState = StateType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const store = createStore(persistReducer(persistConfig, rootReducer as any));

export const persistor = persistStore(store);

export default store;
