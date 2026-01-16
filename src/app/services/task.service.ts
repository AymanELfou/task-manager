import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks = signal<Task[]>([]);

  addTask(title: string) {
    this.tasks.update(tasks => [
      ...tasks,
      { id: Date.now(), title, completed: false }
    ]);
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(t => t.id !== id)
    );
  }
}

