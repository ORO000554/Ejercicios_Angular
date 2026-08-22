import { Todo } from "../models/todo.model";

export interface todoState{
  todos: Todo[];
  loading: boolean;
}

export const initialTodoState: todoState={
  todos: [],
  loading: false
};
