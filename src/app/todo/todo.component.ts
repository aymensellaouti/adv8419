import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../Model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  description = '';
  title = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  addTodo() {
    const todo = new Todo(this.title, this.description);
    this.todoService.addTodo(todo);
    this.title = '';
    this.description = '';
  }

}
