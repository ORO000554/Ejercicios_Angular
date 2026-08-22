import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../models/todo.model";
import { addTodo, toggleTodo } from "../store/todo.actions";
import { selectAllTodos } from "../store/todo.selectors";
import { AsyncPipe, NgFor} from "@angular/common";
import { TodoService } from "../services/todo.service";


@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [AsyncPipe, NgFor],
    template: `
    <input style="width: 70%" #todoInput type="text" placeholder="Nueva tarea">
    <button (click)= "agregar(todoInput.value); todoInput.value= ''">Agregar +</button>

    <ul>
        <!-- El pipe async suscribe automaticcammete a los datos del Store-->
         <li *ngFor="let todo of (todos$ | async)">
         <span [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
                (click)="marcar(todo.id)">
            {{ todo.title }}
          </span>
          <div style="display: flex align-items: flex-end; justify-content: flex-end;">
           <button class="eliminar" (click)="eliminar(todo.id)">eliminar</button>
           </div>
          </li>
    </ul>
    `,
    styleUrl:'./todo.component.css',
})
export class TodoComponent{
    todos$: Observable<Todo[]>;

   constructor(private store: Store, private todoService: TodoService) {
    // Escuchamos el estado usando el selector
    this.todos$ = this.store.select(selectAllTodos);
  }

  agregar(title: string) {
    if (title.trim()) {
      this.todoService.addNewTodo(title);
    }
  }

  marcar(id: string) {
    this.todoService.toggleTodoStatus(id);
  }

  eliminar(id: string) {
    this.todoService.removeTodo(id);
  }
}
