import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Todo } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Korrektur: styleUrls im Plural
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  taskCount: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos(); // Todos laden
  }

  // Todos laden
  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data; // Daten in die lokale Variable speichern
        this.updateTaskCount(); // Aufgabe zählen
      },
      error: (err) => {
        console.error('Failed to load todos', err);
        this.todos = [];
        this.taskCount = 0; // Keine Todos vorhanden
      }
    });
  }

  // Aufgaben zählen
  private updateTaskCount(): void {
    this.taskCount = this.todos.length;
  }
}
