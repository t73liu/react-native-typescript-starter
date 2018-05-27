import { createAction } from "typesafe-actions";
import { ITodo } from "./models";

export const toggle = createAction("TODO_TOGGLE", resolve => {
  return (title: string) => resolve(title);
});

export const add = createAction("TODO_ADD", resolve => {
  return (title: string) => resolve({ title, completed: false } as ITodo);
});

export const remove = createAction("TODO_ADD", resolve => {
    return (title: string) => resolve(title);
});
