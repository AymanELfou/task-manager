import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  private taskService = inject(TaskService);

  title = signal('');
  tasks = this.taskService.tasks;

  addTask() {
    const currentTitle = this.title().trim();
    if (currentTitle) {
      this.taskService.addTask(currentTitle);
      this.title.set('');
    }
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
