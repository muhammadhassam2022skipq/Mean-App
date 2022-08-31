import { Component, NgModule, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.push(todo);
  }
  toggleTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }
}
