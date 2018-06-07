import cuid from "cuid";
import { createAction } from "typesafe-actions";
import { ITodo } from "./models";

export const add = createAction("TODO_ADD", resolve => {
  return (title: string) =>
    resolve({ title, completed: false, id: cuid() } as ITodo);
});

export const remove = createAction("TODO_REMOVE", resolve => {
  return (todo: ITodo) => resolve(todo);
});
