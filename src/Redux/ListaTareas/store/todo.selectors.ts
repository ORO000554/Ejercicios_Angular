import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { todoState } from "./todo.state";

    //apunta a la seccion de 'todos' dentro de la caja gloal
export const selecTodosState = createFeatureSelector<Todo[]>('todos'); //Le dice a NgRx en que cajon del estado buscar.

export const selectTodoFeature = createFeatureSelector<todoState>('todos');
    //selecttor para otener todas las tareas
export const selectAllTodos = createSelector( //Toma los datos crudos yy te permite filtrarlos o ttransformarlos efficientemente.
    selectTodoFeature,
    (state: todoState) => state.todos
);

    //selector extra:  ffiltra y da solo las pendientes
export const selectPendingTodos = createSelector(
    selectTodoFeature,
    (state) => state.todos.filter(t => !t.completed)
);

