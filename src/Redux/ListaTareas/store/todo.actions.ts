// Las acciones son simple mensajes, que indican que quiere hacer el usuario,
// pero no dicen commo se hace.
import { Todo } from "../models/todo.model";
import { createAction, props } from "@ngrx/store";

export const addTodo = createAction( //'[Todo Page] Add Todo ' es una etiqueta dde texo lire.
    '[Todo Page], Add Todo',         //Sirvve para que las herramientas de desarrollo Redux DevToolss sepan desde que pantalla se origino el evento.
    props<{title: string}>()        // Es la informmacion extra (payload) que necesita la accion.
                                    // Para agregar una tarea necesitas saer el titulo, para marcarla como entregada necesitas su id.
);

export const toggleTodo  = createAction(
    '[Todo Page], Toggle Todo',
    props<{id: string}>()
);

//Accion para eliminar una tarea
export const deleteTodo = createAction(
  '[Todo page], delete Todo',
  props<{id: string}>()
)
