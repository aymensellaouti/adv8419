import { Injectable } from '@angular/core';
import {Todo} from './Model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo [];
  constructor() {
    this.todos = [
      new Todo('Lundi', 'Travailler')
    ];
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    } else {
      alert('Todo innexistant');
    }
  }
}
