import { Component } from '@angular/core';
import { TaskService } from '../../shared/services/task-service';
import { Task } from '../../shared/model/task';


@Component({
  selector: 'app-task-add',
  imports: [],
  templateUrl: './task-add.html',
  styleUrl: './task-add.scss',
})
export class TaskAdd {
  constructor(private taskService: TaskService){
  }
  addTask(title: string, priority:string) {
    console.log("title",title);
    console.log("prio",priority);
    this.taskService.addTask({
      id: 1,
      libelle: title,
      priority: Number(priority)
    });
  }

}
