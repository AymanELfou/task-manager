import { TaskService } from '../../services/task.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: any;

  constructor(public taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }
}
