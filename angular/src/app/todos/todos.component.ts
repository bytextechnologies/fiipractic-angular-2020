import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { IToDo, ToDoType } from './models';
import { ToDoService } from './services';

@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class ToDosComponent implements OnInit{
  public toDosType: ToDoType = 'all';
  public todos$: Observable<IToDo[]> = this.toDoService.todos$;
  public isLoading$: Observable<boolean> = this.toDoService.isLoading$;

  constructor(private toDoService: ToDoService) {}

  public ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(selectedType: ToDoType = 'all'): void {
    this.toDosType = selectedType;
    this.toDoService.getTodos(selectedType);
  }

  public addTodo() {
    this.toDoService.addTodo();
  }

  public updateTodo(todo: IToDo): void {
    this.toDoService.updateTodo(todo);
  }

  public deleteTodo(todo: IToDo): void {
    this.toDoService.deleteTodo(todo);
  }
}
