import cuid from "cuid";
import { createAction } from "typesafe-actions";
import { ILog } from "./models";

export const add = createAction("LOG_ADD", resolve => {
  return (message: string) =>
    resolve({ message, date: new Date(), id: cuid() } as ILog);
});

export const clear = createAction("LOG_CLEAR", resolve => {
  return () => resolve();
});
