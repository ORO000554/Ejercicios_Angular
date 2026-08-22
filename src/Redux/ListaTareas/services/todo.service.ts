import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import  * as TodoActions from '../store/todo.actions';


@Injectable({
  providedIn: 'root'

})
export class TodoService{
  constructor(private store: Store){}

  addNewTodo(title: string){
    this.store.dispatch(TodoActions.addTodo({title}));
  }
  toggleTodoStatus(id: string){
    this.store.dispatch(TodoActions.toggleTodo({id}));
  }
  removeTodo(id: string){
    this.store.dispatch(TodoActions.deleteTodo({id}));
  }
}
