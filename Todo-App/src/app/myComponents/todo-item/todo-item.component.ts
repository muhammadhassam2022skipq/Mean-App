import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo): void {
    this.todoDelete.emit(todo);
  }
  checkBoxDone(todo: Todo): void {
    this.todoToggle.emit(todo);
  }
}
