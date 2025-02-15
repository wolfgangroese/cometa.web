import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo.model';
import {RouterLink} from "@angular/router";
import {CheckboxModule} from "primeng/checkbox";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, RouterLink, CheckboxModule, TableModule, TagModule, Button]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (err) => {
        console.error('Fehler beim Laden der Todos:', err);
      }
    });
  }
}
