import { createReducer, on, State } from "@ngrx/store";
import { Todo } from "./todo.model";
import { addTodo, toggleTodo } from "./todo.actions";


//1.- Estado inicial, la lissta empieza vacia
export const initialState: Todo[] = [];


export const todoReducer = createReducer(

    initialState,

    //En esta sección se escucha la accion de 'addTodo'
    on(addTodo, (state, {title}) =>{
        const newTodo: Todo = {id: Date.now().toString(), title, completed: false};
        return [...state,newTodo]; //DEVUELVE UN NUEVO ARREGLO CCON LA TAREA AGREGADA
                                    // Usar el operador spread (...) esto cclona el arreglo viejo y le añade el nuevo.
                                    //No usar state.push(), porque eso rompe la inmutabilidad de Redux.
    }),
    // En esta parte se escucha la accion de 'toggleTodo
    on(toggleTodo, (state, {id}) =>{
        return state.map(todo =>            // Recorre el arrreglo actal y crea uno nuevo, si enccuentra un id, clona ese ojeto solo cambiiando completed.
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
    })
);