import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "./todo.model";

    //apunta a la seccion de 'todos' dentro de la caja gloal
export const selecTodosState = createFeatureSelector<Todo[]>('todos'); //Le dice a NgRx en que cajon del estado buscar.

    //selecttor para otener todas las tareas
export const selectAllTodos = createSelector( //Toma los datos crudos yy te permite filtrarlos o ttransformarlos efficientemente.
    selecTodosState,
    (todos) => todos 
);

    //selector extra:  ffiltra y da solo las pendientes
export const selectPendingTodos = createSelector(
    selecTodosState,
    (todos) => todos.filter(t => !t.completed)
);

