import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../shared/services/task-service';
import { Task } from '../../../shared/model/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit{

  protected tasks;
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.list;
  }
  ngOnInit(): void {
  }

  
}
