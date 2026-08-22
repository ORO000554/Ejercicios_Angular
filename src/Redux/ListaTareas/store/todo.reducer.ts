import { createReducer, on } from "@ngrx/store";
import { Todo } from '../models/todo.model';
// import { addTodo, toggleTodo, deleTodo } from "../store/todo.actions";
import * as TodoActions from '../store/todo.actions'
import { initialTodoState } from "./todo.state";

//1.- Estado inicial, la lissta empieza vacia

export const todoReducer = createReducer(

    initialTodoState,

    //En esta sección se escucha la accion de 'addTodo'
    on(TodoActions.addTodo, (state, { title }) =>{
        const newTodo: Todo = {
          id: Math.random().toString(36).substring(2),
          title: title,
          completed: false
        };
        return {
          ...state,
          todos: [...state.todos, newTodo]
        }; //DEVUELVE UN NUEVO ARREGLO CCON LA TAREA AGREGADA
       // Usar el operador spread (...) esto cclona el arreglo viejo y le añade el nuevo                          //No usar state.push(), porque eso rompe la inmutabilidad de Redux.
    }),
    // En esta parte se escucha la accion de 'toggleTodo
    on(TodoActions.toggleTodo, (state, {id}) =>({
      ...state,
      todos: state.todos.map(todo =>            // Recorre el arrreglo actal y crea uno nuevo, si enccuentra un id, clona ese ojeto solo cambiiando completed.
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
    })),

  on(TodoActions.deleteTodo, (state, {id} ) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }))
);
