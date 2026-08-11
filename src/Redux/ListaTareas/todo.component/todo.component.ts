import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../todo.model";
import { addTodo, toggleTodo } from "../todo.actions";
import { selectAllTodos } from "../todo.selectors";
import { AsyncPipe, NgFor} from "@angular/common";


@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [AsyncPipe, NgFor],
    template: `
    <input #todoInput type="text" placeholder="Nueva tarea">
    <button (click)= "guardarTarea(todoInput.value); todoInput.value= ''">Agregar +</button>

    <ul>
        <!-- El pipe async suscribe automaticcammete a los datos del Store-->
         <li *ngFor="let todo of (todos$ | async)"
         (click)= "alternarTarea(todo.id)"
         [style.textDecoration]= "todo.completed ? 'line-through' : 'none'">
         {{todo.title}}
    </li>
    </ul>
    `,
    styleUrl:'./todo.component.css',
})
export class TodoComponent{
    private store = inject(Store);

    todos$ = this.store.select(selectAllTodos);




    guardarTarea(titulo: string){
    if(!titulo.trim()) return;
    this.store.dispatch(addTodo({title: titulo}));
    }
    alternarTarea(id: string){
        this.store.dispatch(toggleTodo({id}));
    }
}