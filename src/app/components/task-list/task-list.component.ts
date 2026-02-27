import { TaskService } from '../../services/task.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskService = inject(TaskService);
  tasks = this.taskService.tasks;
}
